"use client";

import Link from "next/link";
import {
  useScrollDirection,
  usePrefersReducedMotion,
  useOnClickOutside,
} from "@/hooks";
import { useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(wrapperRef, () => setIsMenuOpen(false));

  const handleScroll = () => setScrolledToTop(window.pageYOffset < 50);
  const handleClick = () => setIsMenuOpen(!isMenuOpen);
  const navDelay = 1000;
  const loaderDelay = 2000;
  const navList = ["About", "Experience", "Work", "Contact"];

  useEffect(() => {
    if (typeof window === "undefined" || prefersReducedMotion) return;

    const timeout = setTimeout(() => setIsMounted(true), 100);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prefersReducedMotion]);

  const timeout = isHero ? loaderDelay : 0;
  const fadeClass = isHero ? "fade" : "";
  const fadeDownClass = isHero ? "fadedown" : "";

  return (
    <header
      className={`fixed top-0 z-50 h-[70px] w-full md:px-16 pr-8 bg-opacity-85 backdrop-blur transition-shadow duration-300 flex items-center ${
        scrollDirection === "up" && !scrolledToTop
          ? "shadow-lg translate-y-0"
          : scrollDirection === "down" && !scrolledToTop
          ? "-translate-y-full shadow-lg"
          : ""
      }`}
    >
      <nav className="w-full flex justify-between items-center h-[42px] font-dosis">
        <Link href="/">
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <div className="w-24  items-center flex justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="100"
                  zoomAndPan="magnify"
                  viewBox="0 0 375 374.999991"
                  height=""
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <g />
                  </defs>
                  <g fill="#292727" fill-opacity="1">
                    <g transform="translate(170.174158, 227.445206)">
                      <g>
                        <path d="M 29.921875 -50.4375 C 29.628906 -51.375 29.484375 -52.179688 29.484375 -52.859375 C 29.484375 -53.546875 29.519531 -54.320312 29.59375 -55.1875 C 29.664062 -56.050781 29.828125 -57.238281 30.078125 -58.75 C 30.328125 -60.257812 30.8125 -61.753906 31.53125 -63.234375 C 32.25 -64.710938 33.078125 -66.132812 34.015625 -67.5 C 34.953125 -68.863281 36.160156 -70.125 37.640625 -71.28125 C 39.117188 -72.4375 40.753906 -73.441406 42.546875 -74.296875 C 46.367188 -76.171875 51.015625 -77.109375 56.484375 -77.109375 C 67.503906 -77.109375 76.488281 -73.453125 83.4375 -66.140625 C 90.382812 -58.835938 93.859375 -49.5 93.859375 -38.125 C 93.859375 -26.75 89.753906 -17.296875 81.546875 -9.765625 C 73.335938 -2.242188 62.929688 1.515625 50.328125 1.515625 C 37.722656 1.515625 27.265625 -2.226562 18.953125 -9.71875 C 10.640625 -17.207031 6.484375 -26.925781 6.484375 -38.875 C 6.484375 -46.582031 8.28125 -53.421875 11.875 -59.390625 C 15.476562 -65.367188 20.628906 -70.050781 27.328125 -73.4375 L 27.96875 -72.46875 C 23.289062 -69.375 19.925781 -64.910156 17.875 -59.078125 C 15.820312 -53.242188 14.796875 -47.050781 14.796875 -40.5 C 14.796875 -28.332031 18.109375 -18.828125 24.734375 -11.984375 C 31.359375 -5.148438 39.851562 -1.734375 50.21875 -1.734375 C 60.582031 -1.734375 69.054688 -5.171875 75.640625 -12.046875 C 82.234375 -18.921875 85.53125 -27.972656 85.53125 -39.203125 C 85.53125 -48.921875 82.921875 -57.128906 77.703125 -63.828125 C 72.484375 -70.523438 65.125 -73.875 55.625 -73.875 C 51.375 -73.875 47.519531 -73.117188 44.0625 -71.609375 C 37.800781 -68.941406 33.660156 -64.546875 31.640625 -58.421875 C 31.066406 -56.628906 30.78125 -55.082031 30.78125 -53.78125 C 30.78125 -52.488281 30.851562 -51.445312 31 -50.65625 Z M 29.921875 -50.4375 " />
                      </g>
                    </g>
                  </g>
                  <g fill="#292727" fill-opacity="1">
                    <g transform="translate(139.086198, 203.501303)">
                      <g>
                        <path d="M -10.90625 18.640625 C -8.414062 19.460938 -5.953125 19.875 -3.515625 19.875 C -1.078125 19.875 1.472656 19.367188 4.140625 18.359375 C 6.804688 17.347656 9.242188 15.757812 11.453125 13.59375 C 13.671875 11.4375 15.488281 8.191406 16.90625 3.859375 C 18.332031 -0.460938 19.046875 -5.566406 19.046875 -11.453125 L 19.046875 -86.5625 C 18.960938 -88.945312 18.066406 -90.988281 16.359375 -92.6875 C 14.660156 -94.394531 12.613281 -95.25 10.21875 -95.25 L 8.421875 -95.25 L 8.421875 -96.640625 L 38.65625 -96.640625 L 38.65625 -95.25 L 36.859375 -95.25 C 34.460938 -95.25 32.414062 -94.421875 30.71875 -92.765625 C 29.019531 -91.109375 28.125 -89.039062 28.03125 -86.5625 L 28.03125 -11.046875 C 28.03125 -4.785156 27.0625 0.6875 25.125 5.375 C 23.195312 10.070312 20.757812 13.617188 17.8125 16.015625 C 12.289062 20.335938 6.171875 22.5 -0.546875 22.5 C -4.503906 22.5 -8.140625 21.71875 -11.453125 20.15625 Z M -10.90625 18.640625 " />
                      </g>
                    </g>
                  </g>
                  <g fill="#292727" fill-opacity="1">
                    <g transform="translate(179.72951, 142.431438)">
                      <g>
                        <path d="M 58.34375 3.5625 C 55.351562 6.15625 52.039062 7.453125 48.40625 7.453125 C 45.8125 7.453125 43.003906 6.753906 39.984375 5.359375 C 38.148438 4.472656 36.445312 3.425781 34.875 2.21875 C 33.3125 1.007812 31.394531 -0.523438 29.125 -2.390625 C 26.03125 -0.359375 22.546875 0.65625 18.671875 0.65625 C 16.734375 0.65625 14.828125 0.382812 12.953125 -0.15625 C 10.234375 -0.90625 7.957031 -2.226562 6.125 -4.125 C 4.21875 -6.101562 3.265625 -8.503906 3.265625 -11.328125 C 3.265625 -13.503906 3.78125 -15.398438 4.8125 -17.015625 C 5.851562 -18.628906 7.289062 -19.910156 9.125 -20.859375 C 7.664062 -23.097656 6.9375 -25.429688 6.9375 -27.859375 C 6.9375 -30.296875 7.785156 -32.332031 9.484375 -33.96875 C 11.179688 -35.601562 13.5625 -36.421875 16.625 -36.421875 C 20.5 -36.421875 23.507812 -35.210938 25.65625 -32.796875 L 24.9375 -27.03125 L 24.421875 -27.03125 C 24.328125 -29.445312 23.597656 -31.359375 22.234375 -32.765625 C 20.878906 -34.179688 19.160156 -34.890625 17.078125 -34.890625 C 15.003906 -34.890625 13.375 -34.234375 12.1875 -32.921875 C 11 -31.609375 10.40625 -29.984375 10.40625 -28.046875 C 10.40625 -25.867188 11.09375 -23.863281 12.46875 -22.03125 C 13.84375 -20.195312 16.117188 -17.898438 19.296875 -15.140625 C 22.484375 -12.390625 26.269531 -9.160156 30.65625 -5.453125 C 32.488281 -7.117188 34 -9.09375 35.1875 -11.375 C 36.820312 -14.394531 37.640625 -17.691406 37.640625 -21.265625 C 37.640625 -22.960938 37.4375 -24.644531 37.03125 -26.3125 C 36.414062 -28.863281 35.085938 -31.347656 33.046875 -33.765625 C 31.003906 -36.179688 28.351562 -38.238281 25.09375 -39.9375 L 25.34375 -40.234375 C 28.195312 -39.078125 30.628906 -37.582031 32.640625 -35.75 C 36.921875 -31.84375 39.0625 -26.894531 39.0625 -20.90625 C 39.0625 -17.164062 38.0625 -13.492188 36.0625 -9.890625 C 34.90625 -7.847656 33.492188 -6.046875 31.828125 -4.484375 L 35.09375 -1.84375 C 38.5625 0.945312 42.023438 2.9375 45.484375 4.125 C 47.085938 4.675781 48.957031 4.953125 51.09375 4.953125 C 53.238281 4.953125 55.570312 4.335938 58.09375 3.109375 Z M 11.375 -3.671875 C 13.789062 -1.835938 16.523438 -0.921875 19.578125 -0.921875 C 22.535156 -0.921875 25.328125 -1.734375 27.953125 -3.359375 C 23.222656 -7.304688 19.394531 -10.554688 16.46875 -13.109375 C 13.550781 -15.660156 11.394531 -17.835938 10 -19.640625 C 7.957031 -17.734375 6.9375 -15.144531 6.9375 -11.875 C 6.9375 -8.613281 8.414062 -5.878906 11.375 -3.671875 Z M 11.375 -3.671875 " />
                      </g>
                    </g>
                  </g>
                </svg>
                </div>
            
              
              </CSSTransition>
            )}
          </TransitionGroup>
        </Link>

        <ul className="hidden lg:flex gap-6 items-center">
          <TransitionGroup component={null}>
            {isMounted &&
              navList.map((item, index) => (
                <CSSTransition
                  key={index}
                  classNames={fadeDownClass}
                  timeout={timeout}
                >
                  <li
                    key={index}
                    className="font-normal text-lg "
                    style={{ transitionDelay: `${isHero ? index * 100 : 0}ms` }}
                  >
                    <Link href={`#${item.toLowerCase()}`}>
                      <span className="text-[#5b38e3] mr-1">{`0${
                        index + 1
                      }.`}</span>
                      <span>{item}</span>
                    </Link>
                  </li>
                </CSSTransition>
              ))}
          </TransitionGroup>

          <TransitionGroup component={null}>
            <li className="bg-transparent rounded border border-[#5b38e3] hover:border-r-4 hover:border-b-4 px-4 py-2 hover:translate-x-[-4px] hover:translate-y-[-4px] focus-visible:translate-x-[-4px] focus-visible:translate-y-[-4px]">
              {isMounted && (
                <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                  <Link
                    href="https://drive.google.com/file/d/1VQig2YtgsmbUd3Oh5oP8-OCBJi-1HXgE/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      transitionDelay: `${isHero ? navList.length * 100 : 0}ms`,
                    }}
                  >
                    Resume
                  </Link>
                </CSSTransition>
              )}
            </li>
          </TransitionGroup>
        </ul>

        <div className="lg:hidden" ref={wrapperRef}>
          <Image
            onClick={handleClick}
            src="/menu.svg"
            width={34}
            height={34}
            alt="menu"
          />

          <ul
            className={`fixed flex-col items-center justify-evenly w-full max-w-[50%] h-screen z-10 bg-white top-0 right-0 transition-transform ${
              isMenuOpen ? "flex" : "hidden"
            }`}
            onClick={handleClick}
          >
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                  <Image
                    onClick={handleClick}
                    src="/close.svg"
                    className="text-[#5b38e3]"
                    width={40}
                    height={40}
                    alt="close"
                  />
                </CSSTransition>
              )}
            </TransitionGroup>

            <TransitionGroup component={null}>
              {["About", "Experience", "Work", "Contact"].map((item, index) => (
                <CSSTransition
                  key={index}
                  classNames={fadeDownClass}
                  timeout={timeout}
                >
                  <li key={index} className="bg-white font-medium text-lg">
                    <Link href={`#${item.toLowerCase()}`}>
                      <span className="text-[#5b38e3]">{`0${index + 1}.`}</span>
                      <span>{item}</span>
                    </Link>
                   
                  </li>
                 
                </CSSTransition>
              ))}
            </TransitionGroup>
            <button className="bg-transparent rounded border-2 border-[#5b38e3]  px-4 py-2">
            <Link
                    href="https://drive.google.com/file/d/1VQig2YtgsmbUd3Oh5oP8-OCBJi-1HXgE/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                   
                  >
                    Resume
                  </Link>
            </button>
           
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
