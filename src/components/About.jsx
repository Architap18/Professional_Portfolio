import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 py-20 flex justify-between flex-col lg:flex-row gap-10 lg:gap-20 bg-black text-white"
      id="about"
    >
      {/* Illustration */}
      <motion.div
        className="lg:w-1/2 flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
        }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/about-me.svg"
          alt="About Me Illustration"
          className="w-full max-w-lg"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="lg:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
          delay: 0.2,
        }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-3xl">
          About <span className="font-extrabold">Me</span>
        </h2>

        <div className="w-16 h-[3px] bg-gradient-to-r from-purple-500 to-cyan-400 mt-4" />

        <p className="text-gray-400 text-sm/6 lg:text-base mt-8">
          I'm a passionate developer who enjoys turning ideas into
          functional and engaging web experiences. I’m currently
          building my skills in full-stack development and exploring
          how different technologies come together to create real-world
          applications.
        </p>

        <p className="text-gray-400 text-sm/6 lg:text-base mt-4">
          I’ve been working with technologies like{" "}
          <span className="text-white font-semibold">
            React, JavaScript, Next.js, Node.js, HTML, CSS, and Tailwind CSS
          </span>
          . I’m also currently learning more about backend development
          with Node.js and building projects to strengthen my understanding
          of APIs, databases, authentication, and full-stack architecture.
        </p>

        <p className="text-gray-400 text-sm/6 lg:text-base mt-4">
          I enjoy learning by building. From hackathon projects to
          personal experiments and portfolio projects, I’m always looking
          for opportunities to solve problems, try new technologies,
          and turn ideas into something people can actually use.
        </p>

        <p className="text-gray-400 text-sm/6 lg:text-base mt-4">
          My goal is to keep growing as a developer, contribute to
          meaningful projects, and become someone who can confidently
          take an idea from{" "}
          <span className="text-white font-semibold">
            concept to a complete working product.
          </span>
        </p>
      </motion.div>
    </div>
  );
}