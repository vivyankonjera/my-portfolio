import React from "react";
import { SiLinkedin } from "react-icons/si";
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
					if (entry.isIntersecting) setActiveNav(`#${entry.target.id}`);
				});
			},
			{
				threshold: 0.3,
			},
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth);
		});

		return () => window.removeEventListener("resize");
	}, []);

	return (
		<nav className="sectionContainer">
			<h3 id="logo">VCF</h3>
			<div className="navigationBar">
				<a
					href="#intro"
					title="Home"
					onClick={() => setActiveNav("#intro")}
					className={activeNav === "#intro" ? "active" : ""}
				>
					{/* 	{windowWidth > 970 && <AiFillHome />}
				{windowWidth <= 970 && "Home"} */}
					Home
				</a>

				<a
					href="#experience"
					title="Experience"
					onClick={() => setActiveNav("#experience")}
					className={activeNav === "#experience" ? "active" : ""}
				>
					{/* {windowWidth > 970 && <HiDocumentText />}
                {windowWidth <= 970 && "Roles"} */}
					Experience
				</a>

				<a
					href="#projects"
					title="Projects"
					onClick={() => setActiveNav("#projects")}
					className={activeNav === "#projects" ? "active" : ""}
				>
					{/*       {windowWidth > 970 && <HiDesktopComputer />}
                {windowWidth <= 970 && "Projects"} */}
					Projects
				</a>

				<a
					href="#contact"
					title="Contact"
					onClick={() => setActiveNav("#contact")}
					className={activeNav === "#contact" ? "active" : ""}
				>
					{/*   {windowWidth > 970 && <MdEmail />}
                {windowWidth <= 970 && "Contact"} */}
					Contact
				</a>
			</div>
			<a
				href="https://linkedin.com/in/vivya-nkonjera-114a712bb"
				target="_blank"
				rel="noreferrer"
				id="emailBtn"
			>
				<SiLinkedin />
			</a>
		</nav>
	);
};

export default Navbar;
