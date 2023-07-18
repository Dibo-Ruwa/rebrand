"use client";

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;
export const Initials = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background: var(--color2);
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
`;
