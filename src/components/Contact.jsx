import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Contact = () => {
	return (
		<section>
			<div className="sectionContainer" id="contact">
				<h1 className="heading">
					Keep in <span className="keyword">Touch</span>
				</h1>
				<h3 id="contactFollowUp">
					This doesn't have to be the end, please do not hesitate to <br />{" "}
					reach out on the following...
				</h3>

				<div className="footerIcons">
					<a
						href="https://linkedin.com/in/vivya-nkonjera-114a712bb"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bannerIcon contactIcon">
							<SiLinkedin />
						</i>
					</a>

					<a
						href="https://github.com/vivyankonjera?tab=repositories"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bannerIcon contactIcon">
							<SiGithub />
						</i>
					</a>

					{/* <i className='bannerIcon contactIcon'>
                        <SiLinkedin />
                    </i> */}
				</div>
			</div>
		</section>
	);
};

export default Contact;
