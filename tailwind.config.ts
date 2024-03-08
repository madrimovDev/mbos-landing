import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#0EAF69",
				black: "#1B1B1B",
				softBlack: "#565656",
				lightBlack: "#757575",
				facebook: "#316FF6",
				instagram: "#d62976",
				telegram: "#0088cc",
			},
			screens: {
				sm: "480px",
				md: "768px",
				lg: "976px",
				xl: "1410px",
			},
			container() {
				return {
					center: true,
					screens: {
						sm: "480px",
						md: "768px",
						lg: "976px",
						xl: "1410px",
					},
					padding: {
						DEFAULT: "16px",
						sm: "0",
					},
				};
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;

