"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Container, FailureContainer, SuccessContainer } from "./verifyMail.styles";
import Loader from "@/component/ui/loader/Loader";
import { useRouter } from "next/navigation";

const SuccessComponent: React.FC = () => {
  return (
    <SuccessContainer>
      <h2>Verification Successful</h2>
      <p>Your email has been verified successfully.</p>
    </SuccessContainer>
  );
};

const FailureComponent: React.FC = () => {
  return (
    <FailureContainer>
      <h2>Verification Failed</h2>
      <p>There was an issue verifying your email. Please try again.</p>
    </FailureContainer>
  );
};

const VerifyMail = ({ token }: { token: string }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState<
    "success" | "failure" | null
  >(null);

  useEffect(() => {
    if (typeof token === "string") {
      // Make the API call to verify the token
      axios
        .get(`/api/auth/verifyMail/${token}`)
        .then((response) => {
          const success = response.data.success;
          setLoading(false);
          setVerificationStatus(success ? "success" : "failure");
        })
        .catch((error) => {
          setLoading(false);
          console.error("Verification API error:", error);
          setVerificationStatus("failure");
        });
    } else {
      setLoading(false);
      setVerificationStatus("failure");
    }
  }, [token]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      {verificationStatus === "success" ? (
        <SuccessComponent />
      ) : (
        <FailureComponent />
      )}
    </Container>
  );
};

export default VerifyMail;
