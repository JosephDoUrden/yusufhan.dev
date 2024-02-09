/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Project Management</li>
        <li>Public Relations</li>
        <li>Teamwork</li>
        <li>Time Management</li>
        <li>Leadership</li>
        <li>Effective Communication</li>
        <li>Critical Thinking</li>
        <li>Web & Mobile Development</li>
        <li>C++, Java, Python, NodeJS</li>
        <li>PHP & MySQL</li>
        <li>Flutter, Swift, React, NextJS</li>
        <li>Javascript | Typescript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Engineering, Bahcesehir University (2021 - 2024)</li>
        <li>Cyber Security, Istanbul Bilgi University (2019 - 2021)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>DEV Secure, Software Development Intern (May 2023 - Jul 2023)</li>
        <li>Yetkin Gencler, Trainee (Jan 2022 - May 2022)</li>
        <li>
          Istanbul Bilgi University, Assistant Specialist (Jul 2021 - Aug 2021)
        </li>
        <li>
          Baykar Technologies, Human-Machine Interaction Software Team Intern
          (Jul 2020 - Aug 2020)
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
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about me"
          src={"/images/aboutme.jpeg"}
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-justify text-start lg:text-lg">
            Yusufhan Sacak, a Full Stack Developer, brings a unique blend of
            technical prowess and creative flair to the world of web and mobile
            development. Fueled by a deep passion for cybersecurity, he
            graduated with top honours from Istanbul Bilgi University's Cyber
            Security Department. Beyond the coding screen, Yusufhan is a natural
            leader, steering the helm at the Bi'Siber Cyber Security Club and
            infusing his innovative spirit into captivating UI/UX designs. In a
            rapidly evolving tech landscape, he stands out not just for his
            skills but for the genuine enthusiasm he brings to every project.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
