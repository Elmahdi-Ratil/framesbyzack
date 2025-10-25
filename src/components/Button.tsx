import { RiArrowRightUpLongLine } from "@remixicon/react";
import React from "react";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="flex items-center gap-2.5 max-w-max ">
      <h2 className="flex items-center flex-wrap gap-2 text-accent1">
        {label}
      </h2>
      <span className="bg-accent2 w-20 h-12 flex items-center justify-center rounded-full hover:bg-neutral-700 transition-colors border border-accent1 ">
        <RiArrowRightUpLongLine size={26} />
      </span>
    </button>
  );
};

export default Button;
