import { Container, Grow } from "@/shared/ui";
import HeaderMedia from "./header-media";
import HeaderInfo from "./header-info";

export default function Header() {
	return (
		<section id="#">
			<Container
				as="article"
				className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 mt-10 md:mt-[120px]"
			>
				<HeaderInfo />
				<HeaderMedia />
			</Container>
		</section>
	);
}

