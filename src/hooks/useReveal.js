import { useEffect, useRef } from "react";

/*
 * Adds `is-visible` to the element once it scrolls into view so CSS can
 * play an entrance animation. Content is fully visible by default; the
 * hidden start state only applies while `html.js-motion` is set, which
 * App removes when the visitor prefers reduced motion.
 */
const useReveal = (options = { threshold: 0.15 }) => {
	const ref = useRef(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return undefined;

		if (!("IntersectionObserver" in window)) {
			node.classList.add("is-visible");
			return undefined;
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, options);

		observer.observe(node);
		return () => observer.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return ref;
};

export default useReveal;
