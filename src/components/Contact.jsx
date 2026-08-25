import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

 const socialLinks = [
  {
    icon: BiLogoGmail,
    href: "mailto:architapal1806@gmail.com",
    label: "Email",
  },
  {
    icon: IoLogoLinkedin,
    href: "https://www.linkedin.com/in/archita-pal-a5a23a2b7/",
    label: "LinkedIn",
  },
  {
    icon: BsGithub,
    href: "https://github.com/architap18",
    label: "GitHub",
  },
];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:my-16 lg:px-28 my-8 px-5"
      id="contact"
    >
      {/* HEADING */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl lg:text-4xl text-center"
      >
        Contact <span className="font-extrabold">Me</span>
      </motion.h2>

      {/* MAIN CONTENT */}
      <div className="flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row">

        {/* CONTACT FORM */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-[40%]"
        >
          <form className="w-full space-y-3 lg:space-y-5">

            <input
              className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
              type="text"
              placeholder="Your name"
              required
            />

            <input
              className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
              type="email"
              placeholder="Email"
              required
            />

            <input
              className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
              type="text"
              placeholder="Your website (If exists)"
            />

            <textarea
              className="resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full"
              placeholder="How can I help?*"
              required
            />

            {/* BUTTON + SOCIAL LINKS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row"
            >

              {/* GET IN TOUCH */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="
                  bg-black
                  justify-center
                  w-fit
                  lg:w-auto
                  lg:flex-1
                  hover:shadow-lg
                  text-white
                  px-3
                  py-2
                  rounded
                  flex
                  items-center
                  gap-x-3
                  font-medium
                "
              >
                Get In Touch
              </motion.button>

              {/* SOCIAL LINKS */}
              <div className="flex items-center gap-x-2 lg:gap-x-5">

                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="
                      bg-white
                      p-2
                      lg:p-3
                      rounded
                      border-2
                      border-black
                    "
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#000",
                      color: "#fff",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}

              </div>
            </motion.div>
          </form>
        </motion.div>

        {/* CONTACT INFORMATION */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >

          {/* TITLE */}
          <div className="font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3">

            <h2>
              Let's{" "}
              <span
                className="text-white"
                style={{ WebkitTextStroke: "1px black" }}
              >
                talk
              </span>{" "}
              for
            </h2>

            <h2>Something special</h2>

          </div>

          {/* DESCRIPTION */}
          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>

          {/* CONTACT DETAILS */}
          <div className="font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4">

            {/* EMAIL */}
            <motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 group"
              href="mailto:architapal1806@gmail.com"
            >
              <span className="border-2 border-transparent group-hover:border-black rounded-full p-1 transition-all">
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>

              architapal1806@gmail.com
            </motion.a>

            {/* PHONE */}
            <motion.a
              whileHover={{ x: 5 }}
              href="tel:YOUR_PHONE_NUMBER"
              className="flex items-center gap-2 group"
            >
              <span className="border-2 border-transparent group-hover:border-black rounded-full p-[5px] transition-all">
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>

              YOUR_PHONE_NUMBER
            </motion.a>

          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}