"use client";

import srConfig from "@/utils/srConfig";
import { usePrefersReducedMotion } from "@/hooks";
import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";

interface MediaData {
  name: string;
  icon: string;
  url: string;
}

const socialMedia: MediaData[] = [
  {
    name: "github",
    icon: "/github.svg",
    url: "https://github.com/JusticeOpara",
  },
  {
    name: "Instagram",
    icon: "/instagram.svg",
    url: "https://www.instagram.com/",
  },
  {
    name: "X",
    icon: "/twitter.svg",
    url: "https://x.com/JustAtom4",
  },
  {
    name: "Linkedin",
    icon: "linkedin.svg",
    url: "https://www.linkedin.com/in/justice-opara-5b0474234/",
  },
  {
    name: "Phone",
    icon: "/phone.svg",
    url: "tel:07043434530",
  },
];
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  })

  useEffect(() => {
    const isClient = typeof window !== "undefined";

    if (isClient && !prefersReducedMotion) {
      import("@/utils/sr").then(({ default: sr }) => {
        sr.reveal(revealContainer.current!, srConfig());
      });
    }
  }, [prefersReducedMotion]);

 const handleChange = (e:React.ChangeEvent <HTMLInputElement | HTMLTextAreaElement> )=>{
 const { name,  value} = e.target
 setFormData((prevData) => ({...prevData, [name]: value}) )
 }




  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (form.current) {
      emailjs
        .sendForm(
          "service_zsd4y7d",
          "template_msy21jk",
          form.current,
          "b7COENOh-z6hWMRYl"
        )
        .then((result) => {
          console.log("Mail sent, You will receive a feedback shortly", result);
          toast.success(
            "Email sent successfully, You will receive a feedback shortly!"
          );
          setIsLoading(false);
          setFormData({ user_name: "", user_email: "", message: "" }); // Clear form data
        })
        .catch((error) => {
          console.log(error.text);
          toast.error("Failed to send email.");
          setIsLoading(false);
        });

      //  e.target.reset();
      (e.target as HTMLFormElement).reset();
    } else {
      setIsLoading(false);
      toast.error("Form reference is null.");
    }
  };

  return (
    <section
      className="w-full h-full md:pt-[100px] pt-12"
      ref={revealContainer}
      id="contact"
    >
      <div className="flex gap-2">
        <h2 className="mb-5  flex-shrink-0">
          {" "}
          <span className="text-2xl font-dosis">04.</span>
          <span className="text-3xl font-medium font"> Contact </span>
        </h2>
        <div className="border-t lg:flex-grow-0 w-72 border-black my-4"></div>
      </div>

      <div className="flex w-full lg:gap-36 gap-24 lg:flex-row flex-col">
        <div className="font-light text-base font-poppins w-full">
          <p className="mb-1">
            Let&apos;s have a conversation about how I can turn your visions
            into captivating online realities. Feel free to reach out to me via{" "}
            <span className="text-[#5b38e3]">
              {" "}
              <a href="mailto:justiceopara33@gmail.com">
                {" "}
                E-mail(justiceopara33@gmail.com)
              </a>{" "}
            </span>{" "}
            to start a conversation. Whether it&apos;s building a stunning
            website, optimizing user experiences, or anything in between,
            I&apos;m here to help. Looking forward to hearing from you and
            exploring the exciting possibilities together!
          </p>

          <div className="lg:hidden flex">
            <ul className="flex gap-6 items-center list-none">
              {socialMedia.map(({ url, icon, name }, i) => (
                <li key={i}>
                  <Link
                    href={url}
                    aria-label={icon}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 hover:translate-y-[-3px] focus:translate-y-[-3px] transition-transform hover:bg-[#]"
                  >
                    <Image
                      src={icon}
                      width={24}
                      height={24}
                      className="hover:translate-y-[-5px] focus:translate-y-[-5px] transition-transform"
                      alt={name}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full font-dosis"
        >
          <h1 className="font-medium text-2xl text-center font-poppins">
            Write me a Message
          </h1>

          <div className="w-full mb-4">
            <h1 className="font-medium text-lg pb-2">Name</h1>
            <input
              className=" w-full font-poppins focus:outline-1 focus:border-0 focus:outline-[#5b38e3] py-3 border px-2 text-[#202020] rounded border-black"
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange= {handleChange}
              required
            />
          </div>

          <div className="w-full mb-4">
            <h1 className="font-medium text-lg pb-2">Email</h1>
            <input
              className="py-3 px-2 w-full border text-lg border-black  rounded focus:outline-1 focus:border-0 focus:outline-[#5b38e3] text-[#202020]"
              type="email"
              required
              value={formData.user_email}
              onChange= {handleChange}
              name="user_email"
            />
          </div>

          <div className="w-full mb-4">
            <h1 className="font-medium text-lg pb-2">Message</h1>
            <textarea
              name="message"
              value={formData.message}
              onChange= {handleChange}
              className="py-3 px-2 w-full text-lg rounded border border-black h-[120px] focus:outline-1 focus:border-0 focus:outline-[#5b38e3] text-[#202020]"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <button
              className=" rounded  bg-[#5b38e3] px-4 py-2 md:w-36 w-full items-center"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  Sending..... <span className="ml-2 text-lg"> </span>
                </>
              ) : (
                <>
                  Send <span className="ml-2 text-lg"> </span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="border-t flex-grow-0 border-black mt-5"></div>
     

      <div className="font-dosis font-medium flex justify-between items-center py-4">
        <div>
          <Link href="/">
            <h1 className="font-bold text-2xl text-[#5b38e3]">JO</h1>
          </Link>
        </div>

        <div className="font-poppins text-sm font-light">
          @{new Date().getFullYear()}. All right reserved
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
