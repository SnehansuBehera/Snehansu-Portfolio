"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const STATUS = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};
const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [status, setStatus] = useState("");

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    review: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { name: false, email: false, review: false };

    if (!name.trim()) {
      newErrors.name = true;
      toast.error("Name is required");
      hasError = true;
    }
    if (!email.trim()) {
      newErrors.email = true;
      toast.error("Email is required");
      hasError = true;
    }
    if (!review.trim()) {
      newErrors.review = true;
      toast.error("Review is required");
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;
    try {
      setStatus(STATUS.LOADING);
      console.log(name, email, review);
      const response = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          review: review,
        }),
      });

      console.log(response);
      if (response.status === 200) {
        toast.success("Thank you for your feedback!");
        setStatus(STATUS.SUCCESS);
      } else {
        toast.error("Failed to submit review. Please try again.");
        setStatus(STATUS.ERROR);
      }
      setName("");
      setEmail("");
      setReview("");
      setErrors({ name: false, email: false, review: false });
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("An error occurred while submitting your review.");
      setStatus(STATUS.ERROR);
      setErrors({ name: false, email: false, review: false });
      setName("");
      setEmail("");
      setReview("");
    }
  };

  const getInputClass = (field: boolean) =>
    `py-2 bg-transparent border-b-[0.1rem] w-[80vw] sm:w-[18rem] md:w-[20rem] 
        ${field ? "border-red-500" : "border-gray-500"}`;

  return (
    <div className="bg-gray-800 px-[4vw] xl:px-52 py-8 flex flex-col">
      <ToastContainer />
      <div className=" py-4 flex gap-5 sm:gap-0 justify-between items-center border-b-[0.1rem] border-gray-500 pr-4">
        <h1
          className={`${bebas.className} text-[1.3rem] sm:text-[2rem] leading-[2rem] text-white`}
        >
          LET&apos;S CONNECT.
        </h1>
        <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12">
          <Link href="https://www.linkedin.com/in/snehansu-behera-314b17258/">
            <Image
              src="/linkedin-img.png"
              alt="socials"
              width={500}
              height={500}
              className="w-[1rem] sm:w-[1.2rem]"
            />
          </Link>
          <Link href="https://github.com/SnehansuBehera">
            <Image
              src="/github-img.png"
              alt="socials"
              width={500}
              height={500}
              className="w-[1rem] sm:w-[1.2rem]"
            />
          </Link>
          <Link href="https://x.com/SnehansuBehera1">
            <Image
              src="/twitter-img.png"
              alt="socials"
              width={500}
              height={500}
              className="w-[1rem] sm:w-[1.2rem]"
            />
          </Link>
          <Link href="/">
            <Image
              src="/email-img.png"
              alt="socials"
              width={500}
              height={500}
              className="w-[1rem] sm:w-[1.2rem]"
            />
          </Link>
          <Link href="https://discord.com/channels/@me">
            <Image
              src="/discord.png"
              alt="socials"
              width={500}
              height={500}
              className="w-[1rem] sm:w-[1.2rem]"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-start sm:justify-center gap-4 md:gap-8 lg:gap-12 xl-[6rem] 2xl:gap-[10rem] px-2 sm:px-6 lg:px-4 xl:px-6 text-white border-b-2 border-slate-600">
        <Image
          src="/footer-img.png"
          alt="footer-img"
          width={500}
          height={500}
          className="hidden sm:block sm:w-[25rem] md:w-[15rem] rounded-full grayscale"
        />
        <div className="border-none sm:border-solid sm:border-l-2 border-x-slate-600 py-8 sm:pl-12 lg:pl-24">
          <h2 className={`${bebas.className} text-[1.5rem] sm:text-[2rem]`}>
            Feedback Time!!
          </h2>
          <p className="text-[0.8rem] text-gray-400 my-2">
            Your review will help me grow
          </p>
          <form
            className="flex flex-col my-6 gap-4 items-between justify-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={name}
              placeholder="Full Name"
              className={getInputClass(errors.name)}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name)
                  setErrors((prev) => ({ ...prev, name: false }));
              }}
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              className={getInputClass(errors.email)}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email)
                  setErrors((prev) => ({ ...prev, email: false }));
              }}
            />
            <input
              type="text"
              value={review}
              placeholder="Write in brief"
              className={getInputClass(errors.review)}
              onChange={(e) => {
                setReview(e.target.value);
                if (errors.review)
                  setErrors((prev) => ({ ...prev, review: false }));
              }}
            />
            <button
              type="submit"
              className="text-white px-4 py-2 w-[6rem] border-2 border-gray-600"
            >
              {status === "LOADING" ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-end justify-center gap-2">
        <Image
          src="/copyright.png"
          alt="copyright"
          width={500}
          height={500}
          className="w-[1.1rem]"
        />
        <p className=" text-gray-400 text-[0.8rem] mt-4">
          2024 Snehansu | Portfolio
        </p>
      </div>
    </div>
  );
};

export default Footer;
