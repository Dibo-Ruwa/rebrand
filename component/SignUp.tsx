"use client";
import AuthForm, { AuthField } from "./AuthForm";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

interface SignUpPageProps {
  isModal?: boolean;
}

const signUpFields: AuthField[] = [
  {
    name: "fullName",
    label: "Full Name",
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
  const router = useRouter();
  const handleSignIn = (formData: { [key: string]: string }) => {
    console.log("Sign Up", formData);
    router.back();
  };

  return (
    <div className="">
      <Modal open={isModal} onClose={() => router.back()}>
        <AuthForm
          fields={signUpFields}
          onSubmit={handleSignIn}
          submitButtonText="Sign Up"
          // onCancel={handleBack}
        />
      </Modal>
    </div>
  );
};

export default SignUp;
