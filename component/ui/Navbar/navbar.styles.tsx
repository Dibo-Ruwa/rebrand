"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  padding: 0 8%;
  position: fixed;
  gap: 20px;
  left: 0;
  top: 0;
  z-index: 50;
  transition: all 200ms;


  .logo {
    position: relative;
    width: 100px;
    height: 40px;
  }
  


  .cart {
  
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: relative;

    .badge {
      width: 10px;
      height: 10px;
      background: var(--color2);
      position: absolute;
      border-radius: 50%;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 7px;
    }
  }
`;

export const LogoImage = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;

export const Toggle = styled.div`
  display: none;
  font-size: 24px;
  color: #48db45;

  z-index: 10;

  @media screen and (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;

export const MenuList = styled(motion.ul)`
  display: flex;
  gap: 20px;
  align-items: center;

  list-style: none;
  margin-left: auto;

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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuBackdrop = styled(motion.div)`
  display: flex;
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
  z-index: 20;
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
