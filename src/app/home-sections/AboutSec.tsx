"use client";

import Title from "@/components/Title";
import React from "react";
import Divider from "@/components/Divider";
import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/motion/animations";

const AboutSec = () => {
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
        <Title subtitle="About" title="I am Damien" link="Know More" />
        <Divider />
        {/* Wrapper */}
        <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
          <motion.figure variants={fadeInUp}>
            <Image
              src="/images/about-section-banner.png"
              alt="about banner"
              width={783}
              height={710}
            />
          </motion.figure>

          <motion.div
            variants={fadeInUp}
            className="border border-accent3 p-6 rounded-2xl mt-5 bg-backgroundClr"
          >
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3 text-accent3">
                <Image
                  src="/images/shape-2.svg"
                  width={30}
                  height={30}
                  alt="shape"
                />
                Introduction
              </h3>
              <p className="text-accent2">
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary...
              </p>
            </div>
            <div className="grid gap-5 mt-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3 text-accent3">
                <Image
                  src="/images/shape-2.svg"
                  width={30}
                  height={30}
                  alt="shape"
                />
                Contact Information
              </h3>

              <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
                <div>
                  <p className="text-accent2">Email</p>
                  <a
                    href="mailto:ZakariaTaberkant@framesbyzack.com"
                    className="hover:underline text-accent3"
                  >
                    ZakariaTaberkant@framesbyzack.com
                  </a>
                </div>
                <div>
                  <p className="text-accent2">Phone Number</p>
                  <a href="tel:+212661806835" className="hover:underline text-accent3">
                    +212 661-806835
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between flex-wrap">
                <SocialIcons />
                <div className="flex flex-wrap gap-4">
                  <Link href="#" className="primary-btn w-full text-center">
                    Let’s Work
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSec;
