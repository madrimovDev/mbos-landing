import { Container, Grow, SectionTitle } from "@/shared/ui";
import Map from "./map";
import Form from "./form";
import { ContactInfo, CoreData } from "@/dict/types";
interface Props {
	data: ContactInfo & CoreData
}
export default function Contact({data}: Props) {
	return (
		<Container
			as="section"
			id='contact'
			className="mt-[80px] md:mt-[160px]"
		>
			<SectionTitle>{data.sectionTitle}</SectionTitle>
			<div className="flex flex-col md:flex-row gap-[50px] md:gap-[100px] mt-[70px]">
				<Grow>
					<Map data={data.location} />
				</Grow>
				<Grow>
					<Form data={data} />
				</Grow>
			</div>
		</Container>
	);
}

