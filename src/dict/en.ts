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
				title: "About",
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
					mark: "Experience",
					text: "10 years of employee experience",
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
			text: "We Save",
			mark: "Your Time",
		},
		description:
			"MBOS - innovative solutions. We develop websites, mobile applications, telegram bots, online stores, and CRM systems. With our services, you'll be at the forefront of innovations.",
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
		sectionTitle: "About",
		title: "MBOS",
		subtitle: "Multi Branch Online Service",
		descriptions: [
			"The company was founded in February 2020 by Mansur Yusupov, Dilshod Sahobiddinov, and Zafarbek Sobirov, starting with the Mbos startup project, which was eventually named Mbos company.",
			'In order to implement the President\'s decision on "broad introduction of digital economy and e-government," our company develops management systems for enterprises in other areas, including website development, mobile applications.',
		],
	},
	projects: {
		sectionTitle: "Projects",
		projects: [
			{
				name: "MBOS - Online Navbar Service",
				descriptions: [
					"- We develop a navbar system for the most popular queues in medicine, clinics, metros, car washes.",
					"- The online navbar takes orders and solves them on time. Additionally, cashbacks are provided from subways and car washes during certain days. They can be used by accumulating them.",
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
				name: "Taskie - Enterprise Activity Automation",
				descriptions: [
					"- Taskie allows employees to arrive on time, receive online tasks provided in electronic form before the deadline.",
					"- Real-time tracking of employee location even if they haven't completed their tasks on time.",
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
			},
			{
				name: "MBOS GPS",
				imgs: [
					{
						src: "/images/gps-tracking.jpg",
						alt: "Gps",
						width: 500,
						height: 309,
					},
				],
				descriptions: [
					"GPS can be used by business owners, entrepreneurs for their business operations.",
					"Features include measuring fuel consumption, distance traveled, speed, and installation on vehicles with refrigeration units.",
				],
			},
		],
		contact: "Contact",
	},
	services: {
		sectionTitle: "Services",
		services: [
			{
				title: "Websites",
				description:
					"A virtual platform providing targeted information and services electronically via the Internet.",
				type: "web",
				trigger: "web-site",
			},
			{
				title: "Online Stores",
				description:
					"Services for selling and delivering goods online. Fast and convenient, with security and delivery efficiency.",
				type: "e-commerce",
				trigger: "e-commerce",
			},
			{
				title: "CRM Systems",
				description:
					"Software for automating customer relationship management processes and providing services to companies.",
				type: "crm",
				trigger: "crm",
			},
			{
				title: "Telegram Bots",
				description:
					"A program operating in Telegram. Helps automate communication with customers, offer services.",
				type: "bot",
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
				name: "Abdullaev Azizbek",
				position: "Customer Relationship Manager",
			},
			{
				img: "/images/xodimlar/dilshod.jpg",
				blurred: "/images/xodimlar/dilshod-blur.jpg",
				name: "Sahabutdinov Dilshod",
				position: "Head of Technical Department",
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
				position: "Company Director",
			},
			{
				img: "/images/xodimlar/muxtor.jpg",
				blurred: "/images/xodimlar/muxtor-blur.jpg",
				name: "Saparboev Mukhtor",
				position: "Developer",
			},
			{
				img: "/images/xodimlar/quvondiq.jpg",
				blurred: "/images/xodimlar/quvondiq-blur.jpg",
				name: "Kurbaniozov Quvondiq",
				position: "Sales Department Head",
			},
			{
				img: "/images/xodimlar/shoxida.jpg",
				blurred: "/images/xodimlar/shoxida-blur.jpg",
				name: "Rajabboeva Shohida",
				position: "Finance Department Head",
			},
			{
				img: "/images/xodimlar/xudoyshukur.jpg",
				blurred: "/images/xodimlar/xudoyshukur-blur.jpg",
				name: "Mashirov Khudoyshukur",
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
		location: "Tinchlik Street, House 6a, Urgench, Khorezm Region, Uzbekistan",
	},
	footer: {
		description:
			"Various updates are regularly conducted in the application, ensuring continuous application updates, which in turn create many conveniences for users.",
		siteMap: {
			title: "Site Map",
			items: [
				{
					href: "home",
					title: "Home",
				},
				{
					href: "about",
					title: "About",
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
					title: "Mbos - Online Navbar",
				},
				{
					href: "#taskie",
					title: "Taskie - Employee Monitoring",
				},
				{
					href: "#gps",
					title: "Tracking",
				},
				{
					href: "#mbos",
					title: "Electronic Navbar",
				},
			],
		},
	},
	coreData: {
		location: "Tinchlik Street, House 6a, Urgench, Khorezm Region, Uzbekistan",
		phone: ["+998 71 200 11 51", "+998 62 227 76 76"],
		email: "example@mail.co",
		telegram: "https://t.me/mbosuzb",
		instagram: "https://instagram.com/mbosuzb",
		facebook: "https://fb.com/mbosuzb",
	},
};

export default data;

