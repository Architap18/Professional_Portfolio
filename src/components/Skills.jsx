import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      id: "01",
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python"],
    },
    {
      id: "02",
      title: "Frontend",
      skills: ["HTML", "CSS", "React.js", "Tailwind CSS"],
    },
    {
      id: "03",
      title: "Backend",
      skills: ["Node.js"],
    },
    {
      id: "04",
      title: "Databases",
      skills: ["MySQL", "PostgreSQL"],
    },
  ];

  return (
    <section id="skills" className="bg-white text-black py-12 lg:py-20">
      <div className="px-5 lg:px-28">

        {/* SECTION TITLE */}
        <motion.h2
          className="text-3xl lg:text-5xl text-center mb-10 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.id}
              className="
                bg-white
                border-2
                border-black
                rounded-lg
                p-6
                lg:p-7
                min-h-[220px]
                flex
                flex-col
                hover:bg-black
                hover:text-white
                transition-all
                duration-300
                cursor-pointer
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >

              {/* NUMBER + TITLE */}
              <div className="flex items-center gap-3 mb-8">

                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-8
                    h-8
                    rounded-full
                    border-2
                    border-black
                    text-xs
                    font-bold
                    group-hover:border-white
                  "
                >
                  {group.id}
                </span>

                <h3 className="text-lg lg:text-xl font-bold">
                  {group.title}
                </h3>

              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      border
                      border-black
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}