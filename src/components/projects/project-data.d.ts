export interface Project {
	name: string;
	descriptions: string[];
	stats?: Stat[];
	imgs?: Imgs[]
	downloadLinks?: DownloadLink[];
}

export interface Stat {
	value: string;
	name: string;
}

export interface DownloadLink {
	href: string;
	name: "Google Play" | "App Store";
	img: string;
}

export interface Imgs {
	src: string
	alt: string
	width: number
	height: number
}
