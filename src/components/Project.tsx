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
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    );
  }, [featuredProjects, prefersReducedMotion]);

  return (
    <section id="projects" className="md:py-[100px] py-12 ">
      <div className="flex gap-2 ">
        <h2 className="mb-5 flex-shrink-0">
          {" "}
          <span className="text-2xl font-dosis">02.</span>
          <span className="text-3xl font-medium font"> Recent projects </span>
        </h2>
        <div className="border-t flex-grow lg:flex-grow-0 w-72 border-black my-4"></div>
        
      </div>

      <ul className=" bg-blue-500">
        {featuredProjects.map((project, i) => {
          const { external, title, tech, github, cover, html } = project;

          return (
            <li
              key={i}
              ref={(el) => {
                revealProjects.current[i] = el;
              }}
              className={`relative grid gap-2 grid-cols-12 items-center ${
                i % 2 !== 0 ? "md:flex-row-reverse flex" : ""
              } mb-24 md:mb-16 sm:mb-8`}
            >
              <div className="relative xcol-span-7 col-span-12 row-span-full z-10 md:col-span-full md:p-5 sm:p-2 bg-blue-400 flex items-end flex-col w-full">
                <p className="mb-2 text-green-500 font-poppins text-xs">
                  Featured Project
                </p>

                <h3 className="text-lightest-slate text-2xl md:text-xl mb-2">
                  <Link href={external} className="relative z-10 font-bold">
                    {title}
                  </Link>
                </h3>

                <div
                  className="relative z-20 p-6 font-dosis text-light-slate text-lg rounded-md shadow-md bg-red-500 w-full"
                  dangerouslySetInnerHTML={{ __html: html ?? "" }}
                />

                {tech.length && (
                  <ul className="flex flex-wrap mt-6 mb-2 p-0 list-none">
                    {tech.map((tech, i) => (
                      <li key={i} className="mr-5 mb-1  text-sm md:mr-2">
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
                      className="flex-center mx-2 cursor-pointer"
                    >
                      <Image
                        src="/github.svg"
                        width={20}
                        height={20}
                        alt={github}
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

              <div className="relative hidden md:block z-10 col-start-6 col-end-auto row-span-full shadow-custom md:col-span-full md:h-full md:opacity-25">
                <Link
                  href={external ? external : github ? github : "#"}
                  className="w-[50%] h-full bg-green-500 rounded-custom align-middle block relative focus:outline-none focus:bg-transparent hover:bg-transparent group"
                >
                  <div className="absolute inset-0 z-30 transition-custom mix-blend-screen group-hover:bg-transparent"></div>
                  <img
                    src={cover}
                    alt={title}
                    className="rounded-custom mix-blend-multiply filter grayscale contrast-100 brightness-90 md:object-cover md:w-auto md:h-full md:filter md:grayscale md:contrast-100 mdd:brightness-100"
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
