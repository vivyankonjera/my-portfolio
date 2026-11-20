import React, { useEffect, useMemo, useRef, useState } from "react";
import { LuCheck, LuFlaskConical, LuGitBranch, LuPause, LuPlay, LuRotateCcw, LuZap } from "react-icons/lu";
import useReveal from "../hooks/useReveal";

/*
 * Animated "IDE" showing a Jest test being written for a Lightning Web
 * Component, then run. Purely illustrative: the visual is aria-hidden and the
 * full test file is provided as text for screen readers. Motion pauses
 * off-screen, can be paused/replayed, and is static under reduced motion.
 */

const CODE = `import { createElement } from 'lwc';
import AccountCard from 'c/accountCard';
import getAccount from '@salesforce/apex/AccountCtrl.getAccount';

jest.mock('@salesforce/apex/AccountCtrl.getAccount',
  () => ({ default: jest.fn() }), { virtual: true });

const flushPromises = () => new Promise(process.nextTick);

describe('c-account-card', () => {
  it('renders the account name', async () => {
    getAccount.mockResolvedValue({ Name: 'Acme Corp' });
    const el = createElement('c-account-card', { is: AccountCard });
    document.body.appendChild(el);
    await flushPromises();
    const title = el.shadowRoot.querySelector('h2');
    expect(title.textContent).toBe('Acme Corp');
  });

  it('shows an error when Apex fails', async () => {
    getAccount.mockRejectedValue(new Error('Boom'));
    const el = createElement('c-account-card', { is: AccountCard });
    document.body.appendChild(el);
    await flushPromises();
    expect(el.shadowRoot.querySelector('.error')).not.toBeNull();
  });

  it('is accessible', async () => {
    const el = createElement('c-account-card', { is: AccountCard });
    document.body.appendChild(el);
    await expect(el).toBeAccessible();
  });
});`;

// Lines already in the file before "typing" starts (imports + mock setup).
const PREFILLED_LINES = 9;

const TESTS = [
	{ name: "renders the account name", detail: "Mocked Apex data reaches the template." },
	{ name: "shows an error when Apex fails", detail: "Rejected promise renders the error state." },
	{ name: "is accessible", detail: "sa11y finds no accessibility violations." },
];

const SPEC = ["Renders the account name", "Handles Apex errors", "Passes accessibility checks"];

/* --- Tiny JS tokenizer for syntax colours -------------------------------- */
const KEYWORDS = new Set([
	"import", "from", "const", "async", "await", "new", "default", "true", "false", "null", "return",
]);
const GLOBALS = new Set(["describe", "it", "expect", "jest", "document", "process"]);
const TOKEN_RE = /('[^']*')|(\b\d+\b)|([A-Za-z_$][\w$]*)|(\s+)|([^\w\s])/g;

const tokenize = (line) => {
	const tokens = [];
	let match;
	TOKEN_RE.lastIndex = 0;
	while ((match = TOKEN_RE.exec(line))) {
		const [text, str, num, ident] = match;
		let type = "p";
		if (str) type = "s";
		else if (num) type = "n";
		else if (ident) {
			const next = line.slice(TOKEN_RE.lastIndex).trimStart()[0];
			if (KEYWORDS.has(ident)) type = "k";
			else if (next === "(" || GLOBALS.has(ident)) type = "f";
			else if (/^[A-Z]/.test(ident)) type = "t";
			else type = "i";
		} else if (/^\s+$/.test(text)) type = "w";
		tokens.push([type, text]);
	}
	return tokens;
};

const LINES = CODE.split("\n").map((text) => ({ text, tokens: tokenize(text) }));
const PREFIX_CHARS = LINES.slice(0, PREFILLED_LINES).reduce((sum, l) => sum + l.text.length + 1, 0);
const TOTAL_CHARS = CODE.length;

/* --- Timeline (ms) -------------------------------------------------------- */
const CHARS_PER_SEC = 120;
const TYPE_END = ((TOTAL_CHARS - PREFIX_CHARS) / CHARS_PER_SEC) * 1000;
const RUN_START = TYPE_END + 500;
const TEST_MS = 750;
const DONE_AT = RUN_START + TESTS.length * TEST_MS;
const LOOP_MS = DONE_AT + 5500;
const FINAL_T = DONE_AT + 200;

