import React from "react";
import { about } from "../data/content";
import useReveal from "../hooks/useReveal";

const About = () => {
	const ref = useReveal();

	return (
		<section id="about" className="section about" aria-labelledby="about-title" ref={ref}>
			<div className="container">
				<div className="aboutGrid">
					<div className="aboutCopy reveal">
						<p className="eyebrow">about.me</p>
						<h2 id="about-title" className="sectionTitle">
							Clean data, efficient processes, <span className="gradientText">built to scale.</span>
						</h2>
						{about.paragraphs.map((text) => (
							<p key={text.slice(0, 24)} className="aboutText">
								{text}
							</p>
						))}
					</div>

					<aside className="aboutSide" aria-label="At a glance">
						<ul className="statGrid">
							{about.stats.map((stat, index) => (
								<li key={stat.label} className="statCard reveal" style={{ "--i": index + 1 }}>
									<span className="statValue">{stat.value}</span>
									<span className="statLabel">{stat.label}</span>
								</li>
							))}
						</ul>

						<div className="certCard reveal" style={{ "--i": 4 }}>
							<h3 className="miniTitle">Certifications</h3>
							<ul className="certList">
								{about.certifications.map((cert) => (
									<li key={cert.name} className="certItem">
										<img src={cert.image} alt="" width="56" height="56" loading="lazy" />
										<span>
											<strong>{cert.name}</strong>
											<small>Salesforce credential</small>
										</span>
									</li>
								))}
							</ul>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
};

export default About;
