import React, { useEffect, useRef, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const NAV_ITEMS = [
	{ id: "intro", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
];

const Navbar = () => {
	const [active, setActive] = useState("intro");
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleRef = useRef(null);

	// Highlight the section currently in the middle of the viewport.
	useEffect(() => {
		const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
			Boolean,
		);
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActive(entry.target.id);
				});
			},
			{ rootMargin: "-45% 0px -50% 0px" },
		);
		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	// Close the mobile menu with Escape and return focus to the toggle.
	useEffect(() => {
		if (!menuOpen) return undefined;
		const onKey = (event) => {
			if (event.key === "Escape") {
				setMenuOpen(false);
				if (toggleRef.current) toggleRef.current.focus();
			}
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [menuOpen]);

	return (
		<header className="siteHeader">
			<div className="container">
				<nav className="navBar" aria-label="Primary">
					<a href="#intro" className="logo" aria-label="VCF, back to top">
						vcf<span aria-hidden="true">.</span>
					</a>

					<ul id="primary-menu" className={`navLinks${menuOpen ? " isOpen" : ""}`}>
						{NAV_ITEMS.map(({ id, label }) => (
							<li key={id}>
								<a
									href={`#${id}`}
									className="navLink"
									aria-current={active === id ? "true" : undefined}
									onClick={() => setMenuOpen(false)}
								>
									{label}
								</a>
							</li>
						))}
					</ul>

					<div className="navActions">
						<a href="#contact" className="btn btnPrimary navCta">
							Let’s connect
						</a>
						<button
							ref={toggleRef}
							type="button"
							className="menuToggle"
							aria-expanded={menuOpen}
							aria-controls="primary-menu"
							aria-label={menuOpen ? "Close menu" : "Open menu"}
							onClick={() => setMenuOpen((open) => !open)}
						>
							{menuOpen ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
