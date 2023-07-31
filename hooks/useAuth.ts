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
  signout: () => Promise<void>;
}

const useAuth = (): AuthHook => {
  const { data: session, status } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signup = async (formData: { [key: string]: string }): Promise<void> => {
    setLoading(true);

    try {
      // Perform signup logic using axios
      await interceptor.post("/auth/signup", formData);
      setLoading(false);
      setError(null);
      toast.success("Signup successful!", {
        duration: 2000,
        position: "bottom-right"
      });
      setTimeout(() => {
        router.push("/signin");
      }, 1000);
    } catch (error: any) {
      console.log(error.response.data);
      setLoading(false);
      setError(error.message);
      toast.error(error.response.data);
      toast.error("Signup failed. Please try again.", {
        duration: 3000,
        position: "bottom-right"
      });
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

      if (res && res.error !== null) {
        console.log(res.error);
        // toast.error(res.error)
      }

      setLoading(false);
      setError(null);

      toast.success("Signin successful!");
      toast.success("Signin successful!", {
        duration: 2000,
        position: "bottom-right",
      });
      router.back();

      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      toast.error(error.response.data);
      toast.error("Signin failed. Please check your credentials.", {
        duration: 3000,
        position: "bottom-left"
      });
    }
  };

  const signout = async (): Promise<void> => {
    await signOut();
    toast.success("Signout successful!", {
      duration: 2000,
      position: "bottom-right"
    });
  };

  return {
    session,
    loading,
    status,
    error,
    signup,
    signin,
    signout,
  };
};

export default useAuth;
