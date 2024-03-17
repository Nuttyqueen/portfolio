"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Siripat",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "jirajerangchai",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            aspernatur.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Dowload CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-content-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#4cbec6] w-[270px] h-[265px] lg:w-[300px] lg:h-[295px] relative">
            <Image
              src="/images/pic6.png"
              alt="pic4"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2  left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
