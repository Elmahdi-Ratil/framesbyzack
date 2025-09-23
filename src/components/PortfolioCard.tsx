"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import { motion } from "motion/react";
import { fadeInUp } from "@/motion/animations";

interface cardProps {
  img: string;
  title: string;
  date: string;
}

const PortfolioCard = ({ img, title, date }: cardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-accent1/10 p-4 rounded-xl border border-accent1"
    >
      <figure className="mb-5">
        <Image
          src={img}
          alt={title}
          width={499}
          height={519}
          className="rounded-4xl w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h4 className="text-xl text-neutral-800 break-words">{title}</h4>
          <p className="text-neutral-800">{date}</p>
        </div>
        <Link
          href="/portfolio"
          className="mt-4 flex items-center gap-2 uppercase hover:text-accent2 transition-colors"
        >
          View Project
          <span>
            <RiArrowRightUpLongLine />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
