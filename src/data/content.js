/*
 * Site content — single source of truth.
 *
 * Every fact here comes from the existing site or its git history.
 * Anything missing is marked with PLACEHOLDER so it is easy to find:
 * search this file for "PLACEHOLDER" before deploying.
 */

export const PLACEHOLDER = "[Placeholder]";

export const profile = {
	name: "Vivya Nkonjera",
	firstName: "Vivya",
	// Name shown large in the hero (styled uppercase as "VEE")
	displayName: "Vee",
	brand: "VEECODESFORCE",
	tagline: "Automation engineered right",
	role: "Salesforce Technical Consultant",
	summary:
		"Salesforce certified technical consultant helping businesses implement and optimise Salesforce and Marketing Cloud to drive scalable sales and marketing operations.",
	// PLACEHOLDER: add an email address to show a "copy email" / mailto option.
	email: "",
	// PLACEHOLDER: add your CV as /public/resume.pdf and set this to "/resume.pdf".
	resumeUrl: "",
	// PLACEHOLDER: optional location / availability line, e.g. "London, UK · Open to roles".
	location: "",
};

export const links = {
	github: "https://github.com/vivyankonjera?tab=repositories",
	linkedin: "https://linkedin.com/in/vivya-nkonjera-114a712bb",
	trailblazer: "https://www.salesforce.com/trailblazer/sb7kb73xxtqfenwrfn",
};

export const about = {
	paragraphs: [
		"I’m a Salesforce certified technical consultant helping businesses implement and optimise Salesforce and Marketing Cloud to drive scalable sales and marketing operations. With over three years of hands-on experience, I deliver robust CRM and marketing automation solutions built around clean data, efficient processes, and clear business requirements.",
		"My experience includes end-to-end Salesforce delivery, including data modelling, integrations, audience segmentation, campaign automation, and reporting across Salesforce Core, Marketing Cloud, and Account Engagement. I work across both solution design and build to ensure implementations are maintainable, performant, and ready to scale.",
		"I also bring strong development capability in Apex, Lightning Web Components, and SOQL and SQL, allowing me to extend Salesforce where standard functionality falls short.",
	],
	stats: [
		{ value: "3+", label: "years hands-on Salesforce delivery" },
		{ value: "3", label: "Salesforce certifications" },
		{ value: "4", label: "roles across CRM & marketing tech" },
	],
	skillGroups: [
		{
			label: "Salesforce platform",
			items: [
				"Salesforce Core",
				"Marketing Cloud",
				"Account Engagement (Pardot)",
				"Journey Builder",
				"Automation Studio",
				"Email Studio",
				"Content Builder",
			],
		},
		{
			label: "Development",
			items: ["Apex", "Lightning Web Components", "SOQL", "SQL", "AMPscript"],
		},
		{
			label: "Web & marketing tech",
			items: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"PHP",
				"MySQL",
				"Adobe Campaign",
				"Movable Ink",
				"Airship",
			],
		},
	],
	certifications: [
		{
			name: "Salesforce Certified Platform Administrator",
			image: require("../images/2025-03_Badge_SF-Certified_Platform-Admin_High-Res.png"),
		},
		{
			name: "Salesforce Certified Marketing Cloud Account Engagement Specialist",
			image: require("../images/2023-07_Badge_SF-Certified_MC-AE-Specialist_High-Res.png"),
		},
		{
			name: "Salesforce Certified AI Associate",
			image: require("../images/2023-07_Badge_SF-Certified_AI-Associate_High-Res.png"),
		},
	],
};

