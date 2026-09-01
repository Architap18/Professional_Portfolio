import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiN8N,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

export default function Skills() {
  const skillGroups = [
    {
      id: "01",
      title: "Frontend",
      description:
        "Designing and building beautiful, responsive interfaces.",
      icon: <FaReact className="text-[#61DAFB]" />,
      skills: [
        {
          name: "React.js",
          icon: <FaReact className="text-[#61DAFB]" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-[#F7DF1E]" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-[#3178C6]" />,
        },
        {
          name: "HTML",
          icon: <FaHtml5 className="text-[#E34F26]" />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt className="text-[#1572B6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
        },
      ],
    },

    {
      id: "02",
      title: "Backend",
      description:
        "Building robust systems, APIs and server-side logic.",
      icon: <FaNodeJs className="text-[#339933]" />,
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-[#339933]" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-black" />,
        },
        {
          name: "Python",
          icon: <FaPython className="text-[#3776AB]" />,
        },
      ],
    },

    {
      id: "03",
      title: "Databases",
      description:
        "Storing, managing and retrieving data efficiently.",
      icon: <SiPostgresql className="text-[#4169E1]" />,
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql className="text-[#4479A1]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-[#4169E1]" />,
        },
      ],
    },

    {
      id: "04",
      title: "AI",
      description:
        "Exploring intelligent tools, automation and new ways to build.",
      icon: <SiN8N className="text-[#EA4B71]" />,
      skills: [
        {
          name: "n8n",
          icon: <SiN8N className="text-[#EA4B71]" />,
        },
        {
          name: "Workflow Automation",
          icon: <span className="text-[#F59E0B]">⚡</span>,
        },
        {
          name: "Vibe Coding",
          icon: <span className="text-[#10A37F]">✦</span>,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-white text-black py-16 lg:py-24 overflow-hidden"
    >
      <div className="px-5 lg:px-20">

        {/* HEADER */}
        <motion.div
          className="text-center mb-14 lg:mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
        </motion.div>

        {/* SKILL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="
                relative
                min-h-[360px]
                border-2
                border-black
                rounded-2xl
                overflow-hidden
                p-7
                lg:p-10
                group
                bg-white
              "
            >

              {/* NUMBER */}
              <div className="absolute top-7 left-7 lg:top-10 lg:left-10">
                <div
                  className="
                    w-9
                    h-9
                    rounded-full
                    border-2
                    border-black
                    flex
                    items-center
                    justify-center
                    text-xs
                    font-bold
                  "
                >
                  {group.id}
                </div>
              </div>

              {/* TITLE */}
              <div className="mt-14 lg:mt-10">

                <div className="flex items-center gap-4">

                  {/* COLOURED MAIN LOGO */}
                  <motion.div
                    className="text-3xl lg:text-4xl"
                    animate={{
                      y: [0, -6, 0],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                  >
                    {group.icon}
                  </motion.div>

                  <h3 className="text-3xl lg:text-4xl font-extrabold">
                    {group.title}
                  </h3>

                </div>

                <p className="text-gray-500 mt-4 max-w-md">
                  {group.description}
                </p>

              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3 mt-8">

                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay:
                        index * 0.12 +
                        skillIndex * 0.08,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      border
                      border-black
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-medium
                      cursor-pointer
                      hover:bg-black
                      hover:text-white
                      transition-colors
                    "
                  >

                    {/* COLOURED TECHNOLOGY LOGO */}
                    <span className="text-base">
                      {skill.icon}
                    </span>

                    {skill.name}

                  </motion.div>
                ))}

              </div>

              {/* DECORATIVE ORBIT */}
              <motion.div
                className="
                  absolute
                  -right-16
                  -bottom-16
                  w-40
                  h-40
                  border
                  border-black/10
                  rounded-full
                "
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="
                  absolute
                  -right-8
                  -bottom-8
                  w-24
                  h-24
                  border
                  border-black/10
                  rounded-full
                "
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* ARROW */}
              <motion.div
                className="
                  absolute
                  bottom-7
                  right-8
                  text-xl
                  opacity-40
                  group-hover:opacity-100
                "
                whileHover={{
                  x: 5,
                }}
              >
                →
              </motion.div>

            </motion.div>
          ))}

        </div>

        {/* FOOTER */}
        <motion.div
          className="
            flex
            items-center
            justify-center
            gap-4
            mt-14
            text-xs
            tracking-[0.3em]
            text-gray-400
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          
        </motion.div>

      </div>
    </section>
  );
}