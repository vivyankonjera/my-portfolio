import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { LuBriefcase, LuHome, LuLayers, LuMenu, LuSend, LuUser, LuX } from "react-icons/lu";

const NAV_ITEMS = [
	{ id: "intro", label: "Home", Icon: LuHome },
	{ id: "about", label: "About", Icon: LuUser },
	{ id: "experience", label: "Experience", Icon: LuBriefcase },
	{ id: "projects", label: "Projects", Icon: LuLayers },
	{ id: "contact", label: "Contact", Icon: LuSend },
];

/*
 * Desktop: the active section is shown by a bubble that hangs below the bar,
 * sitting in a curved notch cut into the bar's bottom edge (an inverted
 * "tab bar" bubble). Both slide together to the active link. The bubble is
 * decorative; aria-current on the link carries the state.
 * Mobile: the regular dropdown menu, no bubble.
 */
const Navbar = () => {
	const [active, setActive] = useState("intro");
	const [menuOpen, setMenuOpen] = useState(false);
	const [notchX, setNotchX] = useState(null);
	const [ready, setReady] = useState(false);
	const toggleRef = useRef(null);
	const barRef = useRef(null);
	const linkRefs = useRef({});

	// Highlight the section currently in the middle of the viewport.
	useEffect(() => {
		const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean);
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

	// Centre the notch + bubble under the active link's icon (the icon
	// "drops" into the bubble; the label stays in the bar beside it).
	const measure = useCallback(() => {
		const bar = barRef.current;
		const link = linkRefs.current[active];
		if (!bar || !link) return;
		const target = link.querySelector(".navLinkIcon") || link;
		const barBox = bar.getBoundingClientRect();
		const box = target.getBoundingClientRect();
		// Hidden (mobile menu closed) links measure as 0 wide: keep last position.
		if (!box.width) return;
		setNotchX(Math.round(box.left - barBox.left + box.width / 2));
	}, [active]);

	useLayoutEffect(() => {
		measure();
	}, [measure]);

	useEffect(() => {
		window.addEventListener("resize", measure);
		// Re-measure once web fonts have loaded (label widths change).
		if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
		return () => window.removeEventListener("resize", measure);
	}, [measure]);

	// Enable the slide transition only after the first position is set,
	// so the bubble doesn't fly in from the left edge on page load.
	useEffect(() => {
		if (notchX === null || ready) return undefined;
		const frame = requestAnimationFrame(() => setReady(true));
		return () => cancelAnimationFrame(frame);
	}, [notchX, ready]);

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

	const ActiveIcon = (NAV_ITEMS.find((item) => item.id === active) || NAV_ITEMS[0]).Icon;

	return (
		<header className="siteHeader">
			<div className="container">
				<nav
					ref={barRef}
					className={`navBar${notchX !== null ? " hasNotch" : ""}${ready ? " isReady" : ""}`}
					aria-label="Primary"
					style={notchX !== null ? { "--notch-x": `${notchX}px` } : undefined}
				>
					{/* Background layer: carries the notch mask and shadow so links aren't clipped */}
					<span className="navBg" aria-hidden="true">
						<span className="navBgFill" />
					</span>
					<span className="navBubble" aria-hidden="true">
						<ActiveIcon key={active} className="navBubbleIcon" />
					</span>

					<a href="#intro" className="logo" aria-label="VCF, back to top">
						vcf<span aria-hidden="true">.</span>
					</a>

					<ul id="primary-menu" className={`navLinks${menuOpen ? " isOpen" : ""}`}>
						{NAV_ITEMS.map(({ id, label, Icon }) => (
							<li key={id}>
								<a
									ref={(node) => {
										linkRefs.current[id] = node;
									}}
									href={`#${id}`}
									className="navLink"
									aria-current={active === id ? "true" : undefined}
									onClick={() => setMenuOpen(false)}
								>
									<Icon className="navLinkIcon" aria-hidden="true" />
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
