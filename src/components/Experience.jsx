import React, { useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { experience } from "../data/content";
import useReveal from "../hooks/useReveal";

/*
 * Interactive timeline built on the disclosure pattern: each role header is a
 * real <button aria-expanded>. Up/Down/Home/End move between roles. The rail
 * "fills" up to the role you last opened. Everything also works by tab/enter.
 */
const Experience = () => {
	const ref = useReveal({ threshold: 0.1 });
	const [open, setOpen] = useState(() => new Set([experience[0].id]));
	const [activeIndex, setActiveIndex] = useState(0);
	const buttonsRef = useRef([]);

	const allOpen = open.size === experience.length;

	const toggle = (id, index) => {
		setOpen((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});
		setActiveIndex(index);
	};

	const toggleAll = () => {
		setOpen(allOpen ? new Set() : new Set(experience.map((job) => job.id)));
		setActiveIndex(allOpen ? 0 : experience.length - 1);
	};

	const onKeyDown = (event, index) => {
		const last = experience.length - 1;
		const target = {
			ArrowDown: Math.min(index + 1, last),
			ArrowUp: Math.max(index - 1, 0),
			Home: 0,
			End: last,
		}[event.key];
		if (target === undefined) return;
		event.preventDefault();
		buttonsRef.current[target]?.focus();
	};

	return (
		<section
			id="experience"
			className="section experience"
			aria-labelledby="experience-title"
			ref={ref}
		>
			{/* Decorative background texture */}
			<span className="expBg" aria-hidden="true" />

			<div className="container">
				<div className="expHeader">
					<div className="sectionHeader">
						<p className="eyebrow">experience.log</p>
						<h2 id="experience-title" className="sectionTitle">
							Where I’ve worked
						</h2>
						<p className="sectionLead">
							Four roles across CRM and marketing technology, from Adobe Campaign
							to Salesforce. Open a role to see what I delivered.
						</p>
					</div>
					<button type="button" className="btn btnGhost expToggleAll" onClick={toggleAll}>
						{allOpen ? "Collapse all" : "Expand all"}
					</button>
				</div>

				<ol className="timeline">
					{experience.map((job, index) => {
						const isOpen = open.has(job.id);
						const state =
							index < activeIndex ? " isPast" : index === activeIndex ? " isActive" : "";
						const panelId = `role-${job.id}`;
						const headerId = `role-${job.id}-header`;

						return (
							<li
								key={job.id}
								className={`timelineItem reveal${state}${isOpen ? " isOpen" : ""}${
									isOpen && index === activeIndex ? " isSelected" : ""
								}`}
								style={{ "--i": index }}
							>
								<div className="timelineRail" aria-hidden="true">
									<span className="timelineNode" />
								</div>

								<article className="timelineCard">
									<h3 className="timelineHeading">
										<button
											ref={(node) => {
												buttonsRef.current[index] = node;
											}}
											id={headerId}
											type="button"
											className="timelineButton"
											aria-expanded={isOpen}
											aria-controls={panelId}
											onClick={() => toggle(job.id, index)}
											onKeyDown={(event) => onKeyDown(event, index)}
										>
											<img
												className="companyLogo"
												src={job.logo}
												alt=""
												width="48"
												height="48"
												loading="lazy"
											/>
											<span className="timelineMeta">
												<span className="timelineRole">
													{job.role}
													<span className="visuallyHidden"> at </span>
												</span>
												<span className="timelineCompany">{job.company}</span>
											</span>
											<span className="timelineIndex" aria-hidden="true">
												{String(index + 1).padStart(2, "0")}
											</span>
											<LuChevronDown className="timelineChevron" aria-hidden="true" />
										</button>
									</h3>

									<p className="timelineSummary">{job.summary}</p>

									<div
										id={panelId}
										role="region"
										aria-labelledby={headerId}
										className="timelinePanel"
									>
										<div className="timelinePanelInner">
											<p className="timelineDescription">{job.description}</p>
											<ul className="chipList" aria-label="Tools used">
												{job.tools.map((tool) => (
													<li key={tool} className="chip chipOnCard">
														{tool}
													</li>
												))}
											</ul>
										</div>
									</div>
								</article>
							</li>
						);
					})}
				</ol>
			</div>
		</section>
	);
};

export default Experience;
