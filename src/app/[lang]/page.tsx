import { Footer, Top } from "@/components";
import ContactModal from "@/components/core/contact-modal";
import Loading from "@/components/core/loading";
import { t } from "@/dict";
import { mergeObject } from "@/shared/utils/mergeObject";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/navbar/navbar"), {
	ssr: false,
	loading() {
		return <Loading />;
	},
});
const Header = dynamic(() => import("@/components/header/header"));
const About = dynamic(() => import("@/components/about/about"));
const Projects = dynamic(() => import("@/components/projects/projects"));
const Employees = dynamic(() => import("@/components/employees/employees"));
const Contact = dynamic(() => import("@/components/contact/contact"));
const Services = dynamic(() => import("@/components/services/services"));
const Welcome = dynamic(() => import("@/components/welcome/welcome"));

export default function Home(props: { params: { lang: "en" | "ru" | "uz" } }) {
	const data = t(props.params.lang);
	return (
		<>
			<Navbar data={data.navbar} />
			<Welcome data={data.welcome} />
			<Header data={data.header} />
			<About data={mergeObject(data.about, data.coreData)} />
			<Projects data={data.projects} />
			<Services data={data.services} />
			<Employees data={data.employees} />
			<Contact data={mergeObject(data.contact, data.coreData)} />
			<Footer data={mergeObject(data.footer, data.coreData)} />
			<ContactModal lang={props.params.lang} />
		</>
	);
}

