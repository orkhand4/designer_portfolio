"use client";

import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import logo from "../public/dp.png";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuIconOpen, setIsMenuIconOpen] = useState(false);

  // Toggle modal visibility
  const handleMenuClick = () => {
    setIsModalOpen(!isModalOpen);
    setIsMenuIconOpen(!isMenuIconOpen);
  };

  // Close modal when a link is clicked
  const handleLinkClick = () => {
    setIsModalOpen(false);
  };

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
      <div className="relative">
        <div
          onClick={handleMenuClick}
          className="w-7 h-7 cursor-pointer md:w-8 md:h-8"
        >
          {isMenuIconOpen ? (
            <IoMdMenu className="w-full h-full" />
          ) : (
            <IoMdMenu className="w-full h-full" />
          )}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-6 z-50 transition-transform duration-500 ease-in-out"
            style={{
              transform: isModalOpen ? "translateY(0)" : "translateY(-100%)", // Slide down from top
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleMenuClick}
              className="absolute top-4 right-4 text-2xl"
            >
              X
            </button>

            {/* Modal Content */}
            <div className="container flex gap-[25%]">
              <div className="flex flex-col items-start gap-2">
                <Link
                  href="/works"
                  className="text-[22px] font-medium"
                  onClick={handleLinkClick}
                >
                  Works.
                </Link>
                <Link href="/biography" onClick={handleLinkClick}>
                  Biography.
                </Link>
                <Link href="/about" onClick={handleLinkClick}>
                  About
                </Link>
                <Link href="/contact" onClick={handleLinkClick}>
                  Contact.
                </Link>
                <Link href="/buy" onClick={handleLinkClick}>
                  Buy Now!
                </Link>
              </div>

              {/* Hire Me Section */}
              <div className="flex flex-col gap-6">
                <h3 className="text-xl">Hire me.</h3>
                <p>
                  Like my work? Arrange a meeting with me at my office, I'll be
                  happy to work with you!
                </p>
                <a href="mailto:work@kalium.com" className="text-blue-400">
                  work@kalium.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <IoMdMenu className="w-6 h-6 cursor-pointer md:w-8 md:h-8" /> */}
    </header>
  );
}
