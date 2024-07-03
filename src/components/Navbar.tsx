"use client";

import Link from "next/link";
import { useScrollDirection, usePrefersReducedMotion, useOnClickOutside } from "@/hooks";
import { useState, useEffect, useRef } from "react";
import { Transition,CSSTransition } from "react-transition-group";
import Image from "next/image";

type NavProps = {
  isHero: boolean;
};

const Navbar: React.FC<NavProps> = ({ isHero }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(!isHero);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection({ initialDirection: "down" });
  const prefersReducedMotion = usePrefersReducedMotion();
  // const loaderDelay = 2000;

  const handleScroll = () => setScrolledToTop(window.pageYOffset < 50);
  const handleClick = () => setIsMenuOpen(!isMenuOpen);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(wrapperRef, () => setIsMenuOpen(false));

  useEffect(() => {
    if (typeof window == "undefined" || prefersReducedMotion) return;

    const timeout = setTimeout(() => setIsMounted(true), 100);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prefersReducedMotion]);
  // useEffect(() => {
  //   if (typeof window === 'undefined' || prefersReducedMotion) return;
  
  //   window.addEventListener("scroll", handleScroll);
  
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prefersReducedMotion]);

  const fadeClass = isHero ? "fade" : "";
  const fadeDownClass = isHero ? "fadedown" : "";

  return (
    <header
      className={`fixed top-0 z-50 h-[70px] w-full bg-white px-16 bg-opacity-85 backdrop-blur transition-shadow duration-300 flex items-center ${
        scrollDirection === "up" && !scrolledToTop
          ? "shadow-lg translate-y-0"
          : scrollDirection === "down" && !scrolledToTop
          ? "-translate-y-full shadow-lg"
          : ""
      }`}
    >
      <nav className="w-full flex justify-between items-center h-[42px] font-dosis">
        <Link href="/">
          <h1 className="font-bold text-3xl text-[#5b38e3]">JO</h1>
        </Link>

        <ul className="hidden md:flex gap-6 items-center">
          {["About", "Experience", "Work", "Contact"].map((item, index) => (
            <li key={index} className="font-normal text-lg ">
              <Link href={`#${item.toLowerCase()}`}>
                
                  <span className="text-[#5b38e3] mr-1">{`0${index + 1}.`}</span>
                  <span>{item}</span>
               
              </Link>
            </li>
          ))}
          <li className="bg-transparent rounded border border-[#5b38e3] hover:border-r-4 hover:border-b-4 px-4 py-2 hover:translate-x-[-4px] hover:translate-y-[-4px] focus-visible:translate-x-[-4px] focus-visible:translate-y-[-4px]">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
           
            </Link>
          </li>
        </ul>

        <div className="md:hidden" ref={wrapperRef}>
          <Image
            onClick={handleClick}
            src="/menu.svg"
            width={54}
            height={54}
            alt="menu"
          />

          <ul
            className={`fixed flex-col items-center justify-evenly w-full max-w-[50%] h-screen z-10 bg-white top-0 right-0 transition-transform ${
              isMenuOpen ? "flex" : "hidden"
            }`}
            onClick={handleClick}
          >
            <Image
              onClick={handleClick}
              src="/close.svg"
              className="text-[#5b38e3]"
              width={54}
              height={54}
              alt="close"
            />
            {["About", "Experience", "Work", "Contact"].map((item, index) => (
              <li key={index} className="bg-white">
                <Link href={`#${item.toLowerCase()}`}>
                
                    <span className="text-[#5b38e3]">{`0${index + 1}.`}</span>
                    <span>{item}</span>
                  
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
