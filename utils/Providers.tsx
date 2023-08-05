"use client";
import AuthGuard from "@/lib/AuthGuard";
import StyledComponentsRegistry from "@/lib/registery";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <StyledComponentsRegistry>
        <AuthGuard>
          {children} <Toaster />
        </AuthGuard>
      </StyledComponentsRegistry>
    </SessionProvider>
  );
};

export default Providers;
