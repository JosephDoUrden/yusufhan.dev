/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 + 0.3, duration: 0.6 },
    }));
  }, [controls]);

  const socialLinks = [
    {
      icon: "/github-icon.svg",
      url: "https://github.com/JosephDoUrden",
      name: "GitHub",
    },
    {
      icon: "/linkedin-icon.svg",
      url: "https://www.linkedin.com/in/yusufhansacak/",
      name: "LinkedIn",
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full">
        <div className="absolute top-20 xs:top-40 left-4 xs:left-10 w-36 xs:w-48 sm:w-72 h-36 xs:h-48 sm:h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 xs:bottom-40 right-4 xs:right-10 w-36 xs:w-48 sm:w-72 h-36 xs:h-48 sm:h-72 bg-pink-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 xs:gap-8 items-center px-4 xs:px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          custom={0}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={1}
          >
            <span className="text-xs xs:text-sm sm:text-base lg:text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-medium uppercase tracking-wider">
              Software Engineer & Mobile Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={2}
            className="text-white mb-4 xs:mb-6 mt-2 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight"
          >
            Hello, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Yusufhan
            </span>
            <br className="block" />
            <TypeAnimation
              sequence={[
                "Computer Engineer",
                1200,
                "Web Developer",
                1200,
                "Mobile Developer",
                1200,
                "UI/UX Designer",
                1200,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={3}
            className="text-[#ADB7BE] text-sm xs:text-base sm:text-lg mb-6 xs:mb-8 lg:text-xl max-w-2xl"
          >
            As a skilled Software Engineer with a background in cybersecurity, I
            transform ideas into innovative web and mobile applications.
            Specializing in Flutter development, I build seamless digital
            experiences that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={4}
            className="flex flex-col sm:flex-row gap-3 xs:gap-4"
          >
            <Link
              href="#contact"
              className="btn-primary flex items-center justify-center group text-sm xs:text-base"
            >
              <span>Let's Talk</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 xs:w-5 xs:h-5 ml-1 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1WM_PBz5d9UkW-djY0ANQuSbLwz3j-KiC/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span className="btn-secondary-inner flex items-center justify-center text-sm xs:text-base">
                <span>Download CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 xs:w-5 xs:h-5 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={5}
            className="flex items-center space-x-3 xs:space-x-4 mt-6 xs:mt-8"
          >
            <div className="w-8 xs:w-12 h-0.5 bg-gray-700"></div>
            <div className="flex space-x-3 xs:space-x-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#181818] p-2 xs:p-3 rounded-full hover:bg-gray-800 transition-all duration-300"
                  aria-label={link.name}
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={20}
                    height={20}
                    className="w-5 h-5 xs:w-6 xs:h-6"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="col-span-5 place-self-center mt-6 xs:mt-8 lg:mt-0"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 group-hover:opacity-80 blur-xl group-hover:blur-2xl transition-all duration-1000"></div>
            <div className="rounded-full bg-[#181818] w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src={"/images/memoji1.png"}
                alt="Yusufhan Sacak profile"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
                priority
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "80%",
                  maxHeight: "80%",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
