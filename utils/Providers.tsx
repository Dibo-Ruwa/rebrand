"use client";
import Guard from "@/component/Guard";
import StyledComponentsRegistry from "@/lib/registery";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <StyledComponentsRegistry>
        <Guard>
          {children} <Toaster />
        </Guard>
      </StyledComponentsRegistry>
    </SessionProvider>
  );
};

export default Providers;
