"use client";
import { marqueeItems } from "@/data/data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSec = () => {
  return (
    <div className="border border-[#C68642] flex gap-10 justify-center py-3">
      <Marquee pauseOnHover={true}>
        {marqueeItems.map((item, index) => (
          <div className="flex items-center p-5 gap-2" key={index}>
            <Image
              src="/images/star-shape.svg"
              alt="shape"
              width={30}
              height={30}
            />
            <p className="text-lg text-[#D4A373]">{item.label}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSec;
