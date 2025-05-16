"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-[#121212] shadow-lg backdrop-blur-md bg-opacity-80"
          : "bg-[#121212] bg-opacity-90"
      }`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <Link
          className="text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text hover:from-pink-600 hover:to-purple-400 transition-all duration-300"
          href={"/"}
        >
          yusufhan.dev
        </Link>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-2 py-1.5 xs:px-3 xs:py-2 border-2 rounded-md border-purple-400 text-white hover:border-pink-600 hover:scale-105 transition-all duration-300"
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
          >
            {!navbarOpen ? (
              <Bars3Icon className="h-4 w-4 xs:h-5 xs:w-5" />
            ) : (
              <XMarkIcon className="h-4 w-4 xs:h-5 xs:w-5" />
            )}
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:p-0 md:flex-row md:space-x-6 lg:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1WM_PBz5d9UkW-djY0ANQuSbLwz3j-KiC/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 text-white hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
