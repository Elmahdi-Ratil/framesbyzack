"use client";
import React from "react";
import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/motion/animations";


interface secProps {
  subtitle: string;
  prices: { price1: number | string; price2: number | string };
}

const PricingSec = ({ subtitle, prices }: secProps) => {
  const { price1, price2 } = prices; // نفك التجزئة
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <div>
          <motion.p variants={fadeInUp} className="subtitle">
            {subtitle}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-2 mt-1"
          >
            {/* السطر الأول */}
            <h3 className="text-5xl">$ {price1}</h3>

            {/* السطر الثاني */}
            <h3 className="text-5xl">$ {price2}</h3>

            {/* Link */}
            <div className="flex items-center border-b border-neutral-800 hover:border-neutral-400 transition">
              <Link href="#" className="mb-2">
                Book a Call
              </Link>
              <span>
                <RiArrowRightUpLine />
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSec;