import {
	About,
	Contact,
	Employees,
	Footer,
	Header,
	Navbar,
	Projects,
} from "@/components";

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<Projects />
			<Employees />
			<Contact />
			<Footer />
		</>
	);
}

