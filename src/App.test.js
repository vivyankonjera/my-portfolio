import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
	window.matchMedia =
		window.matchMedia ||
		(() => ({ matches: false, addEventListener() {}, removeEventListener() {} }));
	window.IntersectionObserver = class {
		observe() {}
		unobserve() {}
		disconnect() {}
	};
});

test("renders the main sections", () => {
	render(<App />);
	expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Vivya/);
	expect(screen.getByRole("heading", { name: /where i’ve worked/i })).toBeInTheDocument();
	expect(screen.getByRole("heading", { name: /things i’ve built/i })).toBeInTheDocument();
	expect(screen.getByRole("heading", { name: /keep in touch/i })).toBeInTheDocument();
});

test("timeline roles expand and collapse", () => {
	render(<App />);
	const rics = screen.getByRole("button", { name: /CRM Technical Specialist at RICS/i });
	expect(rics).toHaveAttribute("aria-expanded", "false");
	fireEvent.click(rics);
	expect(rics).toHaveAttribute("aria-expanded", "true");
});