/* Dates restored from the site's git history (commit 43ffbf1). */
export const experience = [
	{
		id: "simpala",
		company: "Simpala",
		role: "Salesforce Technical Consultant",
		dates: "Nov 2024 – Nov 2025",
		logo: require("../images/Simpala-Logo.jpeg"),
		summary:
			"Marketing automation, lead nurturing and campaign optimisation across Marketing Cloud, Account Engagement and Salesforce Core.",
		description:
			"Specialising in marketing automation, lead nurturing, and campaign optimisation using Salesforce Marketing Cloud and Account Engagement (Pardot). Built targeted campaigns leveraging Email Studio, Journey Builder, Automation Studio, and Content Builder, while developing AMPscript-based dynamic personalisation to enhance customer journeys. Managed Salesforce Core administration, including user management, data integrity, and process automation, and created dashboards and reports to deliver actionable business insights. Customised Salesforce instances using Apex and Lightning Web Components (LWC) to meet unique client requirements.",
		tools: [
			"Marketing Cloud",
			"Account Engagement",
			"Journey Builder",
			"AMPscript",
			"Apex",
			"LWC",
		],
	},
	{
		id: "marcloud",
		company: "Marcloud Consulting",
		role: "Account Engagement Consultant",
		dates: "May – Jul 2024",
		logo: require("../images/Marcloud-Logo.jpeg"),
		summary:
			"Engagement Studio programs, dynamic templates and lead qualification automation integrated with Salesforce Core.",
		description:
			"Built and managed Engagement Studio programs to drive prospect engagement through personalised, multi-touch journeys. Created dynamic email templates and landing pages using HTML, CSS, and JavaScript aligned with brand guidelines and campaign objectives. Developed automation rules, completion actions, and segmentation lists to streamline lead qualification and assignment. Integrated Account Engagement with Salesforce Core to enable accurate lead tracking, seamless data flow, and actionable reporting for sales teams.",
		tools: ["Account Engagement", "Engagement Studio", "HTML", "CSS", "JavaScript"],
	},
	{
		id: "rics",
		company: "RICS",
		role: "CRM Technical Specialist",
		dates: "Oct 2022 – Mar 2024",
		logo: require("../images/RICS-LOGO.png"),
		summary:
			"Automated marketing communications with Adobe Campaign Standard and owned the email template and calendar workflow.",
		description:
			"Automated marketing communications using Adobe Campaign Standard, improving operational efficiency across business units. Created custom HTML email templates and managed the communications calendar through Monday.com to ensure streamlined planning and execution. Provided email marketing best practice guidance to maintain brand consistency and maximise audience engagement across campaigns.",
		tools: ["Adobe Campaign Standard", "HTML email", "Monday.com"],
	},
	{
		id: "boots",
		company: "Boots UK",
		role: "Adobe Campaign Specialist",
		dates: "Jan – Aug 2022",
		logo: require("../images/Boots-UK-Logo.png"),
		summary:
			"Multi-channel campaign delivery, Adobe Campaign Classic templates, Movable Ink personalisation and Airship app messaging.",
		description:
			"Managed delivery of marketing communications across multiple channels to ensure consistent messaging and timely execution. Developed email templates in Adobe Campaign Classic and Adobe Experience Manager using HTML, CSS, and JavaScript, supporting scalable and brand-aligned digital campaigns. Integrated Movable Ink to enhance email personalisation with dynamic content, and managed mobile app customer communications via Airship to deliver targeted, real-time messaging.",
		tools: [
			"Adobe Campaign Classic",
			"Adobe Experience Manager",
			"Movable Ink",
			"Airship",
		],
	},
];

export const projects = [
	{
		id: "ticketly",
		title: "Ticketly",
		tagline: "Helpdesk for website issues",
		theme: "indigo",
		image: require("../images/ticketly.png"),
		imageAlt: "Ticketly login screen with a glowing globe illustration",
		description:
			"Ticketly is a helpdesk system that allows users to raise tickets related to website issues. It's built using React on the front-end accompanied by a Firebase back-end.",
		stack: ["React", "Firebase"],
		context: "Personal project",
		// PLACEHOLDER: what you built, key features, what you learned.
		details: [],
		repo: "https://github.com/vivyankonjera/ticketly",
		live: "",
	},
	{
		id: "frugal",
		title: "Frugal",
		tagline: "Expense monitor web app",
		theme: "green",
		image: require("../images/fdeskmob.png"),
		imageAlt: "Frugal expense monitor login page with a green navigation bar",
		description:
			"Frugal was developed as part of my web development module's assessment. It's a full-stack application using the MVC architecture. The front-end is made up of Blade templates supported by a Laravel back-end.",
		stack: ["Laravel", "MySQL", "Bootstrap"],
		context: "University module assessment",
		// PLACEHOLDER: what you built, key features, what you learned.
		details: [],
		repo: "https://github.com/vivyankonjera/frugal",
		live: "",
	},
	{
		id: "placeholder-salesforce",
		placeholder: true,
		title: "Salesforce case study",
		tagline: "PLACEHOLDER — add a recent project",
		theme: "magenta",
		image: null,
		imageAlt: "",
		description:
			"PLACEHOLDER: a short, anonymised write-up of a recent Salesforce or Marketing Cloud build — the problem, your approach and the result.",
		stack: [],
		context: "PLACEHOLDER",
		details: [],
		repo: "",
		live: "",
	},
];
