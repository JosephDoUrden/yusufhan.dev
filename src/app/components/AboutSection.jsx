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
        <li>Node.js</li>
        <li>Flutter</li>
        <li>C++</li>
        <li>SQL</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>PHP</li>
        <li>Project Management</li>
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/aboutme.jpeg"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base text-justify lg:text-lg">
            Yusufhan Saçak, a distinguished Full Stack Developer from Istanbul,
            Turkey, stands out with a strong academic and professional
            background. He's the founder and former president of Bi'Siber (BİLGİ
            Cyber Security Club), showcasing his leadership skills. Graduating
            with honors in Cyber Security from Istanbul Bilgi University and
            later transitioning to Bahçeşehir University for Computer
            Engineering, Yusufhan is proficient in a wide array of technologies,
            including C++, Java, Python, Flutter, HTML, CSS, JavaScript, NodeJS,
            PHP, and MySQL. He adeptly balances his academic pursuits with
            practical web and mobile development. Furthermore, he actively
            engages in student clubs and contributes to socially responsible
            initiatives. His commitment to innovation is exemplified through his
            engaging UI/UX projects.
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
