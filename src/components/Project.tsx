"use client";

import React, { useEffect, useRef, useState } from "react";

import sr from "@/utils/sr";
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
}

// Dummy data
const dummyData: ProjectData[] = [
  {
    external: "https://cyptocurrency.netlify.app/",
    title: "Cyptocere",
    tech: ["React", "JavaScript", "TailwindCSS", "Firebase"],
    github: "https://github.com/JusticeOpara",
    cover: "/screenshot02.png",
    html: `<p>Developed an app for fundamental analysis of the digital currency market, 
      including tracking price, volume, and market capitalization.</p>`,
  },
  {
    external: "https://nft-bazzar.netlify.app/",
    title: "Nft Bazzar",
    tech: ["Framer Motion", "Tailwind CSS", "TypeScript", "ReactJS"],
    github: "https://github.com/JusticeOpara",
    cover: "/screenshot.png",
    html: `<p> NFT Bazaar is an elegantly designed and fully responsive NFT marketplace website. 
      It serves as a vibrant representation of a cutting-edge Web3 marketplace, 
      empowering users to seamlessly create, and collect NFTs.</p>`,
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
    <section id="work" className="md:py-[100px] py-12 bg-white">
      <div className="flex gap-2 mb-8">
        <h2 className=" flex-shrink-0">
          <span className="text-2xl font-dosis">02.</span>
          <span className="text-3xl font-medium"> Recent projects </span>
        </h2>
        <div className="border-t flex-grow lg:flex-grow-0 w-72 border-black my-4"></div>
      </div>

      <ul>
        {featuredProjects.map((project, i) => {
          const { external, title, tech, github, cover, html } = project;

          return (
            <li
              key={i}
              ref={(el) => {
                revealProjects.current[i] = el;
              }}
              className={`relative grid gap-2 grid-cols-12 items-center text-[#202020] shadow-2xl ${
                i % 2 !== 0 ? "md:flex-row-reverse " : ""
              } mb-24 md:mb-16 sm:mb-8`}
            >
              <div className="relative col-span-6 col-start-1 row-span-full lg:col-span-8 lg:col-start-1 lg:row-span-full sm:flex sm:flex-col sm:justify-center sm:h-full sm:col-span-full sm:p-10 sm:z-10 flex justify-end items-end">
          
                <p className="mb-2 text-[#F7D046] font-poppins text-sm">
                  Featured Project
                </p>

                <h3 className="text-lightest-slate text-2xl md:text-xl mb-2">
                  <Link href={external} className="relative z-10 font-bold">
                    {title}
                  </Link>
                </h3>

                <div
                  className="relative z-50 p-6 font-dosis text-light-slate text-lg rounded-md shadow-md bg-[#5b38e3]"
                  dangerouslySetInnerHTML={{ __html: html ?? "" }}
                />

                {tech.length && (
                  <ul className="flex flex-wrap mt-6 mb-2 p-0 list-none">
                    {tech.map((tech, i) => (
                      <li key={i} className="mr-5 mb-1 text-sm md:mr-2">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center mt-2 ml-0 -mx-2">
                  {github && (
                    <Link
                      href={github}
                      aria-label="GitHub Link"
                      className="flex-center mx-2 cursor-pointer "
                    >
                      <Image
                        src="/github.svg"
                        width={20}
                        height={20}
                        alt={github}
                        className="text-[#5b38e3]"
                      />
                    </Link>
                  )}

                  {external && (
                    <Link
                      href={external}
                      aria-label="External Link"
                      className="flex-center mx-2 cursor-pointer"
                    >
                      <Image
                        src="/external.svg"
                        width={20}
                        height={20}
                        alt={external}
                      />
                    </Link>
                  )}
                </div>
              </div>

              <div className="relative hidden md:block z-10 col-span-6 col-start-auto row-span-full md:col-span-full md:row-span-full md:opacity-25 w-full h-full">
                <Link
                  href={external ? external : github ? github : "#"}
                  className="block w-[50%] h-full bg-[#F7D046] rounded-lg align-middle hover:bg-transparent focus:bg-transparent focus:outline-none"
                >
                  <div className="absolute inset-0 z-30 transition mix-blend-screen"></div>
                  <img
                    src={cover}
                    alt={title}
                    className="rounded-lg mix-blend-multiply filter-grayscale filter-contrast-100 filter-brightness-90 lg:object-cover lg:w-auto lg:h-full lg:filter-brightness-50"
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
{
  /* <div className="relative z-[1]  grid-cols-[6/-1] row-span-full shadow-md md:col-span-full md:opacity-25 w-[50%] h-[400px]">
                  <Link href={external ? external : github ? github : "#"} className="w-full h-full align-middle block relative hover:filter-none hover:bg-transparent">
                    <Image
                      src={cover}
                      alt={title}
                      className="rounded-md filter grayscale contrast-100 brightness-90 md:brightness-50 "
                     fill
                    />
                  </Link>
                </div> */
}
