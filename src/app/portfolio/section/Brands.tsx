"use client";
import { logoImages } from "@/data/data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

//import motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/motion/animations";

const Brands = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center mt-40"
    >
      <motion.p variants={fadeInUp} className="subtitle">
        BRANDS I HAVE WORKED WITH
      </motion.p>
      {/* wrapper */}
      <motion.div
        variants={fadeIn}
        className="mt-6 bg-neutral-900 border-y border-neutral-800"
      >
        <div className="container h-24 flex items-center">
          {" "}
          {/* h-24 = 6rem */}
          <Marquee gradient={false} pauseOnHover={true}>
            {logoImages.map((img) => (
              <div key={img.id} className="mx-8 flex items-center">
                <Image
                  src={img.img}
                  alt="logo"
                  height={80} // height fixe
                  width={160} // proportionate width
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Brands;
