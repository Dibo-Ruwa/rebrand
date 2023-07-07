"use client";
import styled from "styled-components";
import { generateLinksByCategory } from "@/constants";
import { assets } from "@/public/assets";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import ServiceMenu from "@/component/serviceMenu";
import {
  LogoImage,
  MenuList,
  MobileMenu,
  MobileMenuBackdrop,
  NavbarContainer,
  Toggle,
} from "./navbar.styles";

const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Call handleScroll on initial render
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = generateLinksByCategory("main");

  return (
    <NavbarContainer scrolled={isScrolled}>
      <Link href="/" passHref>
        <span className="logo">
          <LogoImage src={assets.logo} width={110} height={35} alt="logo" />
        </span>
      </Link>

      <Toggle onClick={() => setToggle((prev) => !prev)}>
        {toggle ? <VscClose /> : <HiBars3 />}
      </Toggle>

      <MenuList className="menu">
        <MenuList className="menu">
          {links.map((link, index) => (
            <li key={index}>
              {link.subroutes ? (
                <>
                  <ServiceMenu trigger={link.name} routes={link?.subroutes} />
                </>
              ) : (
                <Link className="link" href={link.path}>
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </MenuList>
      </MenuList>

      <AnimatePresence>
        {toggle && (
          <>
            <MobileMenuBackdrop
              show={true}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setToggle((prev) => !prev)}
            ></MobileMenuBackdrop>
            <MobileMenu
              initial={{ right: "-100%", opacity: 0 }}
              animate={{ right: "10%", opacity: 1 }}
              exit={{ right: "-100%", opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ServiceMenu />

              {links.map((link, index) => (
                <li key={index}>
                  {link.subroutes ? (
                    <>
                      <ServiceMenu trigger={link.name} routes={link?.subroutes} />
                    </>
                  ) : (
                    <Link className="link" href={link.path}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;
