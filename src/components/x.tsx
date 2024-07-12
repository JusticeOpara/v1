import React from 'react'

const x = () => {
  return (

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
              <div className="relative col-span-full rounded md:rounded-none p-6 md:p-0 bg-[#5b38e3] md:bg-transparent col-start-1 row-span-full lg:col-span-8  lg:col-start-6 lg:row-span-full sm:flex sm:flex-col sm:justify-center sm:h-full sm:col-span-full sm:p-10 sm:z-10 items-end">
          

                <h3 className="text-lightest-slate text-2xl md:text-xl mb-3">
                  <Link href={external} className="relative z-10 font-bold md:text-[#202020] text-white">
                    {title}
                  </Link>
                </h3>

                <div
                  className="relative z-50 md:p-6 font-dosis text-light-slate text-lg rounded-md md:shadow-md text-gray-200 bg-[#5b38e3]"
                  dangerouslySetInnerHTML={{ __html: html ?? "" }}
                />

                {tech.length && (
                  <ul className="flex flex-wrap my-4  p-0 list-none md:text-[#202020] text-white">
                    {tech.map((tech, i) => (
                      <li key={i} className="mr-5 mb-1 text-sm font-medium md:mr-2">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center ml-0 -mx-2">
                  {github && (
                    <Link
                      href={github}
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
                      aria-label="External Link"
                      className="flex-center mx-2 cursor-pointer bg-black md:bg-transparent"
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

              <div className="relative hidden md:block col-span-6 col-start-auto row-span-full md:col-span-full md:row-span-full w-full h-full">
                <Link
                  href={external ? external : github ? github : "#"}
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
 
  )
}

export default x
//     <section id="work" className="md:py-[100px] pt-12 bg-white">
//       <div className="flex gap-2 mb-8">
//         <h2 className=" flex-shrink-0">
//           <span className="text-2xl font-dosis">03.</span>
//           <span className="text-3xl font-medium"> Personal projects </span>
//         </h2>
//         <div className="border-t flex-grow lg:flex-grow-0 w-72 border-black my-4"></div>
//       </div>
// {/* jkjfkhjfkgjhkjgfjh */}
     
//     <div
//       className="w-full rounded-lg shadow-2xl lg:shadow-none"
    
//     >
//       {featuredProjects.map((project, i) => {
//           const { external, title, tech, github, cover, html } = project;

//           return (
//              <div className="max-w-5xl relative h-[33rem] sm:h-[30rem] lg:h-[22rem] xl:h-[28rem] flex flex-col overflow-hidden ">
//              {/* image */}
//              <div
//                className={`absolute inset-0 w-[20rem] h-[33rem] sm:h-[30rem] lg:top-1/2 lg:-translate-y-1/2 flex lg:items-start flex-col`}
//              >
//                <Link
//                  href={`${external}`}
//                  className={`min-w-[20rem] w-[37rem] md:w-[50rem] lg:w-[42rem] h-[33rem] sm:h-[30rem] lg:h-[22rem] xl:h-[28rem] absolute  rounded-xl duration-300 cursor-pointer opacity-10 lg:opacity-25 hover:opacity-50 ${
//                    orientation === 1 ? "lg:left-0" : "lg:left-full"
//                  }`}
//                  target="_blank"
//                >
//                  <Image src={`/${cover}`} alt={`${name} image`} fill priority />
//                </Link>
//              </div>
     
//              {/* text */}
//              <div
//                className={`${
//                  orientation === 1
//                    ? "absolute top-1/2 right-0 -translate-y-1/2 max-w-xl px-6 py-8 lg:p-0 flex lg:items-end flex-col w-full"
//                    : "absolute top-1/2 left-0 -translate-y-1/2 max-w-xl px-6 py-8 lg:p-0 flex lg:items-start flex-col w-full"
//                }`}
//              >
//                <Link
//                  href={`${external}`}
//                  className="mb-4 text-xl font-bold tracking-wider text-white capitalize cursor-pointer select-none lg:text-2xl"
//                  target="_blank"
//                >
//                  {title}
//                </Link>
//                <div className="py-5 mb-4 text-base font-normal text-white duration-300 rounded-lg shadow-xl md:bg-gray/90 lg:text-lg md:p-6 lg:px-7 lg:py-7 hover:shadow-2xl hover:-translate-y-1">
//                  {html}about
//                </div>
//                <div className="flex flex-wrap items-center justify-center space-x-4 md:justify-start">
//                  {tech.map((item, index) => (
//                    <span
//                      key={index}
//                      className="text-sm font-semibold capitalize rounded-md select-none text-cyan lg:text-base"
//                    >
//                      {item}
//                    </span>
//                  ))}
//                </div>
//                <div className="flex items-center pt-5 pb-2 mt-5 space-x-4">
//                  <Link
//                    href={`${github}`}
//                    target="_blank"
//                    aria-label={`${name} github link`}
//                  >
//                    <>
//                      {/* <Github /> */}
//                    </>
//                  </Link>
//                  <Link
//                    href={`${}`}
//                    target="_blank"
//                    aria-label={`${name} live link`}
//                  >
//                    <>
//                      {/* <LiveLink /> */}
//                    </>
//                  </Link>
//                </div>
//              </div>
     
     
//            </div>
//           )})}
     
//     </div>
//     </section>
<section id="work" className="md:py-[100px] pt-12 bg-white">
  <div className="flex gap-2 mb-8">
    <h2 className="flex-shrink-0">
      <span className="text-2xl font-dosis">03.</span>
      <span className="text-3xl font-medium"> Personal projects </span>
    </h2>
    <div className="border-t flex-grow lg:flex-grow-0 w-72 border-black my-4"></div>
  </div>

  <div className="w-full rounded-lg shadow-2xl lg:shadow-none">
    {featuredProjects.map((project, i) => {
      const { external, title, tech, github, cover, html, orientation } = project;

      return (
        <div key={i} className="max-w-5xl relative h-[33rem] sm:h-[30rem] lg:h-[22rem] xl:h-[28rem] flex flex-col overflow-hidden">
          {/* Image */}
          <div className={`absolute inset-0 w-[20rem] h-[33rem] sm:h-[30rem] lg:top-1/2 lg:-translate-y-1/2 flex lg:items-start flex-col`}>
            <Link
              href={external}
              className={`min-w-[20rem] w-[37rem] md:w-[50rem] lg:w-[42rem] h-[33rem] sm:h-[30rem] lg:h-[22rem] xl:h-[28rem] absolute rounded-xl duration-300 cursor-pointer opacity-10 lg:opacity-25 hover:opacity-50 ${orientation === 1 ? "lg:left-0" : "lg:left-full"}`}
              target="_blank"
            >
              <Image src={`/${cover}`} alt={`${title} image`} fill priority />
            </Link>
          </div>

          {/* Text */}
          <div className={`${orientation === 1 ? "absolute top-1/2 right-0 -translate-y-1/2 max-w-xl px-6 py-8 lg:p-0 flex lg:items-end flex-col w-full" : "absolute top-1/2 left-0 -translate-y-1/2 max-w-xl px-6 py-8 lg:p-0 flex lg:items-start flex-col w-full"}`}>
            <Link
              href={external}
              className="mb-4 text-xl font-bold tracking-wider text-white capitalize cursor-pointer select-none lg:text-2xl"
              target="_blank"
            >
              {title}
            </Link>
            <div className="py-5 mb-4 text-base font-normal text-white duration-300 rounded-lg shadow-xl md:bg-gray/90 lg:text-lg md:p-6 lg:px-7 lg:py-7 hover:shadow-2xl hover:-translate-y-1">
              {html}
            </div>
            <div className="flex flex-wrap items-center justify-center space-x-4 md:justify-start">
              {tech.map((item, index) => (
                <span key={index} className="text-sm font-semibold capitalize rounded-md select-none text-cyan lg:text-base">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex items-center pt-5 pb-2 mt-5 space-x-4">
              <Link href={github} target="_blank" aria-label={`${title} github link`}>
                {/* GitHub Icon Component */}
              </Link>
              <Link href={external} target="_blank" aria-label={`${title} live link`}>
                {/* Live Link Icon Component */}
              </Link>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</section>
