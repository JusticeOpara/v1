"use client";

import React, { useEffect, useRef, useState } from "react";
import srConfig from "@/utils/srConfig";
import { usePrefersReducedMotion } from "@/hooks";
import Link from "next/link";
import Image from "next/image";

// Define the type for the project data
interface ProjectData {
  external: string;
  title: string;
  tech: string[];
  github: string;
  cover: string;
  html: string;
  orientation: number;
}
const random = () => {
  return Math.floor(Math.random() * 2);
};

// Dummy data
const dummyData: ProjectData[] = [
  {
    external: "https://cyptocurrency.netlify.app/",
    title: "Cyptocere",
    tech: ["React", "JavaScript", "TailwindCSS", "Firebase", "Redux"],
    github: "https://github.com/JusticeOpara/cryptocere",
    cover: "screenshot03.png",
    html: `<p>Developed a comprehensive application for analyzing the digital currency market, 
    focusing on key metrics like price, volume, and market capitalization.
     Made it user-friendly using the CoinGecko API to retrieve and display cryptocurrencies,
      allowing users to favorite coins. Implemented secure authentication with Firebase for smooth login and sign-up processes. 
    Managed state efficiently with the Context API to enhance performance and user experience.</p>`,
    orientation: random(),
  },
  {
    external: "https://nft-bazzar.netlify.app/",
    title: "Nft Bazzar",
    tech: ["Framer Motion", "Tailwind CSS", "TypeScript", "ReactJS"],
    github: "https://github.com/JusticeOpara/nft-bazaar",
    cover: "/screenshot.png",
    html: `<p>Designed and developed an innovative Digital NFT marketplace named NFT Bazaar. 
    This platform is a fully responsive, elegantly designed website that represents the forefront of Web3 technology.
     It empowers users to create and collect NFTs effortlessly. Key features of NFT Bazaar includes: a visually appealing and user-friendly interface, a 'like' feature allowing users to express appreciation and engage with NFTs.
    To build this platform, I utilized industry-leading technologies such as ReactJS, Tailwind CSS, Framer Motion, and TypeScript, ensuring a smooth and dynamic user experience. The combination of these technologies allows NFT Bazaar to deliver a vibrant and interactive marketplace for digital art and collectibles.</p>`,
    orientation: random(),
  },
];

const Project = () => {
  const [featuredProjects, setFeaturedProjects] = useState<ProjectData[]>([]);
  const revealTitle = useRef(null);
  const revealProjects = useRef<(HTMLLIElement | null)[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Set the dummy data
    setFeaturedProjects(dummyData);
  }, []);

  useEffect(() => {
    const isClient = typeof window !== "undefined";

    if (isClient && !prefersReducedMotion) {
      import("@/utils/sr").then(({ default: sr }) => {
        sr.reveal(revealTitle.current, srConfig());
        revealProjects.current.forEach((ref, i) =>
          sr.reveal(ref, srConfig(i * 100))
        );
      });
    }
  }, [featuredProjects, prefersReducedMotion]);

  return (
    <section id="work" className="md:py-[100px] pt-12 bg-white">
      <div className="flex gap-2 mb-10">
        <h2 className=" flex-shrink-0">
          <span className="text-2xl font-dosis">03.</span>
          <span className="text-3xl font-medium"> Personal projects </span>
        </h2>
        <div className="border-t flex-grow lg:flex-grow-0 w-72 border-black my-4"></div>
      </div>

      <ul className="">
        {featuredProjects.map((project, i) => {
          const { external, title, tech, github, cover, html } = project;

          return (
            <li
              key={i}
              ref={(el) => {
                revealProjects.current[i] = el;
              }}
              className={`relative grid gap-2 grid-cols-12 items-center text-[#202020] ${
                i % 2 !== 0 ? "" : ""
              } mb-12 md:mb-16 sm:mb-8`}
            >
              <div className="relative col-span-full rounded lg:rounded-none p-6 lg:p-0 bg-[#5b38e3] lg:bg-transparent col-start-1 row-span-full lg:col-span-8 lg:col-start-6 lg:row-span-full sm:flex sm:flex-col sm:justify-center sm:h-full sm:col-span-full sm:p-10 sm:z-10 lg:items-end">
                <h3 className="text-lightest-slate text-2xl md:text-xl mb-3">
                  <Link
                    href={external}
                    target="_blank"
                    className="relative z-10 font-bold text-3xl lg:text-[#202020] text-gray-200"
                  >
                    {title}
                  </Link>
                </h3>

                <div
                  className="relative z-50 lg:p-6 font-dosis text-light-slate text-lg rounded-md lg:shadow-md text--[#f7d046] text-gray-200 bg-[#5b38e3]"
                  dangerouslySetInnerHTML={{ __html: html ?? "" }}
                />

                {tech.length && (
                  <ul className="flex flex-wrap my-4  p-0 list-none lg:text-[#202020] text-gray-200 ">
                    {tech.map((tech, i) => (
                      <li
                        key={i}
                        className="mr-5 mb-1 text-sm font-bold md:mr-2"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center ml-0 -mx-2">
                  {github && (
                    <Link
                      href={github}
                      target="_blank"
                      aria-label="GitHub Link"
                      className="flex-center mx-2 cursor-pointer "
                    >
                      <Image
                        src="/github.svg"
                        width={24}
                        height={24}
                        alt={github}
                        className="text-[#5b38e3]"
                      />
                    </Link>
                  )}

                  {external && (
                    <Link
                      href={external}
                      target="_blank"
                      aria-label="External Link"
                      className="flex-center mx-2 cursor-pointer bg-white lg:bg-transparent"
                    >
                      <Image
                        src="/external.svg"
                        width={24}
                        height={24}
                        alt={external}
                      />
                    </Link>
                  )}
                </div>
              </div>

              <div className="relative hidden lg:block col-span-6 col-start-auto row-span-full lg:col-span-full lg:row-span-full w-full h-full">
                <Link
                  href={external ? external : github ? github : "#"}
                  target="_blank"
                  className="block w-[50%] h-full rounded align-middle"
                >
                  {/* <div className="absolute inset-0 z-30 transition mix-blend-screen"></div> */}
                  <img
                    src={cover}
                    alt={title}
                    className="rounded-md h-full mix-blend-multiply filter-grayscale filter-contrast-100 filter-brightness-90 object-fill w-auto h-full filter-brightness-50"
                  />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Project;
