"use client";

import Link from "next/link";
import { useScrollDirection, usePrefersReducedMotion } from "@/hooks";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Image from "next/image";


type NavProps = {
  isHero: boolean;
};
const Navbar: React.FC<NavProps> = ({ isHero }) => {
  const[isMenu, setIsMenu]= useState(false)
  const [isMounted, setIsMounted] = useState(!isHero);
  const scrollDirection = useScrollDirection({ initialDirection: "down" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const loaderDelay = 2000;
  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prefersReducedMotion]);

  const handleClick = ()=>{
    setIsMenu(true)
  }
  const timeout = isHero ? loaderDelay : 0;
  const fadeClass = isHero ? "fade" : "";
  const fadeDownClass = isHero ? "fadedown" : "";

  return (
    <header
      className={`fixed top-0  z-50 bg-opacity-85 h-[70px] px-16 w-full bg-blue-500 items-center flex backdrop-blur transition-shadow duration-300 ${
        scrollDirection === "up" && !scrolledToTop
          ? "shadow-lg translate-y-0"
          : scrollDirection === "down" && !scrolledToTop
          ? "-translate-y-full shadow-lg"
          : ""
      }`}
    >
      <nav className="h-[42px] w-full font-dosis flex justify-between items-center bg-orangde-200">
        <Link href="/">
          <span className="font-bold text-3xl ">JO</span>
        </Link>

        <ul className="md:flex gap-6 items-center hidden">
          <li className="font-normal text-lg">
            <Link href="#about">
              <span>01.</span>
              <span>About</span>
            </Link>
          </li>
          <li className="font-normal text-lg">
            <Link href="#experience">
              <span>02.</span>
              <span>Experience</span>
            </Link>
          </li>
          <li className="font-normal text-lg">
            <Link href="#projects">
              <span>03.</span>
              <span>Work</span>
            </Link>
          </li>
          <li className="font-normal text-lg">
            <Link href="#contact">
              <span>04.</span>
              <span>Contact</span>
            </Link>
          </li>

          <li
            className="bg-transparent rounded border border-[#5b38e3] hover:border-r-4 hover:border-b-4 px-4 py-2  hover:outline-none 
                 hover:translate-x-[-4px] hover:translate-y-[-4px] focus-visible:translate-x-[-4px] focus-visible:translate-y-[-4px]"
          >
            <Link
              className="font-normal text-lg cursor-pointer"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </li>
          <Image
          onClick={handleClick}
        src="/menu.svg"
        width={54}
        height={54}
        alt="menu"/>
        </ul>

      <div className="mdd:hidden">
      
     
{
  isMenu ? <ul className="flex fixed flex-col items-center justify-evenly w-full max-w-[250px] h-screen z-[100]  bg-white top-0  right-0 font-Satoshi mdd:hidden">
  <li className=" bg-white ">
    <Link href="" className="  mr-0 ">
    <span>01.</span>
    <span>About</span>
    </Link>
  </li>

  <li className="">
    <Link href="" className="">
    <span>02.</span>
    <span>Experience</span>
    </Link>
  </li>

  <li>
    <Link href="" className="">
    <span>03.</span>
    <span>Work</span>
    </Link>
  </li>

  <li>
    <Link href="" className="">
    <span>04.</span>
    <span>Contact</span>
    </Link>
  </li>
</ul>: ""
}
      
      </div>
          
      
      </nav>
    </header>
  );
};

export default Navbar;
