import React from "react";
import { AiFillHome } from "react-icons/ai";
import { HiDocument, HiDocumentText } from "react-icons/hi";
import { HiDesktopComputer } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#intro");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const sections = document.querySelectorAll(".sectionContainer");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting)
                        setActiveNav(`#${entry.target.id}`);
                });
            },
            {
                threshold: 0.3,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });
    }, []);

    return (
        <nav>
            <a
                href='#intro'
                title='Home'
                onClick={() => setActiveNav("#intro")}
                className={activeNav === "#intro" ? "active" : ""}
            >
                {windowWidth > 970 && <AiFillHome />}
                {windowWidth < 970 && "Home"}
            </a>

            <a
                href='#experience'
                title='Experience'
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
            >
                {windowWidth > 970 && <HiDocumentText />}
                {windowWidth < 970 && "Roles"}
            </a>

            <a
                href='#projects'
                title='Projects'
                onClick={() => setActiveNav("#projects")}
                className={activeNav === "#projects" ? "active" : ""}
            >
                {windowWidth > 970 && <HiDesktopComputer />}
                {windowWidth < 970 && "Projects"}
            </a>

            <a
                href='#contact'
                title='Contact'
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
            >
                {windowWidth > 970 && <MdEmail />}
                {windowWidth < 970 && "Contact"}
            </a>
        </nav>
    );
};

export default Navbar;
