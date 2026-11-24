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
	tagline: "Salesforce, engineered right",
	// How you describe yourself today (past job titles stay as they were in `experience`)
	role: "Salesforce Developer",
	summary:
		"Salesforce developer building on the platform with Apex, Lightning Web Components, JavaScript and SQL, backed by 3+ years delivering Salesforce and Marketing Cloud solutions.",
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
		"I’m a Salesforce developer with over three years of hands-on experience. I build with Apex, Lightning Web Components and SOQL/SQL to extend Salesforce where standard functionality falls short, and I’m comfortable across the stack, from JavaScript and HTML/CSS through to data.",
		"My work spans end-to-end delivery: data modelling, integrations, automation and reporting on Salesforce Core, alongside Marketing Cloud and Account Engagement. I work across solution design and build so implementations stay maintainable, performant and ready to scale.",
		"Before Salesforce, I hand-coded HTML, CSS and JavaScript templates and landing pages for brands like Boots UK, and I’ve built full-stack apps with React, PHP and MySQL.",
	],
	stats: [
		{ value: "3+", label: "years hands-on Salesforce delivery" },
		{ value: "3", label: "Salesforce certifications" },
		{ value: "Apex · LWC · JS · SQL", label: "core development stack", isText: true },
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
			"Apex and Lightning Web Component customisations, Salesforce Core administration and automation, plus Marketing Cloud and Account Engagement delivery.",
		description:
			"Customised Salesforce instances using Apex and Lightning Web Components (LWC) to meet unique client requirements. Managed Salesforce Core administration, including user management, data integrity and process automation, and created dashboards and reports to deliver actionable business insights. Delivered marketing automation, lead nurturing and campaign optimisation across Marketing Cloud and Account Engagement (Pardot), building campaigns with Email Studio, Journey Builder, Automation Studio and Content Builder, and developing AMPscript-based dynamic personalisation.",
		tools: [
			"Apex",
			"LWC",
			"Salesforce Core",
			"Marketing Cloud",
			"Account Engagement",
			"AMPscript",
		],
	},
	{
		id: "marcloud",
		company: "Marcloud Consulting",
		role: "Account Engagement Consultant",
		dates: "May – Jul 2024",
		logo: require("../images/Marcloud-Logo.jpeg"),
		summary:
			"HTML, CSS and JavaScript templates and landing pages, plus Account Engagement automation integrated with Salesforce Core.",
		description:
			"Built dynamic email templates and landing pages using HTML, CSS and JavaScript, aligned with brand guidelines and campaign objectives. Integrated Account Engagement with Salesforce Core to enable accurate lead tracking, seamless data flow and actionable reporting for sales teams. Developed automation rules, completion actions and segmentation lists to streamline lead qualification and assignment, and built Engagement Studio programs for personalised, multi-touch journeys.",
		tools: ["HTML", "CSS", "JavaScript", "Account Engagement", "Engagement Studio"],
	},
	{
		id: "rics",
		company: "RICS",
		role: "CRM Technical Specialist",
		dates: "Oct 2022 – Mar 2024",
		logo: require("../images/RICS-LOGO.png"),
		summary:
			"Custom HTML email templates and automated communications in Adobe Campaign Standard.",
		description:
			"Created custom HTML email templates and automated marketing communications using Adobe Campaign Standard, improving operational efficiency across business units. Managed the communications calendar through Monday.com for streamlined planning and execution, and provided email best practice guidance to maintain brand consistency and audience engagement.",
		tools: ["HTML email", "Adobe Campaign Standard", "Monday.com"],
	},
	{
		id: "boots",
		company: "Boots UK",
		role: "Adobe Campaign Specialist",
		dates: "Jan – Aug 2022",
		logo: require("../images/Boots-UK-Logo.png"),
		summary:
			"HTML, CSS and JavaScript templates in Adobe Campaign Classic and AEM, Movable Ink personalisation and Airship app messaging.",
		description:
			"Developed email templates in Adobe Campaign Classic and Adobe Experience Manager using HTML, CSS and JavaScript, supporting scalable, brand-aligned digital campaigns. Integrated Movable Ink to add dynamic, personalised content, managed mobile app communications via Airship for targeted, real-time messaging, and coordinated multi-channel delivery to keep messaging consistent and on time.",
		tools: [
			"HTML",
			"CSS",
			"JavaScript",
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
