"use client";

import Link from "next/link";
import React from "react";

const HeroButton = ({ label, href, bgColor, spanBgColor, textColor }) => {
  return (
    <Link href={href}>
      <button className={`group ${bgColor} font-extrabold p-0 rounded-[5px]`}>
        <span
          className={`${spanBgColor} ${textColor} block py-3 px-8 border tracking-wider border-black rounded-[5px] -translate-x-[4px] -translate-y-[4px] transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.2,1)]
          group-hover:-translate-x-[8px] group-hover:-translate-y-[8px] cursor-pointer`}
        >
          {label}
        </span>
      </button>
    </Link>
  );
};

export default HeroButton;