const prefersReducedMotion = () =>
	window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const LwcLab = () => {
	const sectionRef = useReveal({ threshold: 0.1 });
	const windowRef = useRef(null);
	const [reduced] = useState(prefersReducedMotion);
	const [t, setT] = useState(() => (prefersReducedMotion() ? FINAL_T : 0));
	const [playing, setPlaying] = useState(!reduced);
	const [visible, setVisible] = useState(false);
	// Editor shows fewer lines on small screens (keep in sync with --visible in lab.css).
	const [visibleLines, setVisibleLines] = useState(() =>
		window.matchMedia && window.matchMedia("(max-width: 760px)").matches ? 14 : 18,
	);

	useEffect(() => {
		if (!window.matchMedia) return undefined;
		const query = window.matchMedia("(max-width: 760px)");
		const apply = () => setVisibleLines(query.matches ? 14 : 18);
		if (query.addEventListener) query.addEventListener("change", apply);
		return () => {
			if (query.removeEventListener) query.removeEventListener("change", apply);
		};
	}, []);

	// Only animate while the IDE is on screen.
	useEffect(() => {
		const node = windowRef.current;
		if (!node || !("IntersectionObserver" in window)) {
			setVisible(true);
			return undefined;
		}
		const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
			threshold: 0.25,
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	// Advance the clock with requestAnimationFrame (stops when hidden/paused).
	useEffect(() => {
		if (!playing || !visible) return undefined;
		let frame;
		let last = performance.now();
		const tick = (now) => {
			const delta = Math.min(now - last, 100);
			last = now;
			setT((prev) => (prev + delta) % LOOP_MS);
			frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [playing, visible]);

	/* Derived state */
	const typed = Math.min(TOTAL_CHARS, PREFIX_CHARS + Math.floor((t / 1000) * CHARS_PER_SEC));
	const isTyping = typed < TOTAL_CHARS;
	const testState = TESTS.map((_, i) => {
		const start = RUN_START + i * TEST_MS;
		if (t >= start + TEST_MS) return "pass";
		if (t >= start) return "run";
		return "idle";
	});
	const passed = testState.filter((s) => s === "pass").length;
	const running = testState.includes("run");
	const done = t >= DONE_AT;
	const phase = isTyping ? "typing" : done ? "done" : running ? "running" : "ready";

	// Render code up to `typed` characters, keeping the caret line in view.
	const { rows, caretLine } = useMemo(() => {
		const out = [];
		let offset = 0;
		let caret = 0;
		for (let i = 0; i < LINES.length; i += 1) {
			const { text, tokens } = LINES[i];
			if (offset > typed) break;
			const remaining = typed - offset;
			const parts = [];
			let used = 0;
			for (const [type, value] of tokens) {
				if (used >= remaining) break;
				parts.push([type, value.slice(0, remaining - used)]);
				used += value.length;
			}
			out.push(parts);
			caret = i;
			offset += text.length + 1;
		}
		return { rows: out, caretLine: caret };
	}, [typed]);


	const replay = () => {
		setT(0);
		setPlaying(true);
	};

	return (
		<section id="lab" className="section lab" aria-labelledby="lab-title" ref={sectionRef}>
			<div className="container">
				<div className="sectionHeader centered">
					<p className="eyebrow">lab.run()</p>
					<h2 id="lab-title" className="sectionTitle">
						Test-first Lightning Web Components
					</h2>
					<p className="sectionLead">
						An illustrative look at writing Jest tests for an LWC: spec the behaviour,
						write the tests, watch them go green.
					</p>
				</div>

				<figure className="labFigure reveal">
					<div ref={windowRef} className={`ide phase-${phase}`} aria-hidden="true">
						{/* Title bar */}
						<div className="ideBar">
							<span className="ideDots">
								<i />
								<i />
								<i />
							</span>
							<span className="idePath">
								force-app / lwc / accountCard / __tests__ /{" "}
								<b>accountCard.test.js</b>
							</span>
							<span className="ideBadges">
								<span className="ideBadge">LWC</span>
								<span className="ideBadge isJest">JEST</span>
								<span className={`ideBadge isCount${done ? " isDone" : ""}`}>
									{passed} / {TESTS.length}
								</span>
							</span>
						</div>

						<div className="ideBody">
							{/* Spec panel */}
							<aside className="ideSpec">
								<p className="ideLabel">The spec</p>
								<p className="ideSpecTitle">Show the Account at a glance</p>
								<p className="ideSpecText">
									Load the record through Apex, render its name, and fail gracefully if
									the call errors, accessibly.
								</p>
								<p className="ideLabel">Acceptance criteria</p>
								<ul className="ideCriteria">
									{SPEC.map((item, i) => (
										<li key={item} className={testState[i] === "pass" ? "isMet" : ""}>
											<span className="ideCheck">
												<LuCheck />
											</span>
											{item}
										</li>
									))}
								</ul>
							</aside>

							{/* Editor */}
							<div className="ideEditor">
								<div className="ideTabs">
									<span className="ideTab isActive">accountCard.test.js</span>
									<span className="ideTab">accountCard.js</span>
									<span className="ideTab">accountCard.html</span>
								</div>
								<div
									className="ideCode"
									style={{ "--scroll": Math.max(0, caretLine - (visibleLines - 3)) }}
								>
									<div className="ideCodeInner">
										{rows.map((parts, i) => (
											<div key={i} className="ideLine">
												<span className="ideLn">{i + 1}</span>
												<code>
													{parts.map(([type, value], j) => (
														<span key={j} className={`tk-${type}`}>
															{value}
														</span>
													))}
													{isTyping && i === caretLine && <span className="ideCaret" />}
												</code>
											</div>
										))}
									</div>
								</div>

								<div className={`ideToast${done ? " isShown" : ""}`}>
									<span className="ideToastIcon">
										<LuZap />
									</span>
									<span>
										<strong>All green · c-account-card</strong>
										<small>
											{TESTS.length} of {TESTS.length} tests passed on the first run
										</small>
									</span>
								</div>
							</div>

							{/* Tests panel */}
							<div className="ideTests">
								<div className="ideTestsHead">
									<span>
										<LuFlaskConical /> Tests
									</span>
									<span className={`ideRun${running ? " isRunning" : ""}`}>
										<LuPlay /> {running ? "Running" : "Run"}
									</span>
								</div>
								<ul className="ideTestList">
									{TESTS.map((test, i) => (
										<li key={test.name} className={`ideTest is-${testState[i]}`}>
											<span className="ideTestStatus">
												{testState[i] === "pass" ? <LuCheck /> : null}
											</span>
											<span className="ideTestText">
												<strong>{test.name}</strong>
												<small>{test.detail}</small>
											</span>
											<span className="ideTestTag">
												{testState[i] === "pass" ? "PASS" : testState[i] === "run" ? "RUNS" : "—"}
											</span>
										</li>
									))}
								</ul>
								<div className="ideCoverage">
									<span>
										<span>Coverage</span>
										<span>{Math.round((passed / TESTS.length) * 100)}%</span>
									</span>
									<span className="ideCoverageBar">
										<span style={{ transform: `scaleX(${passed / TESTS.length})` }} />
									</span>
								</div>
							</div>
						</div>

						{/* Status bar */}
						<div className="ideStatus">
							<span className="ideStatusLeft">
								<span className="ideStatusDot" />
								{phase === "typing" && "Editing accountCard.test.js"}
								{phase === "ready" && "Saved"}
								{phase === "running" && "Running jest…"}
								{phase === "done" && "All tests passing"}
								<span className="ideBranch">
									<LuGitBranch /> main
								</span>
							</span>
							<span className="ideStatusRight">JavaScript · UTF-8 · LWC</span>
						</div>
					</div>

					<figcaption className="labCaption">
						<span>Illustrative example: Jest tests for a Lightning Web Component.</span>
						{!reduced && (
							<span className="labControls">
								<button
									type="button"
									className="btn btnGhost labBtn"
									onClick={() => setPlaying((p) => !p)}
								>
									{playing ? <LuPause aria-hidden="true" /> : <LuPlay aria-hidden="true" />}
									{playing ? "Pause" : "Play"}
									<span className="visuallyHidden"> animation</span>
								</button>
								<button type="button" className="btn btnGhost labBtn" onClick={replay}>
									<LuRotateCcw aria-hidden="true" /> Replay
									<span className="visuallyHidden"> animation</span>
								</button>
							</span>
						)}
					</figcaption>

					<pre className="visuallyHidden">
						{`accountCard.test.js\n\n${CODE}\n\nResult: ${TESTS.length} of ${TESTS.length} tests pass.`}
					</pre>
				</figure>
			</div>
		</section>
	);
};

export default LwcLab;
