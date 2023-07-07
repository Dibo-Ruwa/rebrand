"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import styled from "styled-components";

// Array of sublinks
const sublinks = [
  {
    title: "Column 2",
    links: [
      { name: "Sub Link 1", path: "/sublink1" },
      { name: "Sub Link 2", path: "/sublink2" },
      { name: "Sub Link 3", path: "/sublink3" },
    ],
  },
  {
    title: "Column 3",
    links: [
      { name: "Sub Link 4", path: "/sublink4" },
      { name: "Sub Link 5", path: "/sublink5" },
      { name: "Sub Link 6", path: "/sublink6" },
    ],
  },
  {
    title: "Column 4",
    links: [
      { name: "Sub Link 7", path: "/sublink7" },
      { name: "Sub Link 8", path: "/sublink8" },
      { name: "Sub Link 9", path: "/sublink9" },
    ],
  },
];

const FooterContainer = styled.footer`
  background-color: #ffffff;
  color: #000000;
  padding: 5% 8%;
`;

const FooterContent = styled.div``;

const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Column = styled.div`
  margin-bottom: 24px;
`;

const Logo = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 8px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const SublinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Sublink = styled.li`
  margin-bottom: 8px;
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
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Logo src="/logo.png" alt="Logo" />
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                Company Name
              </span>
            </div>
            <p style={{ color: "#ccc", marginBottom: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <a href="#" style={{ color: "#fff" }}>
                <FaFacebook size={24} />
              </a>
              <a href="#" style={{ color: "#fff" }}>
                <FaTwitter size={24} />
              </a>
              <a href="#" style={{ color: "#fff" }}>
                <FaInstagram size={24} />
              </a>
              <a href="#" style={{ color: "#fff" }}>
                <FaLinkedin size={24} />
              </a>
            </div>
          </Column>

          {/* Map sublinks */}
          {/* <SubRoutes> */}
            {sublinks.map((column, index) => (
              <Column key={index}>
                <Title>{column.title}</Title>
                <SublinkList>
                  {column.links.map((link, index) => (
                    <Sublink key={index}>
                      <SublinkAnchor href={link.path}>
                        {link.name}
                      </SublinkAnchor>
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
