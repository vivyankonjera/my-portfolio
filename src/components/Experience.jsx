import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { MdReadMore } from "react-icons/md";

const Experience = () => {
	return (
		<section id="experience" className="sectionContainer expSection">
			<div id="headingContainer">
				<h1 className="heading" id="experiencePrompt">
					My <span className="keyword">Experience</span> thus far
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
						<p className="timelineTitle">Simpala </p>
						<p>Salesforce Technical Consultant</p>
						<p className="expDate">November 2024 – November 2025</p>
					</div>
					<ul>
						<li className="expDes">
							Specializing in marketing automation, lead nurturing, and campaign
							optimization using Salesforce Marketing Cloud and Account
							Engagement (Pardot).
						</li>
						<li className="expDes">
							Built targeted campaigns leveraging Email Studio, Journey Builder,
							Automation Studio, and Content Builder.
						</li>
						<li className="expDes">
							Developed AMPscript-based dynamic personalisation to enhance
							customer journeys.
						</li>
						<li className="expDes">
							Managed Salesforce Core administration (user management, data
							integrity, process automation) and developed dashboards and
							reports to provide actionable business insights.
						</li>

						<li className="expDes">
							Customised Salesforce instances using Apex and Lightning Web
							Components (LWC) to meet unique client requirements and enhance
							platform functionality.
						</li>
					</ul>
					<div className="expBottom"></div>
				</section>
			</div>

			<div className="timelineRow rowRight">
				<section>
					<div className="timelineMark">
						<div className="centerMark"></div>
					</div>
					<div className="expTop">
						<p className="timelineTitle">Marcloud Consulting</p>
						<p>Salesforce Consultant</p>
						<p className="expDate">May – July 2024</p>
					</div>
					<ul>
						<li className="expDes">
							Built and managed Engagement Studio programs to drive prospect
							engagement through personalised, multi-touch journeys.
						</li>
						<li className="expDes">
							Created dynamic email templates and landing pages using HTML, CSS,
							and JavaScript to align with brand and campaign objectives.
						</li>
						<li className="expDes">
							Developed automation rules, completion actions, and segmentation
							lists to streamline lead qualification and assignment.
						</li>
						<li className="expDes">
							Integrated Account Engagement with Salesforce Core to ensure
							accurate lead tracking, seamless data flow, and actionable
							reporting for sales teams.
						</li>
					</ul>
					<div className="expBottom"></div>
				</section>
			</div>

			<div className="timelineRow rowLeft">
				<section>
					<div className="timelineMark">
						<div className="centerMark"></div>
					</div>
					<div className="expTop">
						<p className="timelineTitle">RICS </p>
						<p>CRM Technical Specialist</p>
						<p className="expDate">October 2022 – March 2024</p>
					</div>
					<ul>
						<li className="expDes">
							Automated marketing communications using Adobe Campaign Standard,
							improving operational efficiency across business units.
						</li>
						<li className="expDes">
							Created custom HTML email templates and managed the communications
							calendar via Monday.com.
						</li>
						<li className="expDes">
							Provided strategic email best practices to ensure brand
							consistency and maximize engagement.
						</li>
					</ul>
					<div className="expBottom"></div>
				</section>
			</div>

			<div className="timelineRow rowRight">
				<section>
					<div className="timelineMark">
						<div className="centerMark"></div>
					</div>
					<div className="expTop">
						<p className="timelineTitle">Boots UK</p>
						<p>Adobe Campaign Specialist</p>
						<p className="expDate">January 2022 – August 2022</p>
					</div>
					<ul>
						<li className="expDes">
							Managed delivery of marketing communications across multiple
							channels.
						</li>
						<li className="expDes">
							Developed email templates in Adobe Campaign Classic and Adobe
							Experience Manager using HTML, CSS, and JavaScript.
						</li>
						<li className="expDes">
							Integrated Movable Ink for enhanced email personalisation.
						</li>
						<li className="expDes">
							Managed mobile app customer communications via Airship.
						</li>
					</ul>
					<div className="expBottom"></div>
				</section>
			</div>
		</section>
	);
};

export default Experience;
