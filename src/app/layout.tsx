import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false,
	fallback: ["system-ui"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://mbos-landing.vercel.app"),
	title: "MBOS - Online Navbat Olish",
	description:
		"Biz IT texnologiyalari sohasida faol bo'lgan kompaniyamiz. Biz veb saytlar, mobil ilovalar, CRM sistemalari, onlayn do'konlar va boshqalarini ishlab chiqaramiz.",
	creator: "MBOS",
	keywords: [
		"ИТ",
		"технологиялар",
		"веб сайтлар",
		"мобил иловалар",
		"CRM",
		"онлайн дўконлар",
		"СЕО",
		"IT",
		"texnologiyalar",
		"veb saytlar",
		"mobil ilovalar",
		"CRM",
		"onlayn do'konlar",
		"SEO",
		"MBOS",
		"Taskie"
	],
	openGraph: {
		type: "website",
		url: "https://mbos-landing.vercel.app",
		title: "MBOS - Online Navbat Olish",
		description:
			"Biz IT texnologiyalari sohasida faol bo'lgan kompaniyamiz. Biz veb saytlar, mobil ilovalar, CRM sistemalari, onlayn do'konlar va boshqalarini ishlab chiqaramiz.",
		alternateLocale: ["uz"],
		locale: "uz",
		images: [
			{
				url: "https://mbos-landing.vercel.app/images/mbos.png",
				width: 1200,
				height: 630,
				alt: "MBOS - Online Navbat Olish",
			},
		],
		siteName: "MBOS - Online Navbat Olish",
		countryName: "Uzbekistan",
		phoneNumbers: ["+99 891 123 45 67"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="uz">
			<body className={`${inter.className} overflow-x-hidden`}>
				{children}
				<div id="modal"></div>
			</body>
		</html>
	);
}

