/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
    >
      <div className="md:col-span-1">
        <h5 className="text-xl font-bold text-purple-400 my-2">
          Let's Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hi, I'll do my
          best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/JosephDoUrden" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yusufhansacak/"
            target="_blank"
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div className="mt-8">
          <p className="text-gray-400 md:text-sm text-lg">
            Feel free to reach out at
          </p>
          <a
            href="mailto:yusufhan.sacak@bahcesehir.edu.tr"
            className="text-purple-500 text-lg font-bold md:text-2xl"
          >
            yusufhan.sacak@bahcesehir.edu.tr
          </a>
        </div>
      </div>
      <div className="md:col-span-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="place-self-center mt-4 lg:mt-0"
          whileHover={{ scale: 1.05 }}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div className="mt-12 lg:mt-0">
            <img
              alt="lorem picsum"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2JkMjI0NjRhOHBmOG82ODJxdnA0OHlhdDQwbXNsa25kaG1zaG44MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mCRJDo24UvJMA/giphy.gif"
              width={500}
              height={500}
              className="object-cover rounded-full"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;
