import React from "react";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 pb-16">
      <Header />
      <Image
        src={"/contact.jpg"}
        alt="contact"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div className=" my-10 flex justify-between gap-4 md:gap-4 flex-col md:flex-row lg:flex-row lg:gap-6 xl:flex-row xl:gap-8">
        {/* Sol tərəf - Məlumat bölməsi */}
        <div className="mb-10 xl:w-1/3">
          <h3 className="text-2xl font-bold">Contact Me.</h3>
          <p className="text-gray-600 mt-2">
            Write me an e-mail via the form, <br />
             or just send us an e-mail directly
            at
          </p>
          <Link
            href="mailto:danilo@pelzer.com"
            className="text-[#e09a0e] hover:transition-all group inline-block mt-2"
          >
            <span className="relative">
              danilo@pelzer.com
              <span className="absolute left-0 bottom-0 h-[1px] bg-[#c08c23] w-0 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>

          <div className="mt-6">
            <h4 className="font-semibold">Telephone:</h4>
            <p className="text-gray-600">1-408-555-5555</p>
            <p className="text-gray-600">1-408-555-2259</p>
          </div>
        </div>

        {/* Sağ tərəf - Forma */}
        <form className="w-full xl:w-2/3">
          <div className="grid grid-cols-2 gap-4">
            {/* Ad */}
            <div className="relative">
              <label className="block text-gray-700">Name.</label>
              <input
                type="text"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#e09a0e] transition-all"
              />
            </div>
            {/* Email */}
            <div className="relative">
              <label className="block text-gray-700">Email.</label>
              <input
                type="email"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#e09a0e] transition-all"
              />
            </div>
          </div>

          {/* Mesaj sahəsi */}
          <div className="mt-6">
            <label className="block text-gray-700">Message.</label>
            <textarea
              rows="4"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#e09a0e] transition-all resize-none"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="flex justify-between items-center">
            <div className="mt-6 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-[#e09a0e] border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-gray-700">
                I’ve read and accept the{" "}
                <Link href="#" className="text-[#e09a0e] underline">
                  terms & conditions
                </Link>
                *
              </label>
            </div>

            {/* Göndər düyməsi */}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-[#e09a0e] text-white px-6 py-2 rounded-md hover:bg-[#c08c23] transition-all"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
