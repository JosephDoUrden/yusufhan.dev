import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-[#121212]/95 backdrop-blur-sm shadow-lg fixed w-full z-50"
    >
      <ul className="flex flex-col py-6 xs:py-8 items-center space-y-6 xs:space-y-8">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <NavLink href={link.href} title={link.title} />
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: links.length * 0.1 }}
          className="mt-2 xs:mt-4"
        >
          <a
            href="https://drive.google.com/file/d/1WM_PBz5d9UkW-djY0ANQuSbLwz3j-KiC/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-1.5 xs:px-6 xs:py-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 text-white hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
          >
            Resume
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default MenuOverlay;
