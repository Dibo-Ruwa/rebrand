"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import styled from "styled-components";
import { sublinks } from "@/constants";
import { assets } from "@/public/assets";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import Link from "next/link";

const FooterContainer = styled.footer`
  background-color: #ffffff;
  color: #000000;
  padding: 5% 8%;

  .logo {
    position: relative;
    width: 100px;
    height: 40px;
  }
`;

const FooterContent = styled.div``;

const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Column = styled.div`
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--primary);
`;

const SublinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Sublink = styled.li`
  margin-bottom: 8px;
  color: var(--content);
`;
const SubRoutes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const SublinkAnchor = styled.a`
  color: #898989;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: var(--primary);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          {/* Column 1 */}
          <Column>
            <div
              style={{
                display: "flex",

                flexDirection: "column",
                marginBottom: "16px",
              }}
              className="logo"
            >
              <Logo src="/logo.png" fill={true} alt="Logo" />
            </div>
            <p style={{ color: "#ccc", marginBottom: "16px" }}>
              Make life easier, one service at a time.
            </p>
            <div style={{ display: "flex", gap: "20px", marginTop: " 20px" }}>
              <Link
                href="/"
                style={{ color: "var(--content)", fontSize: "28px" }}
              >
                <FiFacebook />
              </Link>
              <Link
                href="/"
                style={{ color: "var(--content)", fontSize: "28px" }}
              >
                <FaTwitter />
              </Link>
              <Link
                href="/"
                style={{ color: "var(--content)", fontSize: "28px" }}
              >
                <FaInstagram />
              </Link>
              <Link
                href="/"
                style={{ color: "var(--content)", fontSize: "28px" }}
              >
                <FaLinkedin />
              </Link>
            </div>
          </Column>

          {/* <SubRoutes> */}
          {sublinks.map((column, index) => (
            <Column key={index}>
              <Title>{column.title}</Title>
              <SublinkList>
                {column.links.map((link, index) => (
                  <Sublink key={index}>
                    <SublinkAnchor href={link.path}>{link.name}</SublinkAnchor>
                  </Sublink>
                ))}
              </SublinkList>
            </Column>
          ))}
          {/* </SubRoutes> */}
        </FooterGrid>

        {/* Copyright */}
        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <p style={{ color: "#ccc", fontSize: "14px" }}>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
