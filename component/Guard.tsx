"use client";

import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import styled from "styled-components";
import Loader from "./ui/loader/Loader";
import { usePathname, useRouter } from "next/navigation";

const Container = styled.div``;

const Guard = ({ children }: { children: React.ReactNode }) => {
  // const protectedRoutes = ["/dashboard", "/profile", "/cart"];
  const { data: session, status } = useSession();
  // const router = useRouter();
  // const pathName = usePathname();

  if (status === "loading") return <Loader />;

  return <Container>{children}</Container>;
};

export default Guard;
