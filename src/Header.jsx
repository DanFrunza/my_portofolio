import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent text-white py-4 z-10 shadow-lg">
      <nav className="flex justify-center items-center space-x-8 max-w-screen-xl mx-auto">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-300 text-lg py-2 px-4 rounded"
        >
          Despre Mine
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-300 text-lg py-2 px-4 rounded"
        >
          Proiecte
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-300 text-lg py-2 px-4 rounded"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
