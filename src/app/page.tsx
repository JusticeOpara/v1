import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Social from "@/components/Socials";
import Link from "next/link";


export default function Home() {
  return (
    <>
     <Navbar  isHero={true}/> 
     <Social/>
   
    <main className="h-full w-full 2xl:px-[300px] md:px-[100px] lg:px-[200px] mx-auto px-12 mt-4 md:mt-0">
      <div className="flex justify-center flex-col gap-4 items-start min-h-screen bg-white h-screen text-[#202020] font-poppins">
        <h1 className="font-bold md:text-6xl text-4xl lg:text-7xl ">Hi,</h1>

        <h2 className="font-bold md:text-6xl text-3xl lg:text-7xl">I am <span className="text-[#5b38e3]"> Justice Opara</span> </h2>
        <h2 className="font-bold md:text-6xl text-3xl lg:text-7xl">
          I build things for the web.
        </h2>
        <p className="font-poppin font-light max-w-[600px] lg:text-lg text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia quasi minus, 
        eos reiciendis maiores repudiandae optio excepturi totam quidem ratione in blanditiis voluptas vero velit non deleniti! 
        Rerum cumque voluptates ipsa corrupti enim nesciunt deserunt praesentium, similique, 
        odit perferendis maiores id laboriosam! Quibusdam doloremque vero deserunt molestiae et pariatur?
        </p>
     

        <p className="bg-transparent hover:border-r-4 hover:border-b-4 rounded border border-[#5b38e3] px-4 py-2 hover:shadow-[#5b38e3]
                 hover:translate-x-[-4px] hover:translate-y-[-4px] focus-visible:translate-x-[-4px] focus-visible:translate-y-[-4px]"
          >
            <Link
              className="font-medium text-lg cursor-pointer text-[#5b38e3]"
              href="#contact"
              target="_blank"
            >
              Get in touch
            </Link>
          </p>
      </div>
     

       <About/> 
       <Experience/> 
        <Project/>    
    
      <Contact/>  
       
    </main>
    
    </>
   
  );
}
