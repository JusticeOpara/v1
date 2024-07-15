"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Social from "@/components/Socials";
import Link from "next/link";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timeout)
    
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar isHero={true} />
          <Social />

          <main className="h-full w-screen 2xl:px-80 lg:px-[200px] md:px-[100px] mx-auto px-12 mt-4 md:mt-0">
            <div className="flex justify-center flex-col gap-4 items-start min-h-screen bg-white h-screen text-[#202020] font-poppins">
              <h1 className="font-bold text-4xl md:text-7xl ">Hi,</h1>

              <h2 className="font-bold md:text-6xl text-3xl lg:text-7xl">
                I am <span className="text-[#5b38e3]"> Justice Opara</span>{" "}
              </h2>
              <h2 className="font-bold md:text-6xl text-3xl lg:text-7xl">
                I build things for the web.
              </h2>
              <p className="font-poppin font-light max-w-[600px] lg:text-lg text-base">
                I am a self-taught Software Engineer that crafts things for the
                Web, heavy focused on front-end development, enthusiastic and
                fascinated on user interfaces.
              </p>

              <p
                className="bg-transparent hover:border-r-4 hover:border-b-4 rounded border border-[#5b38e3] px-4 py-2 hover:shadow-[#5b38e3]
             hover:translate-x-[-4px] hover:translate-y-[-4px] focus-visible:translate-x-[-4px] focus-visible:translate-y-[-4px]"
              >
                <Link
                  className="font-medium text-lg cursor-pointer text-[#5b38e3]"
                  href={"#contact"}
                >
                  Get in touch
                </Link>
               
              </p>
            </div>

            <About />
            <Experience />
            <Project />

            <Contact />
          </main>
        </>
      )}
    </>
  );
}
