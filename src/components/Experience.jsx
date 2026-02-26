import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { MdReadMore } from "react-icons/md";

const Experience = () => {
	return (
		<section id="experience" className="sectionContainer expSection">
			<div className="w90">
				<div id="headingContainer">
					<h1 className="heading" id="experiencePrompt">
						Business <span className="keyword">Experience</span>
					</h1>
				</div>

				<div id="timeline">
					<a href="#experience" id="">
						<BsArrowUpCircleFill id="timelineEnd" />
					</a>
				</div>

				<div className="timelineRow rowLeft">
					<section>
						<div className="timelineMark">
							<div className="centerMark"></div>
						</div>
						<div className="expTop">
							<div className="companyAndRole">
								<p className="timelineTitle">Simpala</p>
								<p className="jobRole">Salesforce Technical Consultant</p>
							</div>
							<img
								className="companyLogo"
								src={require("../images/Simpala-Logo.jpeg")}
								alt="Simpala Logo"
							/>
						</div>
						<p className="expDes">
							Specializing in marketing automation, lead nurturing, and campaign
							optimization using Salesforce Marketing Cloud and Account
							Engagement (Pardot) by Salesforce. Built targeted campaigns
							leveraging Email Studio, Journey Builder, Automation Studio, and
							Content Builder, while developing AMPscript-based dynamic
							personalization to enhance customer journeys. Managed Salesforce
							Core administration, including user management, data integrity,
							and process automation, and created dashboards and reports to
							deliver actionable business insights. Additionally, customized
							Salesforce instances using Apex and Lightning Web Components (LWC)
							to meet unique client requirements and enhance overall platform
							functionality.
						</p>
						<div className="expBottom"></div>
					</section>
				</div>

				<div className="timelineRow rowRight">
					<section>
						<div className="timelineMark">
							<div className="centerMark"></div>
						</div>
						<div className="expTop">
							<div className="companyAndRole">
								<p className="timelineTitle">Marcloud Consulting</p>
								<p className="jobRole">Account Engagement Consultant</p>
							</div>
							<img
								className="companyLogo"
								src={require("../images/Marcloud-Logo.jpeg")}
								alt="Marcloud Logo"
							/>
						</div>
						<p className="expDes">
							Built and managed Engagement Studio programs to drive prospect
							engagement through personalized, multi-touch journeys. Created
							dynamic email templates and landing pages using HTML, CSS, and
							JavaScript to ensure alignment with brand guidelines and campaign
							objectives. Developed automation rules, completion actions, and
							segmentation lists to streamline lead qualification and assignment
							processes. Integrated Account Engagement with Salesforce Core to
							enable accurate lead tracking, seamless data flow, and actionable
							reporting that empowered sales teams to respond effectively.
						</p>
						<div className="expBottom"></div>
					</section>
				</div>

				<div className="timelineRow rowLeft">
					<section>
						<div className="timelineMark">
							<div className="centerMark"></div>
						</div>
						<div className="expTop">
							<div className="companyAndRole">
								<p className="timelineTitle">RICS </p>
								<p className="jobRole">CRM Technical Specialist</p>
							</div>
							<img
								className="companyLogo"
								src={require("../images/RICS-LOGO.png")}
								alt="RICS Logo"
							/>
						</div>
						<p className="expDes">
							Automated marketing communications using Adobe Campaign Standard
							by Adobe, improving operational efficiency across business units.
							Created custom HTML email templates and managed the communications
							calendar through Monday.com to ensure streamlined planning and
							execution. Provided strategic email marketing best practices to
							maintain brand consistency and maximize audience engagement across
							campaigns.
						</p>
						<div className="expBottom"></div>
					</section>
				</div>

				<div className="timelineRow rowRight">
					<section>
						<div className="timelineMark">
							<div className="centerMark"></div>
						</div>
						<div className="expTop">
							<div className="companyAndRole">
								<p className="timelineTitle">Boots UK</p>
								<p className="jobRole">Adobe Campaign Specialist</p>
							</div>
							<img
								className="companyLogo"
								src={require("../images/Boots-UK-Logo.png")}
								alt="Boots UK Logo"
							/>
						</div>
						<p className="expDes">
							Managed delivery of marketing communications across multiple
							channels to ensure consistent messaging and timely execution.
							Developed email templates in Adobe Campaign Classic and Adobe
							Experience Manager using HTML, CSS, and JavaScript through Adobe,
							supporting scalable and brand-aligned digital campaigns.
							Integrated Movable Ink to enhance email personalization with
							dynamic content capabilities, and managed mobile app customer
							communications via Airship to deliver targeted, real-time
							messaging experiences.
						</p>
						<div className="expBottom"></div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default Experience;
