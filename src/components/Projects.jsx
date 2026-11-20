import React, { useCallback, useEffect, useRef, useState } from "react";
import {
	SiBootstrap,
	SiFirebase,
	SiGithub,
	SiLaravel,
	SiMysql,
	SiReact,
} from "react-icons/si";
import { LuArrowUpRight, LuPlus, LuX } from "react-icons/lu";
import { links, projects, PLACEHOLDER } from "../data/content";
import useReveal from "../hooks/useReveal";

const STACK_ICONS = {
	React: SiReact,
	Firebase: SiFirebase,
	Laravel: SiLaravel,
	MySQL: SiMysql,
	Bootstrap: SiBootstrap,
};

const StackIcons = ({ stack }) => (
	<span className="stackIcons" aria-hidden="true">
		{stack.map((name) => {
			const Icon = STACK_ICONS[name];
			return Icon ? <Icon key={name} /> : null;
		})}
	</span>
);

const ProjectCard = ({ project, index, onOpen }) => {
	if (project.placeholder) {
		return (
			<li className="projectItem reveal" style={{ "--i": index }}>
				<article className={`projectCard isPlaceholder theme-${project.theme}`}>
					<div className="projectHead">
						<div>
							<h3 className="projectTitle">{project.title}</h3>
							<p className="projectTagline">
								<span className="placeholder">{PLACEHOLDER}</span> Add a recent project
							</p>
						</div>
						<span className="projectMark" aria-hidden="true">
							<LuPlus />
						</span>
					</div>
					<p className="projectPlaceholderText">
						A short, anonymised write-up of a recent Salesforce or Marketing Cloud
						build: the problem, your approach and the result.
					</p>
				</article>
			</li>
		);
	}

	return (
		<li className="projectItem reveal" style={{ "--i": index }}>
			<article className={`projectCard theme-${project.theme}`}>
				<div className="projectHead">
					<div>
						<h3 className="projectTitle">
							{/* Stretched button: its ::after covers the whole card */}
							<button
								type="button"
								className="projectTrigger"
								onClick={(event) => onOpen(project, event.currentTarget)}
								aria-haspopup="dialog"
							>
								{project.title}
								<span className="visuallyHidden">: view project details</span>
							</button>
						</h3>
						<p className="projectTagline">{project.tagline}</p>
					</div>
					<StackIcons stack={project.stack} />
				</div>

				<dl className="projectFacts">
					<div>
						<dt className="projectFactLabel">Tech stack</dt>
						<dd className="projectFactValue">{project.stack.join(" · ")}</dd>
					</div>
					<div>
						<dt className="projectFactLabel">Context</dt>
						<dd className="projectFactValue">{project.context}</dd>
					</div>
				</dl>

				<div className="projectMedia" aria-hidden="true">
					<span className="projectLayer layer1" />
					<span className="projectLayer layer2" />
					<img
						src={project.image}
						alt=""
						width="1920"
						height="1080"
						loading="lazy"
						className="projectImage"
					/>
				</div>

				<span className="projectOpen" aria-hidden="true">
					View details <LuArrowUpRight />
				</span>
			</article>
		</li>
	);
};

const ProjectDialog = ({ project, onClose }) => {
	const dialogRef = useRef(null);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return undefined;
		if (project && !dialog.open) {
			if (typeof dialog.showModal === "function") dialog.showModal();
			else dialog.setAttribute("open", "");
			document.documentElement.classList.add("dialogOpen");
		}
		return undefined;
	}, [project]);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return undefined;
		const handleClose = () => {
			document.documentElement.classList.remove("dialogOpen");
			onClose();
		};
		dialog.addEventListener("close", handleClose);
		return () => dialog.removeEventListener("close", handleClose);
	}, [onClose]);

	const close = () => {
		const dialog = dialogRef.current;
		if (dialog && typeof dialog.close === "function") dialog.close();
		else {
			document.documentElement.classList.remove("dialogOpen");
			onClose();
		}
	};

	// Clicking the backdrop (the dialog element itself) closes it.
	const onBackdropClick = (event) => {
		if (event.target === dialogRef.current) close();
	};

	return (
		<dialog
			ref={dialogRef}
			className="projectDialog"
			aria-labelledby="project-dialog-title"
			onClick={onBackdropClick}
		>
			{project && (
				<div className={`dialogBody theme-${project.theme}`}>
					<button type="button" className="dialogClose" onClick={close} aria-label="Close project details">
						<LuX aria-hidden="true" />
					</button>

					<div className="dialogMedia">
						<img src={project.image} alt={project.imageAlt} width="1920" height="1080" />
					</div>

					<div className="dialogContent">
						<p className="eyebrow">{project.context}</p>
						<h2 id="project-dialog-title" className="dialogTitle">
							{project.title}
						</h2>
						<p className="dialogTagline">{project.tagline}</p>

						<p className="dialogText">{project.description}</p>

						<h3 className="miniTitle">What I built</h3>
						{project.details.length ? (
							<ul className="dialogList">
								{project.details.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						) : (
							<p className="dialogText">
								<span className="placeholder">{PLACEHOLDER}</span> Key features, your role
								and what you learned.
							</p>
						)}

						<h3 className="miniTitle">Tech stack</h3>
						<ul className="chipList">
							{project.stack.map((item) => (
								<li key={item} className="chip chipOnCard">
									{item}
								</li>
							))}
						</ul>

						<div className="dialogActions">
							{project.repo && (
								<a
									className="btn btnPrimary"
									href={project.repo}
									target="_blank"
									rel="noreferrer"
								>
									<SiGithub aria-hidden="true" /> View code
									<span className="visuallyHidden"> on GitHub (opens in a new tab)</span>
								</a>
							)}
							{project.live && (
								<a className="btn btnGhost" href={project.live} target="_blank" rel="noreferrer">
									Live site <LuArrowUpRight aria-hidden="true" />
								</a>
							)}
							<button type="button" className="btn btnGhost" onClick={close}>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</dialog>
	);
};

const Projects = () => {
	const ref = useReveal({ threshold: 0.1 });
	const [selected, setSelected] = useState(null);
	const triggerRef = useRef(null);

	const open = (project, trigger) => {
		triggerRef.current = trigger;
		setSelected(project);
	};

	const handleClose = useCallback(() => {
		setSelected(null);
		// Return focus to the card that opened the dialog.
		if (triggerRef.current) triggerRef.current.focus();
	}, []);

	return (
		<section id="projects" className="section projects" aria-labelledby="projects-title" ref={ref}>
			<div className="container">
				<div className="sectionHeader centered">
					<p className="eyebrow">projects.list()</p>
					<h2 id="projects-title" className="sectionTitle">
						Things I’ve built
					</h2>
					<p className="sectionLead">
						Coding projects from my development work. Select a card to see the
						details, stack and source code.
					</p>
				</div>

				<ul className="projectGrid">
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} onOpen={open} />
					))}
				</ul>

				<div className="projectsMore">
					<a
						className="btn btnGhost"
						href={links.github}
						target="_blank"
						rel="noreferrer"
					>
						<SiGithub aria-hidden="true" /> Explore more on GitHub
						<span className="visuallyHidden"> (opens in a new tab)</span>
					</a>
				</div>
			</div>

			<ProjectDialog project={selected} onClose={handleClose} />
		</section>
	);
};

export default Projects;
