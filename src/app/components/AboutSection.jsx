/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
        <div>
          <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-1.5 xs:mb-2 text-purple-400">
            Technical Skills
          </h3>
          <ul className="list-disc pl-4 xs:pl-5 space-y-1 xs:space-y-2 text-[#ADB7BE] text-xs xs:text-sm sm:text-base">
            <li>Flutter & Dart</li>
            <li>JavaScript & TypeScript</li>
            <li>React & Next.js</li>
            <li>C++, Java, Python</li>
            <li>Node.js & Express</li>
            <li>PHP & MySQL</li>
            <li>Swift</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-1.5 xs:mb-2 text-pink-400">
            Soft Skills
          </h3>
          <ul className="list-disc pl-4 xs:pl-5 space-y-1 xs:space-y-2 text-[#ADB7BE] text-xs xs:text-sm sm:text-base">
            <li>Project Management</li>
            <li>Public Relations</li>
            <li>Leadership</li>
            <li>Effective Communication</li>
            <li>Problem Solving</li>
            <li>UI/UX Design</li>
            <li>Team Collaboration</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-3 xs:space-y-4">
        <li className="border-l-2 border-purple-400 pl-3 xs:pl-4 py-1.5 xs:py-2">
          <h3 className="text-base xs:text-lg sm:text-xl font-semibold">
            Computer Engineering
          </h3>
          <p className="text-pink-400 text-sm xs:text-base">
            Bahçeşehir University
          </p>
          <p className="text-xs xs:text-sm text-[#ADB7BE]">2021 - 2024</p>
          <p className="mt-0.5 xs:mt-1 text-xs xs:text-sm text-[#ADB7BE]">
            Focus on software engineering and mobile application development
          </p>
        </li>
        <li className="border-l-2 border-purple-400 pl-3 xs:pl-4 py-1.5 xs:py-2">
          <h3 className="text-base xs:text-lg sm:text-xl font-semibold">
            Cyber Security
          </h3>
          <p className="text-pink-400 text-sm xs:text-base">
            Istanbul Bilgi University
          </p>
          <p className="text-xs xs:text-sm text-[#ADB7BE]">2019 - 2021</p>
          <p className="mt-0.5 xs:mt-1 text-xs xs:text-sm text-[#ADB7BE]">
            Graduated with top honors
          </p>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="space-y-3 xs:space-y-4">
        <li className="border-l-2 border-purple-400 pl-3 xs:pl-4 py-1.5 xs:py-2">
          <div className="flex justify-between">
            <h3 className="text-base xs:text-lg sm:text-xl font-semibold">
              Mobile Application Developer
            </h3>
          </div>
          <p className="text-pink-400 text-sm xs:text-base">Doğuş Technology</p>
          <p className="text-xs xs:text-sm text-[#ADB7BE]">
            Jul 2024 - May 2025
          </p>
          <p className="mt-0.5 xs:mt-1 text-xs xs:text-sm text-[#ADB7BE]">
            Developing Flutter applications for automotive clients including
            Audi, Seat, and Cupra
          </p>
        </li>
        <li className="border-l-2 border-purple-400 pl-3 xs:pl-4 py-1.5 xs:py-2">
          <h3 className="text-base xs:text-lg sm:text-xl font-semibold">
            Software Development Intern
          </h3>
          <p className="text-pink-400 text-sm xs:text-base">DEV Secure</p>
          <p className="text-xs xs:text-sm text-[#ADB7BE]">
            May 2023 - Jul 2023
          </p>
        </li>
        <li className="border-l-2 border-purple-400 pl-3 xs:pl-4 py-1.5 xs:py-2">
          <h3 className="text-base xs:text-lg sm:text-xl font-semibold">
            Trainee
          </h3>
          <p className="text-pink-400 text-sm xs:text-base">Yetkin Gencler</p>
          <p className="text-xs xs:text-sm text-[#ADB7BE]">
            Jan 2022 - May 2022
          </p>
        </li>
        <li className="border-l-2 border-purple-400 pl-3 xs:pl-4 py-1.5 xs:py-2">
          <h3 className="text-base xs:text-lg sm:text-xl font-semibold">
            Assistant Specialist
          </h3>
          <p className="text-pink-400 text-sm xs:text-base">
            Istanbul Bilgi University
          </p>
          <p className="text-xs xs:text-sm text-[#ADB7BE]">
            Jul 2021 - Aug 2021
          </p>
        </li>
        <li className="border-l-2 border-purple-400 pl-3 xs:pl-4 py-1.5 xs:py-2">
          <h3 className="text-base xs:text-lg sm:text-xl font-semibold">
            HMI Software Team Intern
          </h3>
          <p className="text-pink-400 text-sm xs:text-base">
            Baykar Technologies
          </p>
          <p className="text-xs xs:text-sm text-[#ADB7BE]">
            Jul 2020 - Aug 2020
          </p>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:grid md:grid-cols-12 gap-6 xs:gap-8 items-center py-6 xs:py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 mb-6 xs:mb-8 md:mb-0"
        >
          <div className="relative">
            <div className="absolute -inset-3 xs:-inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                alt="Yusufhan Sacak"
                src={"/images/aboutme.jpeg"}
                width={500}
                height={500}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-7 text-left flex flex-col"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-3 xs:mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-sm xs:text-base md:text-lg text-[#ADB7BE] mb-4 xs:mb-6">
            Yusufhan Sacak, a Software Engineer with expertise in Flutter
            development, brings a unique blend of technical skill and creative
            vision to web and mobile applications. With a solid foundation in
            cybersecurity from Istanbul Bilgi University and computer
            engineering from Bahçeşehir University, I approach every project
            with both security and user experience in mind.
          </p>
          <p className="text-sm xs:text-base md:text-lg text-[#ADB7BE] mb-4 xs:mb-6">
            As a natural leader who headed the Bi'Siber Cyber Security Club, I'm
            known for my collaborative approach and ability to communicate
            complex technical concepts clearly. My passion for elegant UI/UX
            design informs every application I build, ensuring they're not just
            functional but delightful to use.
          </p>

          <div className="flex flex-row flex-wrap gap-1.5 xs:gap-2 md:gap-4 justify-start mt-3 xs:mt-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>

          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 xs:mt-8 bg-[#1E1E1E] p-4 xs:p-5 sm:p-6 rounded-xl border border-[#33353F]"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
