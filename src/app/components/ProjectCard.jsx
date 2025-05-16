import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tech = [],
}) => {
  return (
    <motion.div
      className="bg-[#181818] rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -15px rgba(124, 58, 237, 0.5)",
      }}
    >
      <div className="relative group h-40 xs:h-48 md:h-64 overflow-hidden">
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 group-hover:opacity-80 sm:group-hover:opacity-80 transition-all duration-300 z-10"></div>

        {/* Project image */}
        <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-110">
          <Image
            src={imgUrl}
            alt={title}
            className="object-cover object-center"
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-3 xs:gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {gitUrl && gitUrl !== "/" && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white p-2 xs:p-3 rounded-full transition-all duration-300"
              aria-label={`View ${title} code`}
            >
              <CodeBracketIcon className="h-5 w-5 xs:h-6 xs:w-6" />
            </Link>
          )}

          {previewUrl && previewUrl !== "#" && previewUrl !== "/" && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white p-2 xs:p-3 rounded-full transition-all duration-300"
              aria-label={`View ${title} live demo`}
            >
              <EyeIcon className="h-5 w-5 xs:h-6 xs:w-6" />
            </Link>
          )}
        </div>
      </div>

      <div className="p-4 xs:p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-1 xs:mb-2">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white">
              {title}
            </h3>
          </div>
          <p className="text-[#ADB7BE] text-xs xs:text-sm mb-3 xs:mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Technologies used */}
        {tech && tech.length > 0 && (
          <div className="mt-auto pt-3 xs:pt-4 border-t border-[#2A2A2A]">
            <div className="flex flex-wrap gap-1.5 xs:gap-2">
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="text-[10px] xs:text-xs bg-[#232323] text-purple-400 px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
