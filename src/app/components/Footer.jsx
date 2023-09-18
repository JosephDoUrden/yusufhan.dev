import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-b-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="flex p-12 justify-between">
        <Link href={"/"}>
          <span>yusufhan.dev</span>
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
