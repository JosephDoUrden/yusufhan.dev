import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      className={`rounded-full px-6 py-2 text-base md:text-lg cursor-pointer transition-all duration-300 relative
        ${
          isSelected
            ? "text-white bg-gradient-to-r from-purple-500 to-pink-500 font-medium"
            : "text-[#ADB7BE] bg-[#232323] hover:text-white"
        }`}
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <span className="relative z-10">{name}</span>

      {/* Add badge for count if needed later */}
      {name === "All" && (
        <motion.span
          className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          12
        </motion.span>
      )}
    </motion.button>
  );
};

export default ProjectTag;
