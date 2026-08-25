import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  const sections = ["about", "skills", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black
        text-white
        px-5
        lg:px-28
        p-5
        transition-all
        duration-300
        ${
          hasShadow
            ? "shadow-[0_4px_30px_rgba(255,255,255,0.08)]"
            : "shadow-none"
        }
      `}
    >
      <div className="container mx-auto flex justify-between items-center">

        {/* LOGO */}
        <motion.img
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("home")}
            className="h-12 lg:h-16 w-auto cursor-pointer brightness-0 invert"
            src="/assets/logo_port.png"
            alt="Archita Pal Logo"
          />

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden lg:flex items-center gap-x-8 font-semibold">
          {sections.map((section) => (
            <motion.li
              key={section}
              className="group relative cursor-pointer"
              whileHover={{ y: -2 }}
            >
              <button
                onClick={() => scrollToSection(section)}
                className="capitalize text-gray-300 hover:text-white transition-colors duration-300"
              >
                {section}
              </button>

              <motion.span
                className="
                  absolute
                  -bottom-2
                  left-0
                  w-0
                  group-hover:w-full
                  h-[2px]
                  bg-white
                  transition-all
                  duration-300
                "
              />
            </motion.li>
          ))}
        </ul>

        {/* DESKTOP RESUME BUTTON */}
        <motion.a
          href="/resume.pdf"
          download
          className="hidden lg:inline-block relative group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Shadow */}
          <span
            className="
              absolute
              inset-0
              translate-x-1
              translate-y-1
              border-2
              border-white
              bg-white
              transition-all
              duration-200
              group-hover:translate-x-0
              group-hover:translate-y-0
            "
          />

          {/* Button */}
          <span
            className="
              relative
              flex
              items-center
              gap-3
              px-5
              py-2
              bg-black
              text-white
              border-2
              border-white
              transition-all
              duration-300
              group-hover:bg-white
              group-hover:text-black
            "
          >
            Resume
            <TbDownload size={17} />
          </span>
        </motion.a>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          className="lg:hidden text-3xl text-white z-[60]"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="
              lg:hidden
              fixed
              top-0
              right-0
              h-screen
              w-full
              bg-black
              text-white
              z-50
            "
          >
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-5 right-5 text-3xl"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>

            {/* MOBILE LINKS */}
            <ul className="flex flex-col items-start ml-16 mt-32 gap-y-8 font-semibold text-xl">
              {sections.map((section, index) => (
                <motion.li
                  key={section}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <button
                    onClick={() => scrollToSection(section)}
                    className="
                      capitalize
                      text-gray-300
                      hover:text-white
                      transition-colors
                    "
                  >
                    {section}
                  </button>
                </motion.li>
              ))}

              {/* MOBILE RESUME */}
              <motion.li
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="/resume.pdf"
                  download
                  className="
                    flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    border-2
                    border-white
                    bg-white
                    text-black
                  "
                >
                  Resume
                  <TbDownload size={18} />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}