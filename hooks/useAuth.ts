'use client'
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { interceptor } from "@/axios.config";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";

interface AuthHook {
  session: any;
  loading: boolean;
  error: string | null;
  signup: (formData: { [key: string]: string }) => Promise<void>;
  signin: (formData: { [key: string]: string }) => Promise<void>;
  signout: () => Promise<void>;
}

const useAuth = (): AuthHook => {
  const { user, isAuthenticated, login, logout } = useUserStore();
  const { data: session, status } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signup = async (
    formData: { [key: string]: string }
  ): Promise<void> => {
    setLoading(true);

    try {
      // Perform signup logic using axios
      await interceptor.post("/api/auth/signup", formData);
      setLoading(false);
      setError(null);
      toast.success("Signup successful!");
      setTimeout(() => {
        router.push("/signin");
      }, 1000);
    } catch (error: any) {
      console.log(error.response.data)
      setLoading(false);
      setError(error.message);
      toast.error(error.response.data);
      toast.error("Signup failed. Please try again.");
    }
  };

  useEffect(() => {
    // If the user is authenticated through NextAuth.js, update the Zustand store
    if (session?.user) {
      login(session.user);
    } else {
      logout();
    }
  }, [session, login, logout]);
  

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
      
      setTimeout(() => {
        router.push("/");
      }, 500);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      toast.error(error.response.data)
      toast.error("Signin failed. Please check your credentials.");
    }
  };

  const signout = async (): Promise<void> => {
    await signOut();
    toast.success("Signout successful!");
  };

  return {
    session,
    loading,
    error,
    signup,
    signin,
    signout,
  };
};

export default useAuth;
