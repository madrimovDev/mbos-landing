import { Data } from "./types";

const data: Data = {
	navbar: {
		menu: [
			{
				href: "home",
				title: "Главная",
			},
			{
				href: "about",
				title: "О компании",
			},
			{
				href: "projects",
				title: "Проекты",
			},
			{
				href: "services",
				title: "Услуги",
			},
			{
				href: "employees",
				title: "Сотрудники",
			},
		],
		contact: "Контакты",
	},
	welcome: {
		slidesData: [
			{
				img: "/images/bg.jpg",
				title: {
					mark: "MBOS",
					text: "Добро пожаловать в IT-компанию",
				},
				subtitle: "Мы создаем удобства для вас",
			},
			{
				img: "/images/bg.jpg",
				title: {
					mark: "10 лет опыта",
					text: "опытных сотрудников",
				},
				subtitle: "Мы создаем удобства для вас",
			},
			{
				img: "/images/bg.jpg",
				title: {
					mark: "Качественные",
					text: "Мы предлагаем наши услуги",
				},
				subtitle: "Мы создаем удобства для вас",
			},
		],
	},
	header: {
		subtitle: "Мультибрендовая онлайн-сервисная компания",
		title: {
			text: "Мы эффективно",
			mark: "управляем вашим временем",
		},
		description:
			"MBOS - инновационные решения. Мы разрабатываем веб-сайты, мобильные приложения, боты для Telegram, онлайн-магазины и системы CRM. Присоединяйтесь к нам с нашими инновационными решениями.",
		contact: "Контакты",
		aboutUs: "О нас",
		partners: {
			name: "Партнеры",
			value: "300+",
		},
		users: {
			name: "Пользователи",
			value: "12k",
		},
	},
	about: {
		sectionTitle: "О компании",
		title: "MBOS",
		subtitle: "Мультибрендовая онлайн-сервисная компания",
		descriptions: [
			"Компания была основана в феврале 2020 года Юсуповым Мансуром, Сахабутдиновым Дильшодом и Собировым Зафарбеком с проектом стартапа Mbos, и также названа Mbos.",
			'В целях реализации постановления Президента "О мерах по широкому внедрению цифровой экономики и электронного правительства" от 28 апреля 2020 года компания также занимается разработкой систем в других областях, включая разработку систем управления в корпоративных организациях, помимо веб-сайтов, мобильных приложений.',
		],
	},
	projects: {
		sectionTitle: "Проекты",
		projects: [
			{
				name: "MBOS - Онлайн сервис по очередям",
				type: 'mbos',
				descriptions: [
					"- В настоящее время в медицинской сфере, где очереди наиболее контролируются, мы систематизируем очереди в общественных организациях, таких как клиники, банки, автосалоны, автомойки и АЗС, повышая эффективность времени клиента и сотрудника.",
					"- Онлайн-очередь занимает ваше время оперативно. Кроме того, в определенные месяцы также предоставляются кэшбэки от АЗС и автомоек. Соберите кэшбэки и пользуйтесь бесплатными услугами с платформы Mbos.",
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
						name: "Пользователи",
					},
					{
						value: "20+",
						name: "Партнеры",
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
				name: "Taskie - Автоматизация деятельности компании",
				type: 'taskie',
				descriptions: [
					"- Программа Taskie предоставляет онлайн-электронную доставку заданий сотрудникам с дедлайном, и она собирает информацию без задержки выполнения заданий сотрудниками.",
					"- Возможно отслеживать местоположение сотрудников во время работы.",
					"- Также возможно определить, где находятся сотрудники и их местоположение через систему местоположения.",
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
						name: "Пользователи",
					},
					{
						value: "20+",
						name: "Партнеры",
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
						name: "Попробуйте демо-версию",
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
					"GPS может быть применен бизнес-владельцами и предпринимателями в своей деятельности.",
					"Возможности включают определение местоположения автомобилей, расход топлива, пройденное расстояние, скорость движения, а также измерение температуры воздуха в случае холодильных автомобилей. Можно установить на машины, выезжающие за границу.",
				],
			},
		],
		contact: "Контакты",
	},
	services: {
		sectionTitle: "Услуги",
		services: [
			{
				title: "Веб-сайты",
				description:
					"Виртуальная платформа, расположенная в интернете, предоставляющая целенаправленную информацию и услуги в электронном виде.",
				type: "website",
				trigger: "web-site",
			},
			{
				title: "Онлайн-магазины",
				description:
					"Услуги по продаже и доставке товаров через интернет. Быстро и удобно, безопасно и эффективно.",
				type: "e-com", //enum
				trigger: "e-commerce",
			},
			{
				title: "Системы CRM",
				description:
					"Программное обеспечение для автоматизации управления взаимодействием с клиентами и предоставления услуг компаниям.",
				type: "crm", // enum
				trigger: "crm",
			},
			{
				title: "Боты для Telegram",
				description:
					"Программа для работы в Telegram. Помогает автоматизировать общение с клиентами и предлагать услуги.",
				type: "bot", // enum
				trigger: "tg-bot",
			},
		],
	},
	employees: {
		sectionTitle: "Сотрудники",
		employees: [
			{
				img: "/images/xodimlar/azizbek.jpg",
				blurred: "/images/xodimlar/azizbek-blur.jpg",
				name: "Абдуллаев Азизбек",
				position: "Менеджер B2B",
			},
			{
				img: "/images/xodimlar/dilshod.jpg",
				blurred: "/images/xodimlar/dilshod-blur.jpg",
				name: "Сахабутдинов Дильшод",
				position: "Руководитель технического отдела",
			},
			{
				img: "/images/xodimlar/madina.jpg",
				blurred: "/images/xodimlar/madina-blur.jpg",
				name: "Сапарова Мадина",
				position: "Менеджер по контролю качества",
			},
			{
				img: "/images/xodimlar/mansur.jpg",
				blurred: "/images/xodimlar/mansur-blur.jpg",
				name: "Юсупов Мансур",
				position: "Руководитель компании",
			},
			{
				img: "/images/xodimlar/muxtor.jpg",
				blurred: "/images/xodimlar/muxtor-blur.jpg",
				name: "Сапарбоев Мухтор",
				position: "Разработчик",
			},
			{
				img: "/images/xodimlar/quvondiq.jpg",
				blurred: "/images/xodimlar/quvondiq-blur.jpg",
				name: "Курбаниёзов Кувондик",
				position: "Руководитель отдела продаж",
			},
			{
				img: "/images/xodimlar/shoxida.jpg",
				blurred: "/images/xodimlar/shoxida-blur.jpg",
				name: "Раджаббоева Шохида",
				position: "Руководитель финансового отдела",
			},
			{
				img: "/images/xodimlar/xudoyshukur.jpg",
				blurred: "/images/xodimlar/xudoyshukur-blur.jpg",
				name: "Машибов Худойшукур",
				position: "Технический разработчик",
			},
		],
	},
	contact: {
		sectionTitle: "Контакты",
		name: "Имя Фамилия",
		phonePlaceholder: "Телефон",
		message: "Сообщение",
		send: "Отправить",
		location: "ул. Тинчлик, д. 6А, Ургенч, Хорезмская область, Узбекистан",
	},
	footer: {
		description:
			"Приложение регулярно предоставляет много интересных обновлений. Кроме того, приложение постоянно обновляется, что создает множество удобств для пользователей.",
		siteMap: {
			title: "Карта сайта",
			items: [
				{
					href: "home",
					title: "Главная",
				},
				{
					href: "about",
					title: "О компании",
				},
				{
					href: "projects",
					title: "Проекты",
				},
				{
					href: "employees",
					title: "Сотрудники",
				},
			],
		},
		projects: {
			title: "Проекты",
			items: [
				{
					href: "#mbos",
					title: "Mbos - Онлайн сервис по очередям",
				},
				{
					href: "#taskie",
					title: "Taskie - Автоматизация деятельности компании",
				},
				{
					href: "#gps",
					title: "Кузатув",
				},
				{
					href: "#mbos",
					title: "Электронная очередь",
				},
			],
		},
	},
	coreData: {
		location: "ул. Тинчлик, д. 6А, Ургенч, Хорезмская область, Узбекистан",
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
			marked: 'Спасибо за выбор нас',
			contact: (phone: string[]) => `Вы можете связаться с нами по ${phone.join(' или ')}, чтобы связаться с нами непосредственно`,
			message: "Мы свяжемся с вами в ближайшее время после отправки вашего сообщения."
		},
		namePlaceholder: 'Введите ваше имя',
		phonePlaceholder: 'Введите ваш номер телефона',
		phoneExample: 'Пример: +99891 123 45 67',
		messagePlaceholder: 'Введите содержание обращения',
		sendMessage: 'Отправить сообщение',
		successMessage: 'Ваше сообщение отправлено'
	}
};

export default data;
