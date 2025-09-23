"use client";
import React from "react";
import Button from "./Button";
import { footerList } from "@/data/data";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { motion } from "motion/react";
import { staggerContainer } from "@/motion/animations";

const Footer = () => {
  return (
    
    <footer className="bg-backgroundClr border-t border-accent3 pt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Footer Top */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] mb-20">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-foregroundClr">
              {"Let's Work Together"}
            </h2>
            <p className="text-neutral-800">A more meaningful home for photography</p>
            <Button label="Contact Me" />
          </div>

          {footerList.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <h4 className="text-foregroundClr font-semibold">{item.title}</h4>
              <ul className="flex flex-col gap-2">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-neutral-800 hover:text-neutral-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-accent3 py-6 gap-4">
          <SocialIcons />
          <p className="text-neutral-800">
            &copy; {new Date().getFullYear()} Zakaria Taberkant Photography. All
            rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
