"use client";

import React, { ReactNode } from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp } from "@/motion/animations";

interface TitleProps {
  subtitle?: string;
  title: string;
  link?: ReactNode; // بدلناها من string ل ReactNode
}

const Title = ({ subtitle, title, link }: TitleProps) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-7">
      <div>
        <motion.p variants={fadeInUp} className="subtitle">
          {subtitle}
        </motion.p>
        <motion.h2 variants={fadeInUp}>{title}</motion.h2>
      </div>

      {link && (
        <motion.button variants={fadeInUp}>
          {link} {/* هنا غادي يبان Link لي سيفطتيه */}
        </motion.button>
      )}
    </div>
  );
};

export default Title;
