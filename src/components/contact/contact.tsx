import { Container, Grow, SectionTitle } from "@/shared/ui";
import Map from "./map";
import Form from "./form";

export default function Contact() {
	return (
		<Container
			as="section"
			className="mt-[80px] md:mt-[160px]"
		>
			<SectionTitle>Bog&apos;lanish</SectionTitle>
			<div className="flex flex-col md:flex-row gap-[50px] md:gap-[100px] mt-[70px]">
				<Grow>
					<Map />
				</Grow>
				<Grow>
					<Form />
				</Grow>
			</div>
		</Container>
	);
}

