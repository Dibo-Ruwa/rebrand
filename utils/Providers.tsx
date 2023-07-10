import StyledComponentsRegistry from "@/lib/registery";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <StyledComponentsRegistry> {children}</StyledComponentsRegistry>;
};

export default Providers;
