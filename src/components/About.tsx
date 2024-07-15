"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks";
import srConfig from "@/utils/srConfig";

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // if (typeof window !== "undefined" && !prefersReducedMotion) {
    //   sr.reveal(revealContainer.current!, srConfig());
    // }
    const isClient = typeof window !== "undefined";

    if (isClient && !prefersReducedMotion) {
      import("@/utils/sr").then(({ default: sr }) => {
        sr.reveal(revealContainer.current!, srConfig());
      });
    }
  }, [prefersReducedMotion]);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Vuex",
    "Vue",
    "NextJs",
    "NuxtJs",
  ];

  return (
    <section
      id="about"
      className="h-full w-full md:py-[100px] py-12 bg-white font-poppins text-[#202020]"
      ref={revealContainer}
    >
      <div className="flex gap-2">
        <h2 className="mb-5 flex-shrink-0">
          <span className="text-2xl font-dosis">01.</span>
          <span className="text-3xl font-medium"> About Me </span>
        </h2>
        <div className="lg:flex-grow-0 w-72 border-t border-black my-4"></div>
      </div>

      <div className="flex justify-between flex-col lg:flex-row gap-12">
        <div className="lg:w-[700px]">
          <div className="flex flex-col gap-4">
            <p className="text-base font-light">
              Hello, my name is Justice Opara. I find great joy in creating
              digital products that others can see and use. My journey in tech
              has been quite interesting. From knowing nothing about the field
              to gaining substantial experience as a self-taught frontend
              developer, I&#39;ve built numerous personal projects that have helped
              me grow and understand web development concepts deeply.
            </p>

            <p className="text-base font-light">
              I am passionate about creating seamless user experiences and
              continuously learning new technologies to improve my craft. When
              &#39;m not coding, you can find me playing basketball.
            </p>
          </div>

          <div className="mt-5">
            <p className="font-normal mb-2 text-lg">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 list-none gap-4 text-center">
              {skills &&
                skills.map((skill, i) => (
                  <li
                    key={i}
                    className="relative mb-3 text-base font-medium uppercase py-2 flex justify-center items-center text-gray-200 bg-[#5b38e3] rounded"
                  >
                    ✨{skill}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="relative max-w-[300px] mx-auto sm:mt-[50px] sm:w-[70%]">
          <div className="relative block w-full group">
            <Image
              className="relative rounded filter grayscale-[100%] contrast-[1] group-hover:filter-none group-hover:mix-blend-normal group-hover:translate-x-[8px] group-hover:translate-y-[8px]"
              src="/profileImage.jpeg"
              width={500}
              height={500}
              quality={95}
              objectFit="cover"
              alt="Proflie"
            />
            <div className="absolute top-0 left-0 w-full h-full  bg-[#202020] mix-blend-screen transition-custom"></div>
            <div className="absolute top-[14px] left-[14px] w-full h-full rounded border-4 border-[#5b38e3] group-hover:translate-x-[8px] group-hover:translate-y-[8px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
