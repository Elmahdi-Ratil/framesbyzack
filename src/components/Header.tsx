"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { navItems } from "@/data/data";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  const handleClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${
        lastScrollY > 50
          ? "bg-foregroundClr/70 backdrop-blur-md border-b border-accent2"
          : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center py-5 lg:pb-0">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Zakaria Taberkant Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Mobile menu */}
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-medium uppercase text-accent2">
              Zakaria Taberkant
            </h3>
            <button
              className="w-[50px] h-[50px] border flex items-center justify-center rounded-full bg-accent2 border-accent2 hover:bg-accent1 transition-colors"
              onClick={handleClick}
            >
              <RiCloseLine size={30} />
            </button>
          </div>

          <ul className="grid">
            {navItems.map((item) => (
              <li
                className="border-t border-accent2 text-center"
                key={item.id}
              >
                <Link
                  href={item.path}
                  className={`block py-5 hover:bg-accent2 transition-colors ${
                    pathname === item.path ? "bg-accent1" : ""
                  }`}
                  onClick={handleClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="primary-btn block text-center mt-10 bg-accent2 hover:bg-accent1 border-accent1"
            onClick={handleClick}
          >
            contact me
          </Link>
        </nav>

        {/* Large menu */}
        <ul className="flex items-center max-lg:hidden border border-accent1 rounded-t-2xl overflow-hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={`px-8 py-5 block hover:bg-accent2 transition-colors ${
                  pathname === item.path ? "bg-accent1" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="primary-btn hidden lg:block bg-accent1 hover:bg-accent2 border-accent1"
        >
          contact me
        </Link>

        <button className="lg:hidden" onClick={handleClick}>
          <RiMenu3Line size={30} />
        </button>

        <div
          className={`overlay ${isOpen ? "active" : ""}`}
          style={{ backgroundColor: "rgba(212, 163, 115, 0.5)" }}
          onClick={handleClick}
        />
      </div>
    </header>
  );
};

export default Header;
