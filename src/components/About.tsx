"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks";
import sr from "@/utils/sr";
import srConfig from "@/utils/srConfig";

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
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

      <div className="flex justify-between flex-col md:flex-row gap-12">
        <div className="md:w-[700px]">
          <div className="flex flex-col gap-4">
            <p className="lg:text-lg text-base font-light">
              I am a professional frontend developer passionate about
              translating visions into interactive web experiences. With
              expertise in HTML, CSS, and modern JavaScript frameworks, i am
              committed to building pixel-perfect, responsive websites that
              captivate users. My track record? Well, it is filled with numerous
              successful projects and achievements that i am really proud of.
            </p>

            <p className="lg:text-lg text-base font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus earum praesentium porro fugiat autem, commodi facilis
              dolore nemo non natus error vitae. Quidem, consequuntur, officia
              qui ad sunt deleniti maiores incidunt, illum quaerat velit
              aspernatur magnam atque eligendi minus fuga?
            </p>
          </div>

          <div className="mt-5">
            <p className="">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 py-0 list-none">
              {skills &&
                skills.map((skill, i) => (
                  <li key={i} className="relative mb-5 text-sm">
                    ✨{skill}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="pb-2 pr-2 border-b-4 border-r-4 border-[#202020] flex justify-center">
          <div
            className="bg-blue-300 relative w-60 h-60 lg:w-[400px] lg:h-[400px] p-6 rounded-lg bg-green shadow-md transition-transform 
          duration-300 ease-in-out transform hover:-translate-x-4 hover:-translate-y-4 focus:outline-none"
          >
            <Image
              className="filter-none mix-blend-normal rounded-md"
              src="/profileImage.jpeg"
              fill
              objectFit="cover"
              quality={95}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
