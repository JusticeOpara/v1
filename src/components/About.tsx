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
            <p className="font-light">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-4 list-none gap-4 text-center">
              {skills &&
                skills.map((skill, i) => (
                  <li key={i} className="relative mb-3 text-sm uppercase font-light py-2 flex justify-center items-center bg-[#5b38e3] rounded">
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
