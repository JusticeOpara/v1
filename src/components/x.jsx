
// import React, { useState, useEffect, useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import sr from '@/utils/sr';
// import srConfig from '@/utils/srConfig';
// import { KEY_CODES } from '@/utils';
// import { usePrefersReducedMotion } from '@/hooks';

// interface Job {
//   title: string;
//   company: string;
//   location: string;
//   range: string;
//   url: string;
//   html: string;
// }

// interface JobsProps {
//   jobsData: Job[];
// }

// const dummyJobsData: Job[] = [
//   {
//     title: "Software Engineer",
//     company: "Tech Corp",
//     location: "San Francisco, CA",
//     range: "Jan 2020 - Present",
//     url: "https://techcorp.com",
//     html: "<p>Developed and maintained web applications using React and Node.js.</p>",
//   },
//   {
//     title: "Frontend Developer",
//     company: "Web Solutions",
//     location: "New York, NY",
//     range: "Jun 2018 - Dec 2019",
//     url: "https://websolutions.com",
//     html: "<p>Implemented responsive UI components with HTML, CSS, and JavaScript.</p>",
//   },
//   {
//     title: "Intern",
//     company: "Startup Inc.",
//     location: "Austin, TX",
//     range: "Jan 2017 - May 2018",
//     url: "https://startupinc.com",
//     html: "<p>Assisted in the development of mobile applications and performed QA testing.</p>",
//   },
// ];


// const Experience: React.FC<JobsProps> = ({ jobsData   }) => {
//   const [activeTabId, setActiveTabId] = useState(0);
//   const [tabFocus, setTabFocus] = useState<number | null>(null);
//   const tabs = useRef<(HTMLButtonElement | null)[]>([]);
//   const revealContainer = useRef<HTMLDivElement>(null);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }
//     if (revealContainer.current) {
//       sr.reveal(revealContainer.current, srConfig());
//     }
//   }, [prefersReducedMotion]);

//   const focusTab = () => {
//     if (tabFocus !== null && tabs.current[tabFocus]) {
//       tabs.current[tabFocus]?.focus();
//     } else if (tabFocus !== null && tabFocus >= tabs.current.length) {
//       setTabFocus(0);
//     } else if (tabFocus !== null && tabFocus < 0) {
//       setTabFocus(tabs.current.length - 1);
//     }
//   };

//   useEffect(() => {
//     focusTab();
//   }, [tabFocus]);

//   const onKeyDown = (e: React.KeyboardEvent) => {
//     switch (e.key) {
//       case KEY_CODES.ARROW_UP:
//         e.preventDefault();
//         setTabFocus((prevFocus) => (prevFocus !== null ? prevFocus - 1 : 0));
//         break;
//       case KEY_CODES.ARROW_DOWN:
//         e.preventDefault();
//         setTabFocus((prevFocus) => (prevFocus !== null ? prevFocus + 1 : 0));
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <section className="max-w-3xl mx-auto" id="jobs" ref={revealContainer}>
//       <h2 className="numbered-heading">Where I’ve Worked</h2>
//       <div className="flex flex-col md:flex-row">
//         <div
//           className="relative z-3 flex flex-col md:mr-5"
//           role="tablist"
//           aria-label="Job tabs"
//           onKeyDown={onKeyDown}
//         >
//           {jobsData.map((job, i) => (
//             <button
//               key={i}
//               className={`flex items-center px-5 py-2 ${
//                 activeTabId === i ? 'text-green-500' : 'text-slate-400'
//               }`}
//               onClick={() => setActiveTabId(i)}
//               ref={(el) => (tabs.current[i] = el)}
//               id={`tab-${i}`}
//               role="tab"
//               tabIndex={activeTabId === i ? 0 : -1}
//               aria-selected={activeTabId === i}
//               aria-controls={`panel-${i}`}
//             >
//               <span>{job.company}</span>
//             </button>
//           ))}
//           <div
//             className="absolute top-0 left-0 z-10 w-1 bg-green-500 transition-transform duration-250"
//             style={{ transform: `translateY(calc(${activeTabId} * var(--tab-height)))` }}
//           />
//         </div>

//         <div className="w-full mt-5 md:mt-0">
//           {jobsData.map((job, i) => (
//             <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
//               <div
//                 id={`panel-${i}`}
//                 role="tabpanel"
//                 tabIndex={activeTabId === i ? 0 : -1}
//                 aria-labelledby={`tab-${i}`}
//                 aria-hidden={activeTabId !== i}
//                 hidden={activeTabId !== i}
//                 className="p-5"
//               >
//                 <h3 className="mb-2 text-2xl font-medium">
//                   <span>{job.title}</span>
//                   <span className="text-green-500">
//                     &nbsp;@&nbsp;
//                     <a href={job.url} className="inline-link">
//                       {job.company}
//                     </a>
//                   </span>
//                 </h3>
//                 <p className="mb-6 text-xs font-mono text-light-slate">{job.range}</p>
//                 <div dangerouslySetInnerHTML={{ __html: job.html }} />
//               </div>
//             </CSSTransition>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
