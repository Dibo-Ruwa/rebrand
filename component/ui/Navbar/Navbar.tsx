"use client";
import styled from "styled-components";
import { routes } from "@/constants";
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
import UserDropdown from "@/component/userDropdown/UserDropdown";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/hooks/useCart";
import { useSession } from "next-auth/react";
import useCartStore from "@/store/useCart.store";

const Navbar = () => {
  const { data: session, status } = useSession({
    required: false,
  });

 

  //get partName to render route types
  const pathname = usePathname();

 

  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { cartItems, getCart, getSubscriptions, subscriptions } =
    useCartStore();

  const { totalQuantities } = useCart();

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

  return (
    <NavbarContainer
      style={
        isScrolled
          ? {
              backdropFilter: "blur(20px)",
              background: "rgb(255, 255, 255)",
              borderBottom: "1px solid var(--primary-20)",
              height: "10vh",
            }
          : {}
      }
    >
      <span className="logo">
        <Link href="/" passHref>
          <LogoImage src="/logo.png" fill={true} alt="logo" />
        </Link>
      </span>

      <Toggle onClick={() => setToggle((prev) => !prev)}>
        {toggle ? <VscClose /> : <HiBars3 />}
      </Toggle>

      <MenuList className="menu">
        {routes.map((link, index) => {
          return (
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
          );
        })}
        {!session && (
          <li>
            <Link className="link" href="/signin">
              Sign In
            </Link>
          </li>
        )}
        {!session && (
          <li>
            <Link className="link" href="/signup">
              Sign Up
            </Link>
          </li>
        )}
      </MenuList>

      {session && (
        <div className="cart">
          {totalQuantities >= 1 ? (
            <div className="badge">{totalQuantities}</div>
          ) : (
            <></>
          )}

          <Link
            href="/cart"
            style={{ textDecoration: "none", color: "var(--primary)" }}
          >
            <FiShoppingCart />
          </Link>
        </div>
      )}
      <AnimatePresence>
        {toggle && (
          <>
            <MobileMenuBackdrop
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
              {routes.map((link, index) => (
                <li key={index}>
                  {link.subroutes ? (
                    <>
                      <ServiceMenu
                        toggle={() =>
                          setToggle((prev) => (prev === true ? false : false))
                        }
                        trigger={link.name}
                        routes={link?.subroutes}
                      />
                    </>
                  ) : (
                    <Link
                      className="link"
                      href={link.path}
                      onClick={() =>
                        setToggle((prev) => (prev === true ? false : false))
                      }
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              {!session && (
                <li>
                  <Link className="link" href="/signin">
                    Sign In
                  </Link>
                </li>
              )}
              {!session && (
                <li>
                  <Link className="link" href="/signup">
                    Sign Up
                  </Link>
                </li>
              )}
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
      {session && <UserDropdown />}
    </NavbarContainer>
  );
};

export default Navbar;
