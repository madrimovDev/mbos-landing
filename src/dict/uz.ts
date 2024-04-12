import { Data } from "./types";

const data: Data = {
	navbar: {
		menu: [
			{
				href: "home",
				title: "Bosh Sahifa",
			},
			{
				href: "about",
				title: "Kompaniya haqida",
			},
			{
				href: "projects",
				title: "Loyihalar",
			},
			{
				href: "services",
				title: "Xizmatlar",
			},
			{
				href: "employees",
				title: "Xodimlar",
			},
		],
		contact: "Bog'lanish",
	},
	welcome: {
		slidesData: [
			{
				img: "/images/bg.jpg",
				title: {
					mark: "MBOS",
					text: "IT Kompaniyasiga xush kelibsiz",
				},
				subtitle: "Biz sizga qulaykilar yaratamiz",
			},
			{
				img: "/images/bg.jpg",
				title: {
					mark: "10 yillik",
					text: "tajribaga ega xodimlar",
				},
				subtitle: "Biz sizga qulaykilar yaratamiz",
			},
			{
				img: "/images/bg.jpg",
				title: {
					mark: "Sifatli",
					text: "Xizmatlarimizni taklif etamiz",
				},
				subtitle: "Biz sizga qulaykilar yaratamiz",
			},
		],
	},
	header: {
		subtitle: "Multi Branch Online Service",
		title: {
			text: "Biz Sizning",
			mark: "Vaqtingizni Tejaymiz",
		},
		description:
			"MBOS - innovatsion yechimlar. Biz veb saytlar, mobil dasturlar, telegram botlar, online dokon va CRM tizimlari ishlab chiqaramiz. Bizning xizmatlarimiz bilan innovatsion yechimlarga ega bo`ling.",
		contact: "Bog'lanish",
		aboutUs: "Biz haqimizda",
		partners: {
			name: "Hamkorlar",
			value: "300+",
		},
		users: {
			name: "Foydalanuvchilar",
			value: "12k",
		},
	},
	about: {
		sectionTitle: "Kompaniya haqida",
		title: "MBOS",
		subtitle: "Multi Branch Online Service",
		descriptions: [
			"Kompaniya 2020 - yil fevral oyida Yusupov Mansur, Sahabutdinov Dilshod va Sobirov Zafarbek tomonidan Mbos startup loyihasi ishlab chiqish bilan boshlangan va kompaniya nomi ham Mbos deb nomlangan.",
			'Prezidentimizning 2020-yil 28-apreldagi "Raqamli iqtisodiyot va elektron hukumatni keng joriy etish chora-tadbirlari to`g`risida" gi qarorining ijrosini ta`minlash maqsadida boshqa sohalarda ham, jumladan korxona tashkilotlarning boshqaruvidagi tizimlarni ishlab chiqish undan tashqari veb saytlar, mobil dasturlar ishlab chiqish bilan shug`ullanadi',
		],
	},
	projects: {
		sectionTitle: "Loyihalar",
		projects: [
			{
				name: "MBOS - Online Navbat Xizmati",
				type: 'mbos',
				descriptions: [
					"- Hozirgi kunda eng ko’p navbatlar kuzatilib turgan Tibbiyot sohasida, Klinikalarda, Bank, Avtosalon, Avtomoyka, Gaz to’ldirish shaxobchalarida navbat kutish jamoat tashkilotlarida mijozlar vaqtini ishchi xodimlar ish samaradorligini oshirishda yechim yaratib innovatsion onlayn va offlayn tarzda navbatlarni tizimlashtirib beramiz.",
					"- Onlayn navbat olib o’z vaqtida kelib ishini hal qilib keladi.Undan tashqari yoz oylarida Gaz to’ldirish shaxobchalaridan va Avto moykalardan Cashbacklar ham beriladi. Cashbacklarni to’plab Mbos platforma xizmatlaridan bepul foydalaning.",
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
						name: "Foydalanuvchilar",
					},
					{
						value: "20+",
						name: "Hamkorlar",
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
				name: "Taskie - Korxonaning ish faoliyatini avtomatlashtirish",
				type: 'taskie',
				descriptions: [
					"- Taskie dasturi Hodimlarni kelib ketishi asosan vaqtida kelishi, topshiriqlar online elektron beriladi dedline vaqtida o’zi hodimlarni topshiriqlarini kechiktirmasdan ma'lumot oladi",
					"- Hodimlarni ish vaqtida qayerda yurganini lokatsiya orqali teshkirib tursa ham bo’ladi",
					"- Hodimlarni ish vaqtida qayerda ekanligini xamda lokatsiya tizimi orqali teshkirish imkoni mavjud"
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
						name: "Foydalanuvchilar",
					},
					{
						value: "20+",
						name: "Hamkorlar",
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
						name: "Demo versiyani sinab ko'ring",
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
					"GPS ni  biznes egalari, tadbirkorlar o'z ish faoliyatlariga tadbiq qilishlari mumkin.",
					"Mashinalar qayerdaligi, qancha yoqilg'i sarf qilgani, qancha masofa bosib o'tgani, qancha tezlikda harakatlangani, undan tashqari muzlatgichli mashinalar bo'lsa issiq va sovuh havo haroratini o'lchab borish imkoniyatlari mavjud. Chet elga chiqadigan mashinalarga ham o'rnatish mumkin",
				],
			},
		],
		contact: "Bog'lanish",
	},
	services: {
		sectionTitle: "Xizmatlarimiz",
		services: [
			{
				title: "Veb Saytlar",
				description:
					"Internet orqali elektronik sharoitda joylashgan, maqsadli ma'lumotlar va xizmatlarni taqdim etuvchi virtual platforma.",
				type: "website",
				trigger: "web-site",
			},
			{
				title: "Online Dokonlar",
				description:
					"Internet orqali mahsulot sotish va etkazib berish xizmatlari. Tez va qulaylik, xavfsizlik va yetkazib berish samaradorligi.",
				type: "e-com", //enum
				trigger: "e-commerce",
			},
			{
				title: "CRM Tizimlar",
				description:
					"Kompaniyalar uchun mijozlar bilan aloqalarni boshqarish va xizmat ko'rsatish jarayonlarini avtomatlashtirish dasturiy ta'minotidir.",
				type: "crm", // enum
				trigger: "crm",
			},
			{
				title: "Telegram Botlar",
				description:
					"Telegramda ishlaydigan dastur. Mijozlar bilan aloqani avtomatlashtirish, xizmatlarni taklif qilish uchun yordam beradi.",
				type: "bot", // enum
				trigger: "tg-bot",
			},
		],
	},
	employees: {
		sectionTitle: "Xodimlar",
		employees: [
			{
				img: "/images/xodimlar/azizbek.jpg",
				blurred: "/images/xodimlar/azizbek-blur.jpg",
				name: "Abdullayev Azizbek",
				position: "B2B Menejeri",
			},
			{
				img: "/images/xodimlar/dilshod.jpg",
				blurred: "/images/xodimlar/dilshod-blur.jpg",
				name: "Sahabutdinov Dilshod",
				position: "Texnik Departament Rahbari",
			},
			{
				img: "/images/xodimlar/madina.jpg",
				blurred: "/images/xodimlar/madina-blur.jpg",
				name: "Saparova Madina",
				position: "Sifat Nazorati Menejeri",
			},
			{
				img: "/images/xodimlar/mansur.jpg",
				blurred: "/images/xodimlar/mansur-blur.jpg",
				name: "Yusupov Mansur",
				position: "Kompaniya Rahbari",
			},
			{
				img: "/images/xodimlar/muxtor.jpg",
				blurred: "/images/xodimlar/muxtor-blur.jpg",
				name: "Saparboyev Muxtor",
				position: "Dasturchi",
			},
			{
				img: "/images/xodimlar/quvondiq.jpg",
				blurred: "/images/xodimlar/quvondiq-blur.jpg",
				name: "Kurbaniyozov Quvondiq",
				position: "Sotuv Departamenti rahbari",
			},
			{
				img: "/images/xodimlar/shoxida.jpg",
				blurred: "/images/xodimlar/shoxida-blur.jpg",
				name: "Rajabboyeva Shohida",
				position: "Moliya Departamenti rahbari",
			},
			{
				img: "/images/xodimlar/xudoyshukur.jpg",
				blurred: "/images/xodimlar/xudoyshukur-blur.jpg",
				name: "Masharipov Xudoyshukur",
				position: "Texnik Dasturchi",
			},
		],
	},
	contact: {
		sectionTitle: "Bog'lanish",
		name: "Ism Familiya",
		phonePlaceholder: "Telefon",
		message: "Xabar",
		send: "Yuborish",
		location: "Tinchlik ko'chasi 6 a uy, Urganch, Xorazm Viloyati, O'zbekiston",
	},
	footer: {
		description:
			"Ilovada ko'plab sovrinli yangiliklar muntazam o'tkazilib turiladi.Undan tashqari ilova doimiy yangilashnida bo'ladi, bu esa foydalanuvchilarga ko'plab qulayliklar yaratishga xizmat qiladi",
		siteMap: {
			title: "Sayt Xaritasi",
			items: [
				{
					href: "home",
					title: "Bosh Sahifa",
				},
				{
					href: "about",
					title: "Kompaniya haqida",
				},
				{
					href: "projects",
					title: "Loyihalar",
				},
				{
					href: "employees",
					title: "Xodimlar",
				},
			],
		},
		projects: {
			title: "Loyihalar",
			items: [
				{
					href: "#mbos",
					title: "Mbos - Online Navbat Olish",
				},
				{
					href: "#taskie",
					title: "Taskie - Xodimlarni Nazorat qilish",
				},
				{
					href: "#gps",
					title: "Kuzatuv",
				},
				{
					href: "#mbos",
					title: "Elektron Navbat",
				},
			],
		},
	},
	coreData: {
		location: "Tinchlik ko'chasi 6 a uy, Urganch, Xorazm Viloyati, O'zbekiston",
		phone: ["+998 71 200 11 51", "+998 62 227 76 76"],
		email: "example@mail.co",
		telegram: "https://t.me/mbosuzb",
		instagram: "https://instagram.com/mbosuzb",
		facebook: "https://fb.com/mbosuzb",
	},
	modalData: {
		notification: {
			marked: 'Bizni tanlaganingiz uchun rahmat',
			contact: (phone: string[]) => `To'g'ridan to'g'ri biz bilan bo'g'lanish uchun ${phone.join(' yoki ')} raqamiga qo'ng'iroq qilishingiz mumkin`,
			message: "Xabaringiz yuborilgandan so'ng tez orada siz bilan bog'lanamiz."
		},
		namePlaceholder: 'Ismingizni kiriting',
		phonePlaceholder: 'Telefon raqamingizni kiriting',
		phoneExample: 'Na`muna: +99891 123 45 67',
		messagePlaceholder: 'Murojaat mazmunini kiriting',
		sendMessage: 'Xabarni yuborish',
		successMessage: 'Xabaringiz yuborildi'
	}
};

export default data;

