import React from "react";
import { SiGithub, SiLinkedin, SiSalesforce } from "react-icons/si";
import { LuArrowUpRight, LuFileText, LuMail } from "react-icons/lu";
import { links, profile } from "../data/content";
import useReveal from "../hooks/useReveal";
import ResumeButton from "./ResumeButton";

const CHANNELS = [
	{
		href: links.linkedin,
		label: "LinkedIn",
		detail: "Best way to reach me",
		Icon: SiLinkedin,
	},
	{
		href: links.github,
		label: "GitHub",
		detail: "Code & repositories",
		Icon: SiGithub,
	},
	{
		href: links.trailblazer,
		label: "Trailblazer",
		detail: "Salesforce profile",
		Icon: SiSalesforce,
	},
];

const Contact = () => {
	const ref = useReveal();
	const year = new Date().getFullYear();

	return (
		<>
			<section id="contact" className="section contact" aria-labelledby="contact-title" ref={ref}>
				<div className="container">
					<div className="contactCard reveal">
						<span className="contactGlow" aria-hidden="true" />
						<div className="contactCopy">
							<p className="eyebrow eyebrowOnDark">contact.init()</p>
							<h2 id="contact-title" className="contactTitle">
								Keep in touch
							</h2>
							<p className="contactLead">
								Whether it’s a Salesforce development role, a project or a question
								about Apex and LWC, please don’t hesitate to reach out.
							</p>

							<div className="contactActions">
								<a
									href={links.linkedin}
									target="_blank"
									rel="noreferrer"
									className="btn btnPrimary btnOnDark"
								>
									<SiLinkedin aria-hidden="true" /> Message me on LinkedIn
									<span className="visuallyHidden"> (opens in a new tab)</span>
								</a>
								{profile.email && (
									<a href={`mailto:${profile.email}`} className="btn btnGhost">
										<LuMail aria-hidden="true" /> {profile.email}
									</a>
								)}
								<ResumeButton className="btn btnGhost">
									<LuFileText aria-hidden="true" />
								</ResumeButton>
							</div>
						</div>

						<ul className="channelList" aria-label="Find me online">
							{CHANNELS.map(({ href, label, detail, Icon }) => (
								<li key={label}>
									<a href={href} target="_blank" rel="noreferrer" className="channel">
										<span className="channelIcon" aria-hidden="true">
											<Icon />
										</span>
										<span className="channelText">
											<strong>{label}</strong>
											<small>{detail}</small>
										</span>
										<LuArrowUpRight className="channelArrow" aria-hidden="true" />
										<span className="visuallyHidden"> (opens in a new tab)</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<footer className="siteFooter">
				<div className="container footerInner">
					<p>
						© {year} {profile.name} · <span className="footerBrand">{profile.brand}</span>
					</p>
					<p className="footerNote">{profile.tagline}.</p>
				</div>
			</footer>
		</>
	);
};

export default Contact;
