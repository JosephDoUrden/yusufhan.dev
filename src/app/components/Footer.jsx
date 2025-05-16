import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "GitHub", href: "https://github.com/JosephDoUrden" },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/yusufhansacak/",
        },
      ],
    },
  ];

  return (
    <footer className="bg-[#121212] border-t border-[#33353F]">
      <div className="container mx-auto px-4 xs:px-6 pt-8 xs:pt-10 sm:pt-12 pb-4 xs:pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xs:gap-8">
          <div>
            <Link
              href="/"
              className="text-xl xs:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text hover:from-pink-600 hover:to-purple-400 transition-all duration-300"
            >
              yusufhan.dev
            </Link>
            <p className="mt-3 xs:mt-4 text-[#ADB7BE] text-sm xs:text-base max-w-xs">
              A skilled Software Engineer bringing innovative solutions to web
              and mobile development challenges.
            </p>
          </div>

          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex} className="mt-4 sm:mt-0">
              <h3 className="text-white font-semibold text-base xs:text-lg mb-3 xs:mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2 xs:space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-[#ADB7BE] hover:text-white transition-colors duration-200 flex items-center text-sm xs:text-base"
                    >
                      <span className="text-purple-500 mr-1">›</span>{" "}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#33353F] mt-8 xs:mt-10 pt-5 xs:pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[#ADB7BE] text-xs xs:text-sm">
            © {currentYear} Yusufhan Sacak. All rights reserved.
          </p>
          <div className="flex space-x-3 xs:space-x-4 mt-3 xs:mt-4 md:mt-0">
            <a
              href="https://github.com/JosephDoUrden"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ADB7BE] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Image
                src="/github-icon.svg"
                width={18}
                height={18}
                alt="GitHub"
                className="w-4 h-4 xs:w-5 xs:h-5"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yusufhansacak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ADB7BE] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Image
                src="/linkedin-icon.svg"
                width={18}
                height={18}
                alt="LinkedIn"
                className="w-4 h-4 xs:w-5 xs:h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
