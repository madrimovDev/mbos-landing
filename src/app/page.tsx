import { Footer } from "@/components";
import Loading from "@/components/core/loading";
import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("@/components/navbar/navbar"));
const Header = lazy(() => import("@/components/header/header"));
const About = lazy(() => import("@/components/about/about"));
const Projects = lazy(() => import("@/components/projects/projects"));
const Employees = lazy(() => import("@/components/employees/employees"));
const Contact = lazy(() => import("@/components/contact/contact"));
const Services = lazy(() => import("@/components/services/services"));
const Welcome = lazy(() => import("@/components/welcome/welcome"));

export default function Home() {
	return (
		<Suspense fallback={<Loading />}>
			<Navbar />
			<Welcome />
			<Header />
			<About />
			<Projects />
			<Services />
			<Employees />
			<Contact />
			<Footer />
		</Suspense>
	);
}

