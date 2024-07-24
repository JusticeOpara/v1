"use client"


import  { useState, useEffect, useRef, KeyboardEvent } from "react";
import { CSSTransition } from "react-transition-group";
import srConfig from "@/utils/srConfig";
import { KEY_CODES } from "@/utils";
import { usePrefersReducedMotion } from "@/hooks";
import Link from "next/link";

interface Job {
  title: string;
  company: string;
  location: string;
  range: string;
  url: string;
  html: string;
}

const dummyJobsData: Job[] = [
  {
    title: "Software Engineer",
    company: "Scelloo",
    location: "Nigeria (Remote)",
    range: "Jan 2024 - Present",
    url: "http://www.cloudenly.com",
    html: `
    <p>➤ Collaborated with the Quality Assurance team to establish and execute thorough test plans, contributing to a 90% improvement in overall product quality.</p>
    <p>➤ ⁠Leveraged modern frontend technologies, such as Vue.js, TailwindCSS, Vuex, and JavaScript, to deliver robust user interfaces and feature updates.</p>
    <p>➤ Part of the team to  engineer a comprehensive test routines and schedules that closely mirror external interfaces across diverse browsers and devices, resulting in a 93% reduction in post-deployment issues.</p>`,
  },
  {
    title: "Frontend Developer",
    company: "BleauTech",
    location: "Nigeria (Remote)",
    range: "Jan 2023 – Dec 2023",
    url: "https://www.bleautech.com",
    html: `<p>➤ Developed responsive web pages/components and user-friendly interfaces using Axios, Tailwind CSS, JavaScript, and ReactJS.</p>
    <p>➤ Implemented secure authentication functionality, streamlined data management, and enhanced API communication.</p>
    <p>➤  Developed and integrated a payment feature into the app, utilizing the provided payment endpoint from the backend.</p>`,
  },
  {
    title: "Intern",
    company: "Rock&Art",
    location: "United Kingdom (Remote)",
    range: "Jan 2023 - December 2023",
    url: "https://www.rockandart.org",
    html: `<p>➤ Collaborated with our design team to implement user-friendly interfaces and write clean, maintainable, and efficient code for web applications.</p>
    <p>➤ Debug, troubleshoot, and optimize web applications for maximum speed and scalability</p>
    <p>➤ My primary responsibility is building and managing websites with a team of Creative developers. 
    Using technologies such as React, Redux, and MUI.</p>
    <p>➤ ⁠Leveraged frontend technologies, such as HTML, CSS[MUI],JavaScript & React, to deliver robust user interfaces and feature updates.</p>`,
  },
  // Add more dummy jobs data as needed
];

const Experience: React.FC = () => {
  const jobsData = dummyJobsData;

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState<number | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const revealContainer = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const isClient = typeof window !== "undefined";

    if (isClient && !prefersReducedMotion) {
      import("@/utils/sr").then(({ default: sr }) => {
        sr.reveal(revealContainer.current!, srConfig());
      });
    }
  }, [prefersReducedMotion]);


  const focusTab = () => {
    if (tabs.current[tabFocus!]) {
      tabs.current[tabFocus!]?.focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus! >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus! < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus((prev) => (prev !== null ? prev - 1 : 0));
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus((prev) => (prev !== null ? prev + 1 : 0));
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <section id="experience" ref={revealContainer} className="w-full mx-auto md:py-[100px] py-12 md:grid place-items-center">
     
      <div className="flex gap-2">
        <h2 className="mb-5 flex-shrink-0">
          <span className="text-2xl font-dosis">02.</span>
          <span className="text-3xl font-medium"> My Experience </span>
        </h2>
        <div className="lg:flex-grow-0 w-72 border-t border-black my-4"></div>
      </div>
      <div className="flex flex-col md:flex-row mt-6">
       
        <div
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={onKeyDown}
          className="relative flex md:flex-col md:block md:w-1/4 flex-row"
        >
          {jobsData.map((job, i) => (
            <button
              key={i}
              // isActive={activeTabId === i}
              style={activeTabId === i ? { background: "active" } : {}}
              onClick={() => setActiveTabId(i)}
              ref={(el) => { if (el) tabs.current[i] = el; }}
              id={`tab-${i}`}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
              className={`flex items-center w-full h-12 md:px-4 px-2 mb-2 border-l-2 text-left whitespace-nowrap shadow text-[#202020] font-medium ${
                activeTabId === i
                  ? "border-[#5b38e3]"
                  : "border-transparent "
              }  hover:bg-[#5b38e3]`}
            >
              {job.company}
            </button>
            
            
          ))}
          <div
            className="absolute left-0 w-1 bg-[#5b38e3] transition-transform duration-300 ease-in-out"
            style={{ transform: `translateY(${activeTabId * 3}rem)` }}
          ></div>
        </div>

        <div className="relative flex-grow md:ml-8">
          {jobsData.map((job, i) => (
            <CSSTransition
              key={i}
              in={activeTabId === i}
              timeout={250}
              classNames="fade"
            >
              <div
                id={`panel-${i}`}
                role="tabpanel"
                tabIndex={activeTabId === i ? 0 : -1}
                aria-labelledby={`tab-${i}`}
                aria-hidden={activeTabId !== i}
                hidden={activeTabId !== i}
                className="p-4"
              >
                <h3 className="text-xl font-medium mb-2">
                  <span>{job.title}</span>
                  <span className="text-[#5b38e3]">
                    &nbsp;@&nbsp;
                    <Link href={job.url} target="_blank"  className="">
                      {job.company}
                    </Link>
                  </span>
                </h3>

                <p className="text-base font-medium font-dosis mb-2">{job.range}</p>

                <div className="md:w-96 gap-2 flex flex-col w-full font-poppins text-sm font-light text-[#202020]" dangerouslySetInnerHTML={{ __html: job.html }} />
              </div>
            </CSSTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience
