import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import LwcLab from "./components/LwcLab";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TopButton from "./components/TopButton";
import ProgressBar from "./components/ProgressBar";

function App() {
	// Entrance animations are opt-in: only enabled when motion is allowed.
	useEffect(() => {
		const query = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () =>
			document.documentElement.classList.toggle("js-motion", !query.matches);
		apply();
		if (query.addEventListener) query.addEventListener("change", apply);
		return () => {
			if (query.removeEventListener) query.removeEventListener("change", apply);
		};
	}, []);

	return (
		<>
			<a className="skipLink" href="#main">
				Skip to content
			</a>
			<ProgressBar />
			<Navbar />
			<main id="main" tabIndex="-1">
				<Hero />
				<About />
				<Experience />
				<LwcLab />
				<Projects />
				<Contact />
			</main>
			<TopButton />
		</>
	);
}

export default App;
