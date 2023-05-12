import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { HiDesktopComputer } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#intro");
  return (
    <nav>
      <a href="#intro" title="Home"
        onClick={() => setActiveNav("#intro")}
        className={activeNav === "#intro" ? "active" : ""}><AiFillHome />
      </a>
      
      <a
        href="#about"
        title="About"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        <BsFillPersonFill />
      </a>

      <a
        href="#experience"
        title="Experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}>
        <HiDocumentText />
      </a>

      <a
        href="#projects"
        title="Projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}>
        <HiDesktopComputer />
      </a>

      <a
        href="#contact"
        title="Contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        <MdEmail />
      </a>
    </nav>
  );
};

export default Navbar;
