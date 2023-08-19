"use client";
import useAuth from "@/hooks/useAuth";
import AuthForm, { AuthField } from "./AuthForm";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

interface SignUpPageProps {
  isModal?: boolean;
}

const signUpFields: AuthField[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
];

const SignUp: React.FC<SignUpPageProps> = ({ isModal = false }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { signup, loading } = useAuth();
  const handleSignIn = async (formData: { [key: string]: string }) => {
    console.log("Sign Up", formData);
    await signup(formData);
    // router.back();
  };

  useEffect(() => {
    if (session && session.user) {
      isModal = false
      router.push("/dashboard");
    }
  }, [session, router, isModal]);


  return (
    <div className="">
      <Modal open={isModal} onClose={() => router.back()}>
        <AuthForm
          title='Sign Up'
          fields={signUpFields}
          onSubmit={handleSignIn}
          submitButtonText="Sign Up"
          loading={loading}
        
        />
      </Modal>
    </div>
  );
};

export default SignUp;
