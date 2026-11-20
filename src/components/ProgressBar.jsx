import { useEffect, useRef } from "react";

// Decorative reading-progress bar. Uses transform (not width) to stay off the layout path.
const ProgressBar = () => {
	const barRef = useRef(null);

	useEffect(() => {
		let frame = 0;
		const update = () => {
			frame = 0;
			const { scrollHeight, scrollTop } = document.documentElement;
			const max = scrollHeight - window.innerHeight;
			const progress = max > 0 ? scrollTop / max : 0;
			if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
		};
		const onScroll = () => {
			if (!frame) frame = window.requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<div className="progressContainer" aria-hidden="true">
			<div id="progressBar" ref={barRef} style={{ transform: "scaleX(0)" }} />
		</div>
	);
};

export default ProgressBar;
