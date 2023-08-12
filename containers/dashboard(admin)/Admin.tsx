"use client";
import { useSession } from "next-auth/react";
import { Container } from "./Admin.styles";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const Admin = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      redirect("/signin");
    } else if (session?.user?.role !== "admin") {
      redirect("/dashboard");
    }
  }, [session]);

  return <Container>Enter</Container>;
};

export default Admin;
