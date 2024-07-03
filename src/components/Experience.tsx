"use client";

import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import { CSSTransition } from "react-transition-group";
import sr from "@/utils/sr";
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
    company: "Company A",
    location: "Location A",
    range: "Jan 2020 - Present",
    url: "https://companya.com",
    html: `<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Accusamus similique cupiditate neque, aut eius nemo possimus! Laboriosam optio perspiciatis fugiat.</p>`,
  },
  {
    title: "Frontend Developer",
    company: "Company B",
    location: "Location B",
    range: "Feb 2018 - Dec 2019",
    url: "https://companyb.com",
    html: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Temporibus earum praesentium porro fugiat autem, commodi facilis
    dolore nemo non natus error vitae. Quidem, consequuntur, officia
    qui ad sunt deleniti maiores incidunt, illum quaerat velit
    aspernatur magnam atque eligendi minus fuga.</p>`,
  },
  {
    title: "Intern",
    company: "Startup Inc.",
    location: "Austin, TX",
    range: "Jan 2017 - May 2018",
    url: "https://startupinc.com",
    html: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Temporibus earum praesentium porro fugiat autem, commodi facilis
    dolore nemo non natus error vitae. Quidem, consequuntur, officia
    qui ad sunt deleniti maiores incidunt, illum quaerat velit
    aspernatur magnam atque eligendi minus fuga.</p>`,
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
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current!, srConfig());
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
    <section id="experience" ref={revealContainer} className="w-full mx-auto bg-red-300">
     
      <div className="flex gap-2">
        <h2 className="mb-5 flex-shrink-0">
          <span className="text-2xl font-dosis">02.</span>
          <span className="text-3xl font-medium"> My Experience </span>
        </h2>
        <div className="lg:flex-grow-0 w-72 border-t border-black my-4"></div>
      </div>
      <div className="flex flex-col md:flex-row mt-8">
       
        <div
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={onKeyDown}
          className="relative flex md:flex-col md:block md:w-1/4 flex-row"
        >
          {jobsData.map((job, i) => (
            <button
              key={i}
              isActive={activeTabId === i}
              onClick={() => setActiveTabId(i)}
              ref={(el) => (tabs.current[i] = el)}
              id={`tab-${i}`}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
              className={`flex items-center w-full h-12 px-4 mb-2 border-l-2 text-left whitespace-nowrap bg-red-500 ${
                activeTabId === i
                  ? "border-[#5b38e3] text-[#5b38e3]"
                  : "border-transparent text-[#202020]"
              } focus:bg-light-navy hover:bg-light-navy`}
            >
              {job.company}
            </button>
          ))}
          <div
            className="absolute left-0 w-1 bg-[#5b38e3] transition-transform duration-300 ease-in-out"
            style={{ transform: `translateY(${activeTabId * 3}rem)` }}
          ></div>
        </div>

        <div className="relative flex-grow mt-6 md:mt-0 md:ml-8">
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
                <h3 className="text-xl font-medium">
                  <span>{job.title}</span>
                  <span className="text-[#5b38e3]">
                    &nbsp;@&nbsp;
                    <Link href={job.url} className="">
                      {job.company}
                    </Link>
                  </span>
                </h3>

                <p className="text-sm font-medium font-dosis">{job.range}</p>

                <div className="w-96 font-poppins font-light text-[#202020]" dangerouslySetInnerHTML={{ __html: job.html }} />
              </div>
            </CSSTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;