import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm sm:text-base ${
        active
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
          : "bg-[#232323] text-[#ADB7BE] hover:text-white"
      } transition-all duration-300 relative overflow-hidden group`}
    >
      <span className="relative z-10">{children}</span>
      {!active && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          whileHover={{ opacity: 0.1 }}
        />
      )}
    </button>
  );
};

export default TabButton;
