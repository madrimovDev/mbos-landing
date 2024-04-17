import { Data } from "./types";

const data: Data = {
	navbar: {
		menu: [
			{
				href: "home",
				title: "Home",
			},
			{
				href: "about",
				title: "About Company",
			},
			{
				href: "projects",
				title: "Projects",
			},
			{
				href: "services",
				title: "Services",
			},
			{
				href: "employees",
				title: "Employees",
			},
		],
		contact: "Contact",
	},
	welcome: {
		slidesData: [
			{
				img: "/images/bg.jpg",
				title: {
					mark: "MBOS",
					text: "Welcome to IT Company",
				},
				subtitle: "We create conveniences for you",
			},
			{
				img: "/images/bg.jpg",
				title: {
					mark: "10 years of",
					text: "experienced employees",
				},
				subtitle: "We create conveniences for you",
			},
			{
				img: "/images/bg.jpg",
				title: {
					mark: "Quality",
					text: "We offer our services",
				},
				subtitle: "We create conveniences for you",
			},
		],
	},
	header: {
		subtitle: "Multi Branch Online Service",
		title: {
			text: "We Manage",
			mark: "Your Time Efficiently",
		},
		description:
			"MBOS - innovative solutions. We develop websites, mobile apps, telegram bots, online stores, and CRM systems. Join us with our innovative solutions.",
		contact: "Contact",
		aboutUs: "About Us",
		partners: {
			name: "Partners",
			value: "300+",
		},
		users: {
			name: "Users",
			value: "12k",
		},
	},
	about: {
		sectionTitle: "About Company",
		title: "MBOS",
		subtitle: "Multi Branch Online Service",
		descriptions: [
			"The company was founded in February 2020 by Yusupov Mansur, Sahabutdinov Dilshod, and Sobirov Zafarbek with the Mbos startup project, and the company was also named Mbos.",
			'In order to implement the President\'s resolution "On measures to widely introduce the digital economy and electronic government" dated April 28, 2020, the company also engages in developing systems in other areas, including the development of management systems for corporate organizations, in addition to websites, mobile apps.',
		],
	},
	projects: {
		sectionTitle: "Projects",
		projects: [
			{
				name: "MBOS - Online Queue Service",
				type: 'mbos',
				descriptions: [
					"- Currently, in the medical field where queues are most monitored, we systematize queues in community organizations such as clinics, banks, car showrooms, car washes, and gas stations, increasing the efficiency of customer and employee time.",
					"- Online queue takes your time promptly. In addition, during certain months, cashbacks are also given from gas stations and car washes. Collect cashbacks and enjoy free services from Mbos platform.",
				],
				imgs: [
					{
						src: "/images/ip-portrait.png",
						alt: "MBOS",
						width: 256,
						height: 516,
					},
					{
						src: "/images/ip2-portrait.png",
						alt: "MBOS",
						width: 256,
						height: 516,
					},
				],
				stats: [
					{
						value: "12K",
						name: "Users",
					},
					{
						value: "20+",
						name: "Partners",
					},
				],
				downloadLinks: [
					{
						href: "https://www.mbos.uz",
						name: "Google Play",
						img: "/",
					},
					{
						href: "https://www.mbos.uz",
						name: "App Store",
						img: "/",
					},
				],
			},
			{
				name: "Taskie - Automating Company Operations",
				type: 'taskie',
				descriptions: [
					"- Taskie software provides online electronic assignment delivery to employees with deadlines, and it collects information without delaying the completion of tasks by employees.",
					"- It is possible to track the location of employees during work time.",
					"- It is also possible to identify where the employees are and their location through the location system.",
				],
				imgs: [
					{
						src: "/images/taskie.png",
						alt: "Taskie",
						width: 600,
						height: 500,
					},
				],
				stats: [
					{
						value: "500+",
						name: "Users",
					},
					{
						value: "20+",
						name: "Partners",
					},
				],
				downloadLinks: [
					{
						href: "https://play.google.com/store/apps/details?id=com.taskie",
						name: "Google Play",
						img: "/",
					},
					{
						href: "https://apps.apple.com/uz/app/taskie/id1549449444",
						name: "App Store",
						img: "/",
					},
				],
				addonLinks: [
					{
						name: "Try the demo version",
						link: ''
					}
				]
			},
			{
				name: "MBOS GPS",
				type: 'gps',
				imgs: [
					{
						src: "/images/gps-tracking.jpg",
						alt: "Gps",
						width: 500,
						height: 309,
					},
				],
				descriptions: [
					"Business owners, entrepreneurs can apply GPS to their business activities.",
					"Monitoring the whereabouts of vehicles, fuel consumption, distance traveled, speed of movement, and also measuring the temperature of heated and cooled vehicles is possible. Installation is possible for vehicles traveling abroad as well.",
				],
			},
		],
		contact: "Contact",
	},
	services: {
		sectionTitle: "Our Services",
		services: [
			{
				title: "Websites",
				description:
					"A virtual platform located on the Internet, providing purposeful information and services electronically.",
				type: "website",
				trigger: "web-site",
			},
			{
				title: "Online Stores",
				description:
					"Services of selling and delivering products via the Internet. Fast and convenience, safety and efficiency of delivery.",
				type: "e-com", //enum
				trigger: "e-commerce",
			},
			{
				title: "CRM Systems",
				description:
					"A software solution for managing relationships with customers and automating service processes for companies.",
				type: "crm", // enum
				trigger: "crm",
			},
			{
				title: "Telegram Bots",
				description:
					"A program working on Telegram. It helps automate communication with customers and offer services.",
				type: "bot", // enum
				trigger: "tg-bot",
			},
		],
	},
	employees: {
		sectionTitle: "Employees",
		employees: [
			{
				img: "/images/xodimlar/azizbek.jpg",
				blurred: "/images/xodimlar/azizbek-blur.jpg",
				name: "Abdullayev Azizbek",
				position: "B2B Manager",
			},
			{
				img: "/images/xodimlar/dilshod.jpg",
				blurred: "/images/xodimlar/dilshod-blur.jpg",
				name: "Sahabutdinov Dilshod",
				position: "Technical Department Leader",
			},
			{
				img: "/images/xodimlar/madina.jpg",
				blurred: "/images/xodimlar/madina-blur.jpg",
				name: "Saparova Madina",
				position: "Quality Control Manager",
			},
			{
				img: "/images/xodimlar/mansur.jpg",
				blurred: "/images/xodimlar/mansur-blur.jpg",
				name: "Yusupov Mansur",
				position: "Company Leader",
			},
			{
				img: "/images/xodimlar/muxtor.jpg",
				blurred: "/images/xodimlar/muxtor-blur.jpg",
				name: "Saparboyev Muxtor",
				position: "Developer",
			},
			{
				img: "/images/xodimlar/quvondiq.jpg",
				blurred: "/images/xodimlar/quvondiq-blur.jpg",
				name: "Kurbaniyozov Quvondiq",
				position: "Sales Department Leader",
			},
			{
				img: "/images/xodimlar/shoxida.jpg",
				blurred: "/images/xodimlar/shoxida-blur.jpg",
				name: "Rajabboyeva Shohida",
				position: "Finance Department Leader",
			},
			{
				img: "/images/xodimlar/xudoyshukur.jpg",
				blurred: "/images/xodimlar/xudoyshukur-blur.jpg",
				name: "Masharipov Xudoyshukur",
				position: "Technical Developer",
			},
		],
	},
	contact: {
		sectionTitle: "Contact",
		name: "Full Name",
		phonePlaceholder: "Phone",
		message: "Message",
		send: "Send",
		location: "6A Tinchlik Street, Urgench, Khorezm Region, Uzbekistan",
	},
	footer: {
		description:
			"The app regularly provides many exciting updates. Additionally, the app is constantly updated, providing users with many conveniences.",
		siteMap: {
			title: "Site Map",
			items: [
				{
					href: "home",
					title: "Home",
				},
				{
					href: "about",
					title: "About Company",
				},
				{
					href: "projects",
					title: "Projects",
				},
				{
					href: "employees",
					title: "Employees",
				},
			],
		},
		projects: {
			title: "Projects",
			items: [
				{
					href: "#mbos",
					title: "Mbos - Online Queue",
				},
				{
					href: "#taskie",
					title: "Taskie - Employee Monitoring",
				},
				{
					href: "#gps",
					title: "Monitoring",
				},
				{
					href: "#mbos",
					title: "Electronic Queue",
				},
			],
		},
	},
	coreData: {
		location: "6A Tinchlik Street, Urgench, Khorezm Region, Uzbekistan",
		phone: ["+998 71 200 11 51", "+998 62 227 76 76"],
		email: "example@mail.co",
		telegram: "https://t.me/mbosuzb",
		instagram: "https://instagram.com/mbosuzb",
		facebook: "https://fb.com/mbosuzb",
	},
	modalData: {
		messageTitle: '',
		nameTitle: '',
		phoneTitle: '',
		notification: {
			marked: 'Thank you for choosing us',
			contact: (phone: string[]) => `You can contact us directly at ${phone.join(' or ')}`,
			message: "We will contact you shortly after your message is sent."
		},
		namePlaceholder: 'Enter your name',
		phonePlaceholder: 'Enter your phone number',
		phoneExample: 'Example: +99891 123 45 67',
		messagePlaceholder: 'Enter the content of your message',
		sendMessage: 'Send Message',
		successMessage: 'Your message has been sent'
	}
};

export default data;
