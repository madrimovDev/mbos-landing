import { Container, Grow, SectionTitle } from "@/shared/ui";
import AboutInfo from "./about-info";
import AboutMedia from "./about-media";

export default function About() {
	return (
		<Container
			as="section"
			className="mt-[80px] md:mt-[160px]"
		>
			<SectionTitle>Kompaniya Haqida</SectionTitle>
			<div className="flex items-center flex-col gap-6 md:flex-row md:h-[50vh] mt-16 md:mt-24">
				<AboutInfo />
				<AboutMedia />
			</div>
		</Container>
	);
}

