import React from "react";
import Image from "next/image";
import Header from "@/components/header";

export default function Biography() {
  return (
    <div className="container mx-auto px-4 pb-16">
      <Header />
      <div className="text-center mb-6">
        <h2 className="text-[#242321] text-[26px] font-semibold">About Me.</h2>
        <p className="text-[#666666]">
          My everyday work is presented here, I do what i love,
        </p>
        <p className="text-[#666666]">
          Who I am, what I do and my social networks, connect with me.
        </p>
      </div>
      <div className="flex justify-between items-center gap-4 md:gap-4 flex-col md:flex-row lg:flex-row lg:gap-6 xl:flex-row xl:gap-8">
        <div className="max-w-[650px] w-full md:w-[650px]">
          <div className="bg-[#EEEEEE] border-x-[16px] border-y-[30px] border-[#EEEEEE] overflow-y-scroll h-[600px] px-8 text-[#666666]">
            <div className="text-[#242321] mb-12">
              <h3 className="text-[26px] font-medium">Danilo Pelzer</h3>
              <p>Chief Executive Officer</p>
            </div>
            <p className="mb-4">
              Certainty listening no no behaviour existence assurance situation
              is. Because add why not esteems amiable him. Interested the
              unaffected mrs law friendship add principles. Indeed on people do
              merits to. Court heard which up above hoped grave do. Answer
              living law things either sir bed length. Looked before we an on
              merely. These no death he at share alone. Yet outward the him
              compass hearted are tedious.
            </p>
            <p className="mb-4">
              Listening no no behaviour existence assurance situation is.
              Because add why not esteems amiable him. Interested the unaffected
              mrs law friendship add principles. Indeed on people do merits to.
              Court heard which up above hoped grave do. Answer living law
              things either sir bed length. Looked before we an on merely. These
              no death he at share alone. Yet outward the him compass hearted
              are tedious.
            </p>
            <p className="mb-4">
              Because add why not esteems amiable him. Interested the unaffected
              mrs law friendship add principles. Indeed on people do merits to.
              Court heard which up above hoped grave do. Answer living law
              things either sir bed length. Looked before we an on merely.
            </p>
            <p className="mb-4">
              Listening no no behaviour existence assurance situation is.
              Because add why not esteems amiable him. Interested the unaffected
              mrs law friendship add principles. Indeed on people do merits to.
              Court heard which up above hoped grave do. Answer living law
              things either sir bed length. Looked before we an on merely. These
              no death he at share alone. Yet outward the him compass hearted
              are tedious.
            </p>
          </div>
        </div>
        <div className="w-[450px]">
          <Image
            src={"/about-me.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
