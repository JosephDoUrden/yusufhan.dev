/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const socialLinks = [
  {
    name: "GitHub",
    icon: GithubIcon,
    url: "https://github.com/JosephDoUrden",
    color: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/yusufhansacak/",
    color: "hover:bg-blue-600",
  },
  // Add more social media links as needed
];

const EmailSection = () => {
  return (
    <section id="contact" className="py-12 xs:py-16 sm:py-20 bg-[#121212]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"
      >
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 xs:mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[#ADB7BE] max-w-2xl mx-auto text-sm xs:text-base sm:text-lg">
            Have a project in mind or want to discuss potential opportunities?
            I'm always open to new ideas and collaborations.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#181818] p-5 xs:p-8 sm:p-10 rounded-2xl border border-[#2A2A2A] shadow-lg max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 xs:gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl xs:text-2xl font-semibold text-white mb-4 xs:mb-6 border-b border-[#333333] pb-2 xs:pb-3">
                Contact Details
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 xs:p-3 rounded-lg mr-3 xs:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 xs:h-6 xs:w-6 text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#ADB7BE] text-xs xs:text-sm font-medium">
                      Email
                    </p>
                    <a
                      href="mailto:yusufhansck@gmail.com"
                      className="text-white hover:text-purple-400 transition-colors text-sm xs:text-base sm:text-lg"
                    >
                      yusufhansck@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-500/20 p-2 xs:p-3 rounded-lg mr-3 xs:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 xs:h-6 xs:w-6 text-pink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#ADB7BE] text-xs xs:text-sm font-medium">
                      Location
                    </p>
                    <p className="text-white text-sm xs:text-base sm:text-lg">
                      Istanbul, Turkey
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl xs:text-2xl font-semibold text-white mb-4 xs:mb-6 border-b border-[#333333] pb-2 xs:pb-3">
                Connect Online
              </h3>

              <p className="text-[#ADB7BE] text-xs xs:text-sm sm:text-base mb-4 xs:mb-6">
                Follow me on social media to stay updated with my latest
                projects and professional insights.
              </p>

              <div className="flex space-x-3 xs:space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 xs:p-4 bg-[#232323] rounded-lg text-white ${link.color} transition-all duration-300 flex items-center justify-center`}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={24}
                      height={24}
                      className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
