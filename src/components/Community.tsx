"use client";

import React from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Community = () => {
  return (
    <div>
      <h1
        className={`${bebas.className} text-[1.85rem] w-[7.4rem] pt-4 leading-5 border-t-2 border-gray-400 pb-8`}
      >
        EXPERIENCES
      </h1>
      <div className="flex flex-col justify-center items-start gap-12 md:gap-20 lg:gap-12">
        <div
          className="flex justify-start items-center gap-8 cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/company/vidyainterna-hub/",
              "_blank"
            )
          }
        >
          <Image
            src="/vidyainterna_hub_logo.jpeg"
            alt=""
            width={500}
            height={500}
            className="w-[4rem] sm:w-[6rem]"
          />
          <div>
            <h1 className="text-[0.9rem] font-semibold">VidyaInterna Hub</h1>
            <p className="text-[0.85rem]">Full Stack Developer Intern</p>
            <p className="text-[0.85rem] text-gray-500">Oct 2024 - Jan 2025</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-8">
          <Image
            src="/gdsc-logo.png"
            alt=""
            width={500}
            height={500}
            className="w-[4rem] sm:w-[6rem]"
          />
          <div>
            <h1 className="text-[0.9rem] font-semibold">
              Google Developers Student Club, Kalyani
            </h1>
            <p className="text-[0.85rem]">Extended Core Member</p>
            <p className="text-[0.85rem] text-gray-500">Aug 2023 - Jan 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
