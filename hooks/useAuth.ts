"use client";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { interceptor } from "@/axios.config";
import { useRouter } from "next/navigation";

interface AuthHook {
  session: any;
  loading: boolean;
  status: any;
  error: string | null;
  signup: (formData: { [key: string]: string }) => Promise<void>;
  signin: (formData: { [key: string]: string }) => Promise<void>;
  userUpdate: (formData: { [key: string]: string }) => Promise<void>;
  signout: () => Promise<void>;
  showModal: boolean;
  modalMessage: string;
  modalErrorType: "success" | "error";
  closeModal: () => void;
}

const useAuth = (): AuthHook => {
  const { data: session, status, update } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [modalMessage, setModalMessage] = useState("");
  const [modalErrorType, setModalErrorType] = useState<"success" | "error">(
    "success"
  );
  const [showModal, setShowModal] = useState(false);

  const openModal = (errorType: "success" | "error", errorMessage: string) => {
    setModalMessage(errorMessage);
    setModalErrorType(errorType);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const router = useRouter();

  const signup = async (formData: { [key: string]: string }): Promise<void> => {
    setLoading(true);

    try {
      // Perform signup logic using axios
      await interceptor.post("auth/signup", formData);
      setLoading(false);
      setError(null);
      toast.success("Signup successful!");
      openModal(
        "success",
        "Signup successful! \n A verification email has been sent"
      );
      setTimeout(() => {
        router.push("/signin");
      }, 1000);
    } catch (error: any) {
      console.log(error.response.data);
      setLoading(false);
      setError(error.message);
      toast.error(error.response.data);
      openModal("error", error.response.data);
    }
  };

  const signin = async (formData: { [key: string]: string }) => {
    try {
      // Perform signin logic using axios
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      toast.loading("Submiing credentials..", {
        duration: 1000,
      });

      if (res && res.error !== null) {
        toast.error(`${res.error}`);
      }

      setLoading(false);
      setError(null);

      if (session && session.user) {
        toast.success("Signin successful!", {
          duration: 2000,
          position: "bottom-right",
        });
        router.back();
        setTimeout(() => {
          router.push("/dashboard");
        }, 500);
      }
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      toast.error(error);
      toast.error("Signin failed. Please check your credentials.", {
        duration: 3000,
        position: "bottom-left",
      });
    }
  };
  const userUpdate = async (formData: { [key: string]: string }) => {
    setLoading(true);
    try {
      // Perform signin logic using axios
      const up = update({
        ...session,
        user: {
          ...session?.user,
          ...formData,
        },
      });

      console.log(up);

      setLoading(false);
      setError(null);

      toast.success("Update SuccessFul");
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      toast.error(error.response.data);
      toast.error("Profile Update failed", {
        duration: 3000,
        position: "bottom-left",
      });
    }
  };

  const signout = async (): Promise<void> => {
    await signOut();
    toast.success("Signout successful!", {
      duration: 2000,
      position: "bottom-right",
    });
  };

  return {
    showModal,
    modalMessage,
    modalErrorType,
    closeModal,
    session,
    loading,
    status,
    error,
    signup,
    signin,
    userUpdate,
    signout,
  };
};

export default useAuth;
