"use client";

import srConfig from "@/utils/srConfig";
import { usePrefersReducedMotion } from "@/hooks";
import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // if (typeof window !== "undefined" && !prefersReducedMotion) {
    //   sr.reveal(revealContainer.current!, srConfig());
    // }
    const isClient = typeof window !== "undefined";

    if (isClient && !prefersReducedMotion) {
      import("@/utils/sr").then(({ default: sr }) => {
        sr.reveal(revealContainer.current!, srConfig());
      });
    }
  }, [prefersReducedMotion]);

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (form.current) {
      emailjs
        .sendForm(
          "service_xrct3ne",
          "template_ynmr9w9",
          form.current,
          "okMwkF6Q2ELNMtan8"
        )
        .then((result) => {
          console.log("Mail sent, You will receive a feedback shortly", result);
          toast.success(
            "Email sent successfully, You will receive a feedback shortly!"
          );
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error.text);
          toast.error("Failed to send email.");
          setIsLoading(false);
        });

      // e.target.reset();
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
      <div className="flex gap-2 ">
        <h2 className="mb-5  flex-shrink-0">
          {" "}
          <span className="text-2xl font-dosis">04.</span>
          <span className="text-3xl font-medium font"> Contact </span>
        </h2>
        <div className="border-t lg:flex-grow-0 w-72 border-black my-4"></div>
      </div>

      <div className="flex w-full gap-24 md:flex-row flex-col">
        <div className="font-light lg:text-lg text-base font-poppins w-full">
          <p className="">
            Let&apos;s have a conversation about how I can turn your visions
            into captivating online realities. Feel free to reach out to me via{" "}
            <span className="">
              {" "}
              <a href="mailto:justiceopara33@gmail.com"> E-mail</a>{" "}
            </span>{" "}
            to start a conversation. Whether it&apos;s building a stunning
            website, optimizing user experiences, or anything in between,
            I&apos;m here to help. Looking forward to hearing from you and
            exploring the exciting possibilities together!
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full  bg-slate-400 font-poppins "
        >
          <input
            className="mb-4 outline-none py-3 border px-2 text-[#202020] placeholder:text-[#202020] rounded border-black outline-0"
            type="text"
            placeholder="FullName"
            name="user_name"
            required
          />
          <input
            className="mb-4 py-3 px-2 border border-black rounded outline-0 text-[#202020] placeholder:text-[#202020]"
            type="email"
            placeholder="Email"
            required
            name="user_email"
          />
          <input
            className="mb-4 py-3 px-2 border-black border rounded outline-0 text-[#202020] placeholder:text-[#202020]"
            type="text"
            placeholder="Subject"
            required
            name="subject"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="mb-4  py-3 px-2 rounded border border-black h-[120px] outline-0 text-[#202020] placeholder:text-[#202020]"
            required
          ></textarea>
          
          <button
            className="bg-transparent hover:border-r-4 hover:border-b-4 rounded border-2 border-[#5b38e3] px-4 py-2 md:w-36 items-center
            hover:translate-x-[-5px] hover:translate-y-[-4px] focus-visible:translate-x-[-5px] focus-visible:translate-y-[-4px]"
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
        </form>
      </div>
      <hr className="my-3" />
      <div className="border-t flex-grow-0 border-black my-3"></div>
      <ToastContainer />

      <div className="font-dosis font-medium flex justify-center">
        Designed and built by Justice Opara
      </div>
    </section>
  );
};
export default Contact;

// const Contact = () => {
//   const revealContainer = useRef(null);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }

//     sr.reveal(revealContainer.current, srConfig());
//   }, []);

//   return (
//     <StyledContactSection id="contact" ref={revealContainer}>
//       <h2 className="numbered-heading overline">What’s Next?</h2>

//       <h2 className="font-poppins">Get In Touch</h2>

//       <p>
//       I can help you design, improve or build the product experience for your new or existing products. Feel free to get in touch with me
//       </p>

//       <a className="email-link" href={`mailto:justiceopara33@gmail.com`}>
//         Say Hello
//       </a>
//     </StyledContactSection>
//   );
// };

// export default Contact;
