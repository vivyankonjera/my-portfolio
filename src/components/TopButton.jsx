import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

const TopButton = () => {
	const [shown, setShown] = useState(false);

	useEffect(() => {
		const onScroll = () => setShown(window.scrollY > window.innerHeight);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<a
			href="#intro"
			id="scrollTopBtn"
			className={`iconBtn${shown ? " isShown" : ""}`}
			aria-label="Back to top"
			tabIndex={shown ? undefined : -1}
		>
			<LuArrowUp aria-hidden="true" />
		</a>
	);
};

export default TopButton;
