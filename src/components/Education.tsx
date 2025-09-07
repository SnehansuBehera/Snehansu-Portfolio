import React from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Community from "./Community";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Education = () => {
  return (
    <div
      id="education"
      className="xl:px-20 my-5 flex flex-wrap md:flex-nowrap gap-12 sm:gap-24"
    >
      <div>
        <h1
          className={`${bebas.className} text-[2rem] w-[6.6rem] pt-4 leading-5 border-t-2 border-gray-400 pb-8`}
        >
          EDUCATION
        </h1>
        <div className="px-4 flex items-center justify-start gap-4 sm:gap-10">
          <div className="flex flex-col items-center">
            <div className="rounded-full p-2 bg-gray-200"></div>
            <div className=" py-16 sm:py-14 border-l-4 border-gray-200  border-dotted"></div>
            <div className="rounded-full p-2 bg-gray-200"></div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex items-center justify-start gap-6 sm:gap-8">
              <Image
                src="/iiitkayani-img.png"
                alt="education"
                width={500}
                height={500}
                className="w-[3.5rem] sm:w-[4rem]"
              />
              <div>
                <h1 className="text-[0.85rem] sm:text-[0.9rem] font-semibold">
                  Indian Institute of Information Technology, Kalyani
                </h1>
                <p className="text-[0.8rem] sm:text-[0.85rem]">
                  Bachelors in Technology, CSE
                </p>
                <p className="text-[0.8rem] sm:text-[0.85rem]">
                  CGPA: <span>8.56</span>
                </p>
                <p className="text-[0.8rem] sm:text-[0.85rem] text-gray-500">
                  Nov 2022 - Present
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 sm:gap-8">
              <Image
                src="/school-img.png"
                alt="education"
                width={500}
                height={500}
                className="w-[3.5rem] sm:w-[4rem]"
              />
              <div>
                <h1 className="text-[0.85rem] sm:text-[0.9rem] font-semibold">
                  Chandernagore Sri Aurobindo Vidyamandir
                </h1>
                <p className="text-[0.8rem] sm:text-[0.85rem]">
                  Higher Secondary, Science
                </p>
                <p className="text-[0.8rem] sm:text-[0.85rem]">
                  Grade: <span>A+</span>
                </p>
                <p className="text-[0.8rem] sm:text-[0.85rem] text-gray-500">
                  2019 - 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Community />
    </div>
  );
};

export default Education;
