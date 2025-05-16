"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Audi Mobile App",
    description:
      "Developed at Doğuş Teknoloji, this Flutter-based mobile application offers Audi owners comprehensive vehicle management, service booking, and exclusive content. Features include digital service history, dealer locator, and personalized vehicle information.",
    image: "/images/projects/benim-audim.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://apps.apple.com/tr/app/benimaudim/id1222952755?l=tr",
    previewUrl:
      "https://play.google.com/store/apps/details?id=tr.com.dteknoloji.benimaudim&hl=tr&pli=1",
  },
  {
    id: 2,
    title: "Seat Mobile App",
    description:
      "Created during my time at Doğuş Teknoloji, this Flutter application provides Seat vehicle owners with a seamless mobile experience. Features include maintenance scheduling, vehicle status monitoring, and direct communication channels with authorized service centers.",
    image: "/images/projects/seat-my-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "#",
  },
  {
    id: 3,
    title: "Cupra Mobile App",
    description:
      "Developed for Doğuş Teknoloji, this premium Flutter application serves Cupra vehicle owners with an elegant interface and advanced features. The app offers performance tracking, personalized vehicle insights, service reminders, and exclusive Cupra content.",
    image: "/images/projects/cupra.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "#",
  },
  {
    id: 4,
    title: "Retro Zero Games",
    description:
      "retrozero.games is a portfolio website that showcases my clients projects and articles. It is built with Next.js, Tailwind CSS, and Framer Motion.",
    image: "/images/projects/retrozero-games.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JosephDoUrden/retrozero.games",
    previewUrl: "https://retrozero.games/",
  },
  {
    id: 5,
    title: "RFID Based Access Control System",
    description:
      "This project is a Capstone Project for the Computer Engineering Department at Bahçeşehir University. It is an RFID-based access control system that allows users to access a building using RFID cards.",
    image: "/images/projects/RFID-Based-Access-Control-System.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/JosephDoUrden/RFID-Based-Access-Control-System",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Book Store (MERN Stack)",
    description:
      "This is a simple Book Store Project built using the MERN (MongoDB, Express.js, React, and Node.js) stack. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations on both the backend and frontend, including routing and CORS policy configuration.",
    image: "/images/projects/book-store.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JosephDoUrden/Book-Store-Project",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Flutter Travel App Landing Page UI",
    description:
      "This venture presents a contemporary and adaptable user interface (UI) for a travel app's landing page, developed using Flutter.",
    image: "/images/projects/travel-app-ui.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/JosephDoUrden/Flutter-Travel-App-UI",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Flutter Ninebot Gokart PRO Mobile App UI",
    description: "Ninebot Gokart PRO Mobile App UI Design Concept!",
    image: "/images/projects/gokart-pro-ui.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/JosephDoUrden/Ninebot_GoKart_PRO",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Flutter Furniture App UI",
    description:
      "Welcome to the Furniture App UI! This Flutter-based mobile application provides users with a sleek and intuitive interface to explore and shop for various furniture items.",
    image: "/images/projects/furniture-app-ui.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/JosephDoUrden/Furniture-App-UI",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Flutter Responsive Modern Login UI",
    description:
      "This project showcases a modern, responsive login user interface (UI) built using Flutter.",
    image: "/images/projects/modern-login-ui.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/JosephDoUrden/ResponsiveModernLoginUI",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "QuizMaster Pro",
    description:
      "QuizMaster Pro is a modern, responsive quiz application built with vanilla JavaScript.",
    image: "/images/projects/quizmaster.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JosephDoUrden/quiz-game",
    previewUrl: "https://quizmasterpro-js.netlify.app/",
  },
  {
    id: 12,
    title: "Todo App with Flutter and Riverpod",
    description:
      "A Flutter Todo app leveraging Riverpod for efficient state management. Organize tasks effortlessly with CRUD operations. Stay productive on the go!",
    image: "/images/projects/todo-riverpod.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/JosephDoUrden/flutter-todo-app-with-riverpod",
    previewUrl: "#",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
