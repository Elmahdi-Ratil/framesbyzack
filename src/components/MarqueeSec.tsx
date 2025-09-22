"use client";
import { partnerLogos } from "@/data/data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSec = () => {
  return (
    <div className="border border-[#C68642] flex gap-10 justify-center py-3">
      <Marquee pauseOnHover={true} gradient={false}>
        {partnerLogos.map((item) => (
          <div className="flex items-center p-5 gap-2" key={item.id}>
            <Image
              src={item.img}
              alt={item.name}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSec;
