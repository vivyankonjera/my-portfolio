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
	SiLinkedin,
	SiSalesforce,
} from "react-icons/si";

const About = () => {
	return (
		<>
			<section className="sectionContainer" id="intro">
				<div className="introWrapper">
					<div className="introLeft">
						<div className="centreIntro">
							<h1 id="name">Vivya Nkonjera</h1>
							<h2 id="title">
								Certified <b>Salesforce</b> Developer
							</h2>
							{/* <i className='bannerIcon'>
                                <SiLinkedin />
                            </i> */}
							<a
								href="https://github.com/vivyankonjera?tab=repositories"
								target="_blank"
								rel="noreferrer"
							>
								<i className="bannerIcon">
									<SiGithub />
								</i>
							</a>
							<a
								href="https://linkedin.com/in/vivya-nkonjera-114a712bb"
								target="_blank"
								rel="noreferrer"
							>
								<i className="bannerIcon">
									<SiLinkedin />
								</i>
							</a>
							<a href="https://www.salesforce.com/trailblazer/sb7kb73xxtqfenwrfn">
								<i className="bannerIcon">
									<SiSalesforce />
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

					<div>
						{/* <h3 className="subHeading">Certifications</h3> */}
						<div className="aboutIcons">
							{/* 	<img
								src={require("../images/SF-Platform-Developer.png")}
								alt=""
								className="certIcon"
							/> */}
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

					<p className="aboutText">
						I’m a Salesforce-certified technical consultant with 3+ years of
						hands-on experience helping brands turn data into meaningful
						customer experiences. I’ve worked across a range of industries,
						building smart, personalized marketing strategies using tools like
						Salesforce Core, Marketing Cloud, and Adobe Campaign.
					</p>

					<p className="aboutText">
						Alongside my CRM and automation ability, I have a strong foundation
						in front-end and web technologies — including HTML, CSS, JavaScript,
						SQL, and modern JavaScript frameworks like React. This technical
						versatility helps me bridge the gap between strategy and execution,
						bringing ideas to life through both code and creativity. I’m
						certified as a Salesforce Administrator and Account Engagement
						Specialist, and currently working toward the Platform Developer I
						certification to expand my development capabilities.
					</p>
					<p className="aboutText">
						Beyond the tech, I’m passionate about clean design and intuitive UX.
						I love creating digital experiences that not only look good but feel
						good to use. Whether it’s crafting a seamless user journey or
						tailoring solutions to fit a client’s unique business goals, I’m all
						about combining function and form to deliver real results.
					</p>

					<div>
						<h3 className="subHeading">My Tech stacks</h3>
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
						<a
							href="https://linkedin.com/in/vivya-nkonjera-114a712bb"
							target="_blank"
							rel="noreferrer"
						>
							<button className="aboutBtn">Get in touch</button>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
