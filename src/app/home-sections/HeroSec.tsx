"use client";

import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animations";

const HeroSec = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background */}
      <Image
        src="/images/2.jpg"
        alt="hero background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-foregroundClr px-4"
      >
        <motion.p
        variants={fadeInUp}
        className="mb-4 text-foregroundClr">
          Stunning Photography by
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-[40px] sm:text-5xl md:text-6xl font-bold text-foregroundClr"
        >
          Zakaria Taberkant
        </motion.h1>

        <motion.div
        variants={fadeInUp}
        className="mt-6 flex items-center gap-2">
          <Button label="Let's" />
          <h2 className="text-2xl font-medium text-foregroundClr">Work Together</h2>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSec;
