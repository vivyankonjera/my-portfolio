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
						<div className="bannerShape"></div>
						<div className="centreIntro">
							<h1 id="name">VEECODESFORCE</h1>
							<h2 id="title">
								Automation <b>Engineered Right</b>
							</h2>
							{/* <i className='bannerIcon'>
                                <SiLinkedin />
                            </i> */}
							<div className="bannerIcons">
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
								<a
									href="https://www.salesforce.com/trailblazer/sb7kb73xxtqfenwrfn"
									target="_blank"
									rel="noreferrer"
								>
									<i className="bannerIcon">
										<SiSalesforce />
									</i>
								</a>
							</div>
						</div>
					</div>

					<div className="introRight">
						<div className="bannerShapeRight"></div>
					</div>
				</div>

				<div class="aboutBg">
					<div class="aboutC w90">
						<div class="certificationsContainer">
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
						<div class="aboutTextContainer">
							<h1 class="heading aboutText">
								A brief <span class="keyword">introduction</span>
							</h1>
							<p class="aboutText">
								I’m a Salesforce certified technical consultant helping
								businesses implement and optimize Salesforce and Marketing Cloud
								to drive scalable sales and marketing operations. With over
								three years of hands-on experience, I deliver robust CRM and
								marketing automation solutions built around clean data,
								efficient processes, and clear business requirements. My
								experience includes end to end Salesforce delivery, including
								data modeling, integrations, audience segmentation, campaign
								automation, and reporting across Salesforce Core, Marketing
								Cloud, and Account Engagement. I work across both solution
								design and build to ensure implementations are maintainable,
								performant, and ready to scale. I also bring strong development
								capability in Apex, Lightning Web Components, and SOQL and SQL,
								allowing me to extend Salesforce where standard functionality
								falls short.
							</p>
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
									<button class="aboutBtn">Get in touch</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
