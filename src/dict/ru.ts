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
					text: "Добро пожаловать в IT Компанию",
				},
				subtitle: "Мы создаем для вас удобства",
			},
			{
				img: "/images/bg.jpg",
				title: {
					mark: "Опыт",
					text: "10-летний опыт сотрудников",
				},
				subtitle: "Мы создаем для вас удобства",
			},
			{
				img: "/images/bg.jpg",
				title: {
					mark: "Качество",
					text: "Предлагаем наши услуги",
				},
				subtitle: "Мы создаем для вас удобства",
			},
		],
	},
	header: {
		subtitle: "Мульти-филиальное онлайн-обслуживание",
		title: {
			text: "Мы Экономим",
			mark: "Ваше Время",
		},
		description:
			"MBOS - инновационные решения. Мы разрабатываем веб-сайты, мобильные приложения, телеграм боты, онлайн-магазины и CRM системы. С нашими услугами вы будете на передовых инноваций.",
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
		subtitle: "Мульти-филиальное онлайн-обслуживание",
		descriptions: [
			"Компания основана в феврале 2020 года Мансуром Юсуповым, Дильшодом Сахобутдиновым и Зафарбеком Собировым, начав работу над проектом Mbos startup, который в итоге назван компанией Mbos.",
			'Для выполнения указаний Президента в отношении "широкого внедрения цифровой экономики и электронного правительства" наша компания занимается разработкой систем управления предприятиями в других областях, включая разработку веб-сайтов, мобильных приложений.',
		],
	},
	projects: {
		sectionTitle: "Проекты",
		projects: [
			{
				name: "MBOS - Онлайн Навбар Сервис",
				descriptions: [
					"- Мы разрабатываем систему навбаров для самых популярных очередей в медицине, клиниках, метрополитенах, автомойках.",
					"- Онлайн навбар принимает заказы и решает их вовремя. Кроме того, в течение установленных дней также предоставляются кэшбэки с метро и автомоек. Их можно использовать, накапливая их.",
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
				name: "Taskie - Автоматизация Деятельности Предприятия",
				descriptions: [
					"- Taskie позволяет сотрудникам приходить вовремя, получать онлайн задания, которые предоставляются в электронной форме, до истечения срока.",
					"- Можно отслеживать местоположение сотрудников в реальном времени, даже если они не выполнили свои задания вовремя.",
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
					"GPS может использоваться бизнес-владельцами, предпринимателями для своих деловых операций.",
					"Возможности измерения, сколько топлива расходуется, какое расстояние пройдено, на какой скорости движется, а также установка на машины с морозильными установками.",
				],
			},
		],
		contact: "Контакты",
	},
	services: {
		sectionTitle: "Наши Услуги",
		services: [
			{
				title: "Веб-сайты",
				description:
					"Виртуальная платформа, предоставляющая целевую информацию и услуги в электронной форме через Интернет.",
				type: "web",
				trigger: "web-site",
			},
			{
				title: "Онлайн Магазины",
				description:
					"Сервисы по продаже и доставке товаров через интернет. Быстро и удобно, безопасность и эффективность доставки.",
				type: "e-commerce",
				trigger: "e-commerce",
			},
			{
				title: "CRM Системы",
				description:
					"Программное обеспечение для автоматизации процессов управления взаимоотношениями с клиентами и предоставления услуг компаниям.",
				type: "crm",
				trigger: "crm",
			},
			{
				title: "Телеграм Боты",
				description:
					"Программа, работающая в Telegram. Помогает автоматизировать общение с клиентами, предлагать услуги.",
				type: "bot",
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
				position: "Менеджер по работе с клиентами",
			},
			{
				img: "/images/xodimlar/dilshod.jpg",
				blurred: "/images/xodimlar/dilshod-blur.jpg",
				name: "Сахабутдинов Дилшод",
				position: "Руководитель Технического Отдела",
			},
			{
				img: "/images/xodimlar/madina.jpg",
				blurred: "/images/xodimlar/madina-blur.jpg",
				name: "Сапарова Мадина",
				position: "Менеджер по Контролю Качества",
			},
			{
				img: "/images/xodimlar/mansur.jpg",
				blurred: "/images/xodimlar/mansur-blur.jpg",
				name: "Юсупов Мансур",
				position: "Руководитель Компании",
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
				name: "Курбаниёзов Қувондиқ",
				position: "Руководитель Отдела Продаж",
			},
			{
				img: "/images/xodimlar/shoxida.jpg",
				blurred: "/images/xodimlar/shoxida-blur.jpg",
				name: "Раҷаббоева Шоҳида",
				position: "Руководитель Финансового Отдела",
			},
			{
				img: "/images/xodimlar/xudoyshukur.jpg",
				blurred: "/images/xodimlar/xudoyshukur-blur.jpg",
				name: "Маширипов Худойшукур",
				position: "Технический Разработчик",
			},
		],
	},
	contact: {
		sectionTitle: "Контакты",
		name: "Имя Фамилия",
		phone: "Телефон",
		message: "Сообщение",
		send: "Отправить",
		location: "Улица Тинчлик, дом 6а, Ургенч, Хорезмская область, Узбекистан",
	},
	footer: {
		description:
			"В приложении регулярно проводятся различные обновления, что обеспечивает постоянное обновление приложения, что в свою очередь создает множество удобств для пользователей",
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
					title: "Mbos - Онлайн Очередь",
				},
				{
					href: "#taskie",
					title: "Taskie - Мониторинг Сотрудников",
				},
				{
					href: "#gps",
					title: "GPS - Отслеживание",
				},
				{
					href: "#mbos",
					title: "Электронный Очередь",
				},
			],
		},
	},
	coreData: {
		location: "Улица Тинчлик, дом 6а, Ургенч, Хорезмская область, Узбекистан",
		phone: '+998914245014',
		email: 'example@mail.co',
		telegram: 'https://t.me/mbos_online',
		instagram: 'https://instagram.com/mbos_online',
		facebook: 'https://fb.com/mbos_online',
	},
};
export default data