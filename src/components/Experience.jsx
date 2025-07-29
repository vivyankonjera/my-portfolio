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
						<p>Salesforce technical consultant</p>
						<p className="expDate">November 2024 – Present </p>
					</div>
					<p className="expDes">
						Salesforce Account Engagement Specialist, focused on marketing
						automation, lead nurturing, and campaign optimization. Managed
						Salesforce Marketing Cloud Account Engagement (Pardot) to enhance
						sales and marketing alignment, streamline workflows, and drive
						engagement. Salesforce Core Administration, including user
						management, data integrity, and process automation. Responsible for
						integrating Account Engagement with Salesforce Core to ensure
						seamless data flow, efficient lead management, and actionable
						reporting. Working closely with a diverse range of clients to tailor
						solutions that meet unique business goals and requirements.
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
						<p className="timelineTitle">Marcloud Consulting</p>
						<p>Salesforce consultant</p>
						<p className="expDate">May – July 2024</p>
					</div>
					<p className="expDes">
						Specialized as a Salesforce Developer in designing and implementing
						email templates and landing pages to elevate marketing strategies
						and drive customer engagement. Enhancing implementations of SFMC
						using Visualforce, and Lightning Web Components. Construction of
						personalised customer journeys to improve open and conversion rates.
						Additionally, enabled effective lead capture and data tracking for
						reporting and campaign optimization.
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
						<p className="timelineTitle">RICS </p>
						<p>Adobe Campaign specialist</p>
						<p className="expDate">October 2022 – March 2024</p>
					</div>
					<p className="expDes">
						As the businesses’ main point of contact for email communications,
						the role’s comprised of managing the business’s outbound email
						calendar, in addition to building custom emails, allocating
						communication slots for business departments & providing direction
						on best email practices and brand guidelines.{" "}
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
						<p className="timelineTitle">Boots UK</p>
						<p>HTML email developer </p>
						<p className="expDate">January 2022 – August 2022</p>
					</div>
					<p className="expDes">
						Ensuring marketing communications are delivered a timely manner,
						whilst coordinating with other marketing departments. Working
						primarily with Adobe campaign and adobe experience manager, emails
						were developed using a combination of HTML, CSS &amp; JavaScript.
						Providing a personalised marketing experience to customers. Also
						responsible for customer communications via the official Boots UK
						mobile application.
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
						<p className="timelineTitle">GoDaddy</p>
						<p>Hosting Sales & Support </p>
						<p className="expDate">November 2020 – April 2021</p>
					</div>
					<p className="expDes">
						As part of hosting support, responsibilities consisted of diagnosing
						various web hosting related issues users may have been experiencing.
						Issues ranged from DNS matters, website migrations and general
						maintenance of their web servers. An additional duty included
						consulting customers on the various web services offered by the
						company and advising how they could be best utilised to fit their
						requirements.
					</p>
					<div className="expBottom"></div>
				</section>
			</div>
		</section>
	);
};

export default Experience;
