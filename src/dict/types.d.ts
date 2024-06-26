import { ModalState } from "@/components/core/contact-modal-store";

export interface MenuItem {
	href: string;
	title: string;
}

export interface Navbar {
	menu: MenuItem[];
	contact: string;
}

export interface SlideData {
	img: string;
	title: { mark: string; text: string };
	subtitle: string;
}

export interface Welcome {
	slidesData: SlideData[];
}

export interface Header {
	subtitle: string;
	title: { text: string; mark: string };
	description: string;
	contact: string;
	aboutUs: string;
	partners: { name: string; value: string };
	users: { name: string; value: string };
}

export interface About {
	sectionTitle: string;
	title: string;
	subtitle: string;
	descriptions: string[];
}

export interface Project {
	name: string;
	descriptions: string[];
	imgs?: { src: string; alt: string; width: number; height: number }[];
	stats?: { value: string; name: string }[];
	downloadLinks?: { href: string; name: string; img: string }[];
	type: ModalState['target'],
	addonLinks?: {name: string, link: string}[]
}

export interface Projects {
	sectionTitle: string;
	projects: Project[];
	contact: string;
}

export interface Service {
	title: string;
	description: string;
	type: ModalState['target'];
	trigger: "web-site" | "e-commerce" | "crm" | "tg-bot";
}

export interface Services {
	sectionTitle: string;
	services: Service[];
}

export interface Employee {
	img: string;
	blurred: string;
	name: string;
	position: string;
}

export interface Employees {
	sectionTitle: string;
	employees: Employee[];
}

export interface ContactInfo {
	sectionTitle: string;
	name: string;
	phonePlaceholder: string;
	message: string;
	send: string;
	location: string;
}

export interface SiteMapItem {
	href: string;
	title: string;
}

export interface SiteMap {
	title: string;
	items: SiteMapItem[];
}

export interface Footer {
	description: string;
	siteMap: SiteMap;
	projects: SiteMap;
}

export interface CoreData {
	location: string;
	phone: string[];
	email: string;
	telegram: string;
	instagram: string;
	facebook: string;
}

interface ModalData {
	notification: {
			marked: string,
			contact: (phone: string[]) => string
			message: string
	},
	namePlaceholder: string,
	nameTitle: string
	phonePlaceholder: string
	phoneTitle: string
	phoneExample: string
	messagePlaceholder: string
	messageTitle: string
	successMessage: string
	sendMessage: string
}

export interface Data {
	navbar: Navbar;
	welcome: Welcome;
	header: Header;
	about: About;
	projects: Projects;
	services: Services;
	employees: Employees;
	contact: ContactInfo;
	footer: Footer;
	coreData: CoreData;
	modalData: ModalData
}

