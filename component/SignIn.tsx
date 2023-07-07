"use client";
import AuthForm, { AuthField } from "./AuthForm";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

interface SignInPageProps {
  isModal?: boolean;
}

const signInFields: AuthField[] = [
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
];

const SignIn: React.FC<SignInPageProps> = ({ isModal = false }) => {
  const router = useRouter();
  const handleSignIn = (formData: { [key: string]: string }) => {
    console.log("Sign In", formData);
    // router.back();
  };

  return (
    <div className="">
      <Modal open={isModal} onClose={() => router.back()}>
        <AuthForm
          fields={signInFields}
          onSubmit={handleSignIn}
          submitButtonText="Sign In"
          // onCancel={handleBack}
        />
      </Modal>
    </div>
  );
};

export default SignIn;
