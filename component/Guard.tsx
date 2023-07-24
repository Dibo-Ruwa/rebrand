"use client";

import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import styled from "styled-components";
import Loader from "./ui/loader/Loader";

const Container = styled.div``;

const Guard = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  if (status === "loading") return <Loader />;
  return <Container>{children}</Container>;
};

export default Guard;
