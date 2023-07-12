"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export const NavbarContainer = styled.div<{ isScrolled: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  padding: 0 8%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  transition: all 200ms;
  ${({ isScrolled }) =>
    isScrolled &&
    `  
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.663);
    border-bottom: 1px solid rgba(255, 255, 255, 0.257);
    height: 10vh;
    `}
`;

export const LogoImage = styled(Image)`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 100%;
  }
`;

export const Toggle = styled.div`
  display: none;
  font-size: 24px;
  color: #48db45;

  z-index: 10;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MenuList = styled(motion.ul)`
  display: flex;
  gap: 20px;
  align-items: center;

  list-style: none;

  .menu {
    display: flex;
    align-items: center;
  }

  .link {
    text-decoration: none;
    color: #5b5959;
    font-size: 16px;
    letter-spacing: 1px;

    &.dropdown {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 10px;

      &:hover {
        background: var(--primary-20);
        border-radius: 10px;
      }

      .icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: var(--primary-20);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
      }
    }
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

export const MobileMenuBackdrop = styled(motion.div)<{ show: boolean }>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100vh;
  padding: 16px;
  font-size: 16px;
  background: var(--primary-20);
  backdrop-filter: blur(5px);
`;

export const MobileMenu = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10vh;
  right: 20%;
  border-radius: 10px;
  background-color: #fff;
  z-index: 50;
  width: 50%;
  height: auto;
  padding: 30px;
  list-style-type: none;
  backdrop-filter: blur(8px);
  font-family: Arial, sans-serif;
  font-size: 16px;
  gap: 20px;

  .menu {
    display: flex;
    align-items: center;
  }

  .link {
    text-decoration: none;
    color: #5b5959;
    font-size: 16px;
    letter-spacing: 1px;
  }
`;
