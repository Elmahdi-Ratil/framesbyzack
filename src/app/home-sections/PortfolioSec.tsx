"use client";

import React from "react";
import Title from "@/components/Title";
import Divider from "@/components/Divider";
import Image from "next/image";
import Link from "next/link";

// motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/motion/animations";

const PortfolioSec = () => {
  return (
    <section className="section bg-backgroundClr">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title subtitle="Portfolio" title="Selected Works" link="See All" />
        <Divider />

        {/* Projects */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {[
            { id: 1, src: "/images/1.jpg", title: "Surf Session" },
            { id: 2, src: "/images/1.jpg", title: "Kite Ride" },
            { id: 3, src: "/images/1.jpg", title: "Desert Vibes" },
          ].map((item) => (
            <motion.div
              variants={fadeInUp}
              key={item.id}
              className="group relative overflow-hidden border border-accent3 rounded-2xl"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={400}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href="#"
                  className="text-foregroundClr bg-accent2 px-6 py-2 rounded-full hover:bg-accent3 transition-colors"
                >
                  {item.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioSec;
