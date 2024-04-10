import { Footer, Top } from "@/components";
import Loading from "@/components/core/loading";
import { t } from "@/dict";
import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("@/components/navbar/navbar"));
const Header = lazy(() => import("@/components/header/header"));
const About = lazy(() => import("@/components/about/about"));
const Projects = lazy(() => import("@/components/projects/projects"));
const Employees = lazy(() => import("@/components/employees/employees"));
const Contact = lazy(() => import("@/components/contact/contact"));
const Services = lazy(() => import("@/components/services/services"));
const Welcome = lazy(() => import("@/components/welcome/welcome"));

export default function Home(props: { params: { lang: "en" | "ru" | "uz" } }) {
	const data = t(props.params.lang);
	return (
		<Suspense fallback={<Loading />}>
			<Top />
			<Navbar data={data.navbar} />
			<Welcome data={data.welcome} />
			<Header data={data.header} />
			<About data={data.about} />
			<Projects data={data.projects} />
			<Services data={data.services} />
			<Employees data={data.employees} />
			<Contact data={data.contact} />
			<Footer data={data.footer} />
		</Suspense>
	);
}

