import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      className="block py-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white relative group transition-all duration-300"
      href={href}
    >
      {title}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

export default NavLink;
