import React from "react";
import { SiGithub, SiLinkedin, SiSalesforce } from "react-icons/si";
import { LuArrowDown, LuFileText } from "react-icons/lu";
import { about, links, profile } from "../data/content";
import ResumeButton from "./ResumeButton";

const SOCIALS = [
	{ href: links.linkedin, label: "LinkedIn profile", Icon: SiLinkedin },
	{ href: links.github, label: "GitHub repositories", Icon: SiGithub },
	{ href: links.trailblazer, label: "Salesforce Trailblazer profile", Icon: SiSalesforce },
];

const Hero = () => {
	return (
		<section id="intro" className="hero" aria-labelledby="hero-title">
			<div className="container">
				<div className="heroFrame">
					<span className="orb orb1" aria-hidden="true" />
					<span className="orb orb2" aria-hidden="true" />
					<span className="orb orb3" aria-hidden="true" />

					<div className="heroCopy">
						<p className="heroBrand">
							<span aria-hidden="true">{"//"}</span> {profile.brand}
						</p>
						<h1 id="hero-title" className="heroTitle">
							<span className="heroHello">Hello, I’m</span>
							<span className="heroName">
								<span className="heroNameEcho" aria-hidden="true">
									{profile.displayName}
								</span>
								{profile.displayName}
							</span>
							<span className="visuallyHidden">
								{" "}
								({profile.name}), {profile.role}
							</span>
						</h1>
						<p className="heroTagline">
							<span className="heroTaglineMark">{profile.tagline}.</span>{" "}
							{profile.summary}
						</p>

						<div className="heroActions">
							<a href="#projects" className="btn btnPrimary">
								See my work <LuArrowDown aria-hidden="true" />
							</a>
							<ResumeButton>
								<LuFileText aria-hidden="true" />
							</ResumeButton>
						</div>

						<ul className="heroSocials" aria-label="Profiles">
							{SOCIALS.map(({ href, label, Icon }, index) => (
								<li key={href}>
									<a
										href={href}
										target="_blank"
										rel="noreferrer"
										className={`iconBtn${index === 0 ? " isPrimary" : ""}`}
										aria-label={`${label} (opens in a new tab)`}
									>
										<Icon aria-hidden="true" />
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="heroVisual">
						<div className="heroPortraitWrap">
							{/* Two "planets" on orbits of different sizes and speeds */}
							<span className="heroOrbit heroOrbitInner" aria-hidden="true" />
							<span className="heroOrbit heroOrbitOuter" aria-hidden="true" />
							{/* Two-sided card: gradient back flips round to reveal the photo */}
							<div className="heroFlip">
								<div className="heroPortraitCircle">
									<img
										className="heroPortrait"
										src={require("../images/headshot-hero.jpg")}
										alt={`Portrait of ${profile.name}`}
										width="900"
										height="900"
									/>
								</div>
								<div className="heroPortraitBack" aria-hidden="true" />
							</div>
						</div>

						<p className="heroChip heroBadge">
							<span className="badgeStack" aria-hidden="true">
								{about.certifications.map((cert) => (
									<img key={cert.name} src={cert.image} alt="" width="40" height="40" />
								))}
							</span>
							<span>
								<strong>{about.certifications.length}× certified</strong>
								<small>Salesforce</small>
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
