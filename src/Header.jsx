import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent text-white py-4 z-10 shadow-lg">
      {/* Logo fixat în colțul din stânga */}
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-2xl font-extrabold tracking-wide cursor-pointer hover:text-gray-300"
      >
        DF
      </Link>

      {/* Meniul centrat */}
      <div className="flex justify-center items-center">
        <nav className="flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-300 text-lg py-2 px-4 rounded"
          >
            Home
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
      </div>
    </header>
  );
}

export default Header;
