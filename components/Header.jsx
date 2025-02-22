import React from "react";
import { LuMenu } from "react-icons/lu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-[50px] flex items-center justify-between">
      <Image
        className="cursor-pointer w-9 h-9 md:w-12 md:h-12"
        width={43}
        height={38}
        src="/dp.png"
        alt="logo"
      />
      <LuMenu className="cursor-pointer w-7 h-7 md:w-8 md:h-8" />
    </header>
  );
}
