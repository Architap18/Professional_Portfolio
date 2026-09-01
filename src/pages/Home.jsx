import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import ParticlePortrait from "../components/ParticlePortrait";

export default function Home() {
  return (
    <div
      className="mt-20 bg-black text-white min-h-screen"
      id="home"
    >
      {/* MAIN */}

      <div
        className="
          flex
          justify-between
          items-center
          px-5
          lg:px-28
          py-10
          lg:min-h-[calc(100vh-80px)]
          lg:flex-row
          flex-col-reverse
          gap-10
        "
      >

        {/* LEFT*/}

        <motion.div
          className="lg:w-[45%] w-full"
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >

          {/*Intro*/}

          <motion.div
            className="
              text-2xl
              lg:text-5xl
              flex
              flex-col
              mt-8
              lg:mt-0
              gap-2
              lg:gap-5
            "
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },

              visible: {
                opacity: 1,
                y: 0,

                transition: {
                  staggerChildren: 0.2,
                  ease: "easeInOut",
                },
              },
            }}
          >

            {/* NAME */}

            <motion.h2
              className="leading-tight"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              Hello,{" "}

              <TypeAnimation
                sequence={[
                  "I am Archita Pal",
                  1000,
                  "I am a passionate Developer",
                  1000,
                ]}
                speed={10}
                style={{
                  fontWeight: 600,
                }}
                repeat={Infinity}
              />
            </motion.h2>


            {/* ROLE */}

            <motion.h2
              className="text-xl lg:text-3xl"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <span className="font-extrabold">
                2nd Year CSE
              </span>{" "}

              <span
                className="font-extrabold text-black"
                style={{
                  WebkitTextStroke: "1px white",
                }}
              >
                Student
              </span>
            </motion.h2>


            {/* Location */}

            <motion.h2
              className="text-xl lg:text-3xl"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              Based In{" "}

              <span className="font-extrabold">
                India.
              </span>
            </motion.h2>

          </motion.div>


          {/* description */}

          <motion.p
            className="
              text-gray-400
              text-sm
              lg:text-base
              mt-5
              max-w-xl
              leading-relaxed
            "
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
          >
            I'm a passionate developer who enjoys turning ideas
            into clean, functional, and engaging web experiences.
            I love learning new technologies, solving problems,
            and building projects that create real impact.
            I'm constantly improving my skills and exploring
            new ways to grow as a developer.
          </motion.p>


          {/* accounts*/}

          <motion.div
            className="
              flex
              items-center
              gap-x-5
              mt-10
              lg:mt-14
            "
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
          >

            {[
              {
                icon: BiLogoGmail,
                link: "mailto:architapal1806@gmail.com",
                label: "Email",
              },

              {
                icon: IoLogoLinkedin,
                link:
                  "https://www.linkedin.com/in/archita-pal-a5a23a2b7/",
                label: "LinkedIn",
              },

              {
                icon: BsGithub,
                link: "https://github.com/architap18",
                label: "GitHub",
              },
            ].map(
              ({
                icon: Icon,
                link,
                label,
              }) => (
                <motion.a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}

                  className="
                    bg-black
                    text-white
                    p-2
                    lg:p-3
                    rounded
                    border-2
                    border-white
                  "

                  whileHover={{
                    scale: 1.1,

                    backgroundColor: "#fff",

                    color: "#000",

                    boxShadow:
                      "0px 0px 20px rgba(255,255,255,0.3)",
                  }}

                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <Icon
                    className="
                      w-4
                      h-4
                      lg:w-5
                      lg:h-5
                    "
                  />
                </motion.a>
              )
            )}

          </motion.div>

        </motion.div>


        {/*right */}

        <motion.div
          className="
            lg:w-[55%]
            w-full
            flex
            justify-center
            items-center
          "
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >

          <div
            className="
              w-full
              max-w-[600px]
              h-[500px]
              lg:h-[600px]
            "
          >

            <ParticlePortrait
              image="/assets/profile.jpg"
            />

          </div>

        </motion.div>

      </div>


      {/* skills*/}

      <motion.div
        className="
          flex
          flex-col
          items-center
          mt-20
          pb-10
        "
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >

        <h2 className="text-4xl lg:text-5xl">
          My{" "}

          <span className="font-extrabold">
            Skills
          </span>
        </h2>

        <div
          className="
            mt-5
            h-[3px]
            w-20
            bg-gradient-to-r
            from-purple-500
            to-cyan-400
          "
        />

      </motion.div>

    </div>
  );
}