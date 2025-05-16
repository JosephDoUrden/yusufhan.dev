"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, AnimatePresence } from "framer-motion";

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
    tech: ["Flutter", "Dart", "Firebase", "RESTful API"],
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
    tech: ["Flutter", "Dart", "Firebase", "State Management"],
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
    tech: ["Flutter", "Dart", "Firebase", "Bloc Pattern"],
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
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
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
    tech: ["Arduino", "RFID", "C++", "Mobile App"],
  },
  {
    id: 6,
    title: "Book Store (MERN Stack)",
    description:
      "This is a Book Store Project built using the MERN stack. This project demonstrates CRUD operations on both the backend and frontend, including routing and CORS policy configuration.",
    image: "/images/projects/book-store.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JosephDoUrden/Book-Store-Project",
    previewUrl: "/",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    id: 7,
    title: "Flutter Travel App UI",
    description:
      "This venture presents a contemporary and adaptable user interface (UI) for a travel app's landing page, developed using Flutter.",
    image: "/images/projects/travel-app-ui.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/JosephDoUrden/Flutter-Travel-App-UI",
    previewUrl: "/",
    tech: ["Flutter", "Dart", "UI/UX Design"],
  },
  {
    id: 8,
    title: "Flutter Ninebot Gokart PRO UI",
    description:
      "Ninebot Gokart PRO Mobile App UI Design Concept with clean modern design principles!",
    image: "/images/projects/gokart-pro-ui.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/JosephDoUrden/Ninebot_GoKart_PRO",
    previewUrl: "/",
    tech: ["Flutter", "Dart", "UI/UX Design"],
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
    tech: ["Flutter", "Dart", "UI/UX Design", "Animation"],
  },
  {
    id: 10,
    title: "Flutter Responsive Login UI",
    description:
      "This project showcases a modern, responsive login user interface (UI) built using Flutter with adaptive design for various screen sizes.",
    image: "/images/projects/modern-login-ui.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/JosephDoUrden/ResponsiveModernLoginUI",
    previewUrl: "/",
    tech: ["Flutter", "Dart", "Responsive UI"],
  },
  {
    id: 11,
    title: "QuizMaster Pro",
    description:
      "QuizMaster Pro is a modern, responsive quiz application built with vanilla JavaScript, featuring multiple question types and score tracking.",
    image: "/images/projects/quizmaster.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JosephDoUrden/quiz-game",
    previewUrl: "https://quizmasterpro-js.netlify.app/",
    tech: ["JavaScript", "HTML", "CSS", "Responsive Design"],
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
    tech: ["Flutter", "Dart", "Riverpod", "State Management"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6); // Show 6 projects initially
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    window.scrollTo({ top: ref.current.offsetTop - 100, behavior: "smooth" });
    setTag(newTag);
    setVisibleProjects(6); // Reset to show only 6 when changing tags
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, filteredProjects.length));
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="projects" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center text-4xl font-bold mb-2">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-[#ADB7BE] text-center max-w-lg mx-auto mb-10">
          Explore my portfolio of web and mobile applications that showcase my
          technical skills and creative approach to problem-solving.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 py-6">
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
      </motion.div>

      <div ref={ref}>
        <AnimatePresence mode="wait">
          <motion.div
            key={tag}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-10">
              {filteredProjects
                .slice(0, visibleProjects)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imgUrl={project.image}
                      gitUrl={project.gitUrl}
                      previewUrl={project.previewUrl}
                      tech={project.tech}
                    />
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {filteredProjects.length > visibleProjects && (
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={loadMore}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500 transition-all duration-300 flex items-center"
          >
            Load More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
