import { Container, SectionTitle } from "@/shared/ui";
import Mbos from "./mbos";
import Taskie from "./taskie";

export default function Projects() {
	return (
		<Container
			as="section"
			className="mt-[80px] md:mt-[160px]"
		>
			<SectionTitle>Loyihalar</SectionTitle>
			<div className="flex flex-col gap-[80px] md:gap-[160px] mt-[50px] md:mt-[100px]">
				<Mbos />
				<Taskie />
			</div>
		</Container>
	);
}

