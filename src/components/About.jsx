import React from "react";
import {
	SiJavascript,
	SiCss3,
	SiHtml5,
	SiReact,
	SiMysql,
	SiPhp,
	SiGmail,
	SiGithub,
} from "react-icons/si";

const About = () => {
	return (
		<>
			<section className="sectionContainer" id="intro">
				<div className="introWrapper">
					<div className="introLeft">
						<div className="centreIntro">
							<h1 id="name">Vivya Nkonjera</h1>
							<h2 id="title">Salesforce Consultant / Developer</h2>
							{/* <i className='bannerIcon'>
                                <SiLinkedin />
                            </i> */}
							<a
								href="https://github.com/vivyankonjera?tab=repositories"
								target="_blank"
							>
								<i className="bannerIcon">
									<SiGithub />
								</i>
							</a>
							<a href="mailto:vivyajera@gmail.com">
								<i className="bannerIcon">
									<SiGmail />
								</i>
							</a>
						</div>
					</div>

					<div className="introRight"></div>
				</div>

				<div className="aboutBg">
					<div className="border"></div>
					<h1 className="heading">
						Allow me to <span className="keyword">introduce</span> myself
					</h1>
					<p id="aboutText">
						Salesforce-certified digital marketing specialist with over 3 years
						of experience designing and executing data-driven marketing
						strategies. Skilled in Salesforce Marketing Cloud, Adobe Campaign,
						and front-end/web technologies including HTML, CSS, JavaScript, and
						SQL. Certified as a Salesforce Administrator and Account Engagement
						Specialist, and currently pursuing the Platform Developer I
						certification to deepen technical capabilities. Experienced in
						working with a diverse range of clients, tailoring solutions to meet
						unique business requirements and goals. Known for driving measurable
						results, optimizing customer journeys, and contributing to sustained
						business growth.
					</p>

					<div>
						<h3 className="subHeading">Certifications</h3>
						<div className="aboutIcons">
							<img
								src={require("../images/2025-03_Badge_SF-Certified_Platform-Admin_High-Res.png")}
								alt=""
								className="certIcon"
							/>
							<img
								src={require("../images/2023-07_Badge_SF-Certified_MC-AE-Specialist_High-Res.png")}
								alt=""
								className="certIcon"
							/>
							<img
								src={require("../images/2023-07_Badge_SF-Certified_AI-Associate_High-Res.png")}
								alt=""
								className="certIcon"
							/>
						</div>
					</div>

					<div>
						<h3 className="subHeading">Tech stacks I'm experienced with</h3>
						<div className="aboutIcons">
							<i className="icon">
								<SiReact />
							</i>
							<i className="icon">
								<SiJavascript />
							</i>
							<i className="icon">
								<SiHtml5 />
							</i>
							<i className="icon">
								<SiCss3 />
							</i>
							<i className="icon">
								<SiPhp />
							</i>
							<i className="icon">
								<SiMysql />
							</i>
						</div>
					</div>
					<div id="aboutBtns">
						<a href="#experience">
							<button className="aboutBtn">Learn more</button>
						</a>
						<div id="btnSeperator"></div>
						<a href="mailto:vivyajera@gmail.com">
							<button className="aboutBtn">Get in touch</button>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
