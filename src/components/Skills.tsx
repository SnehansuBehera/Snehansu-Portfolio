import React from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Skills = () => {
  const skillImages = [
    "/skills/CSS3_logo.png",
    "/skills/javascript-logo.webp",
    "/skills/typescript-icon.svg",
    "/skills/tailwind-logo.svg",
    "/skills/React-logo.svg",
    "/skills/prismaORM-logo.svg",
    "/skills/Next-logo.webp",
    "/skills/Notion-logo.webp",
    "/skills/next-authjs.webp",
    "/skills/node-logo.webp",
    "/skills/expressjs.png",
    "/skills/mongodb-icon.svg",
  ];

  return (
    <div className="bg-gray-800 max-w-[1100px] mx-auto my-10 rounded-lg py-8 px-4 sm:px-[4.3rem] text-white shadow-lg sm:flex sm:items-center sm:justify-start">
      <h1
        className={`${bebas.className} mx-auto sm:ml-[-1rem] sm:mr-[3rem] text-[2rem] md:text-[2.5rem] border-t-2 border-white md:border-none w-[6.7rem] md:w-[12rem]`}
      >
        TOP SKILLS
      </h1>

      <div className="relative overflow-hidden mt-4 rounded-lg shadow-inner">
        <div className="animate-scroll flex items-center gap-6 py-4 whitespace-nowrap min-w-full">
          <span className="text-[2rem] sm:text-[2.5rem] flex-shrink-0">•</span>
          {skillImages.map((src, index) => (
            <div key={index} className="inline-block flex-shrink-0">
              <Image
                src={src}
                alt="skills"
                width={500}
                height={500}
                className="w-[3rem] sm:w-[4rem]"
              />
            </div>
          ))}
          <span className="text-[2rem] sm:text-[2.5rem]">•</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
