"use client";

import React from "react";
import Title from "@/components/Title";
import Divider from "@/components/Divider";
import Image from "next/image";

// motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/motion/animations";

const ServicesSec = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title subtitle="Services" title="What I Offer" link="See More" />
        <Divider />

        {/* Services List */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {[
            {
              id: 1,
              src: "/images/4.webp",
              title: "Surf Photography",
              desc: "Capturing surfers in their best wave moments.",
            },
            {
              id: 2,
              src: "/images/4.webp",
              title: "Kite Photography",
              desc: "Dynamic shots of kite rides across the ocean.",
            },
            {
              id: 3,
              src: "/images/4.webp",
              title: "Desert Portraits",
              desc: "Natural photography inspired by the Sahara dunes.",
            },
          ].map((item) => (
            <motion.div
              variants={fadeInUp}
              key={item.id}
              className="border border-accent2 p-6 rounded-2xl bg-backgroundClr hover:bg-accent2/60 transition-colors"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={60}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-foregroundClr mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-800">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSec;
