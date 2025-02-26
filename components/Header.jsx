import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import logo from "../public/dp.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center container justify-between py-[50px]">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="cursor-pointer w-9 h-9 md:w-12 md:h-12"
        />
      </Link>
      <IoMdMenu className="w-6 h-6 cursor-pointer md:w-8 md:h-8" />
    </header>
  );
}
