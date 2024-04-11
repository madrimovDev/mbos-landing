"use client";
import { Container, Grow, SectionTitle } from "@/shared/ui";
import AboutInfo from "./about-info";
import AboutMedia from "./about-media";
import { Variants, motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { About, CoreData } from "@/dict/types";

const MotionContainer = motion(Container);

const aboutVariants: Variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.11,
		},
	},
};

interface Props {
	data: About & CoreData;
}

export default function About({ data }: Props) {
	const ref = useRef<HTMLDivElement>(null);
	return (
		<MotionContainer
			id="about"
			as="section"
			ref={ref}
			initial="initial"
			whileInView="animate"
			viewport={{
				once: false,
				margin: "-100px",
			}}
			className="mt-[80px] md:mt-[160px]"
		>
			<SectionTitle>{data.sectionTitle}</SectionTitle>
			<motion.div
				variants={aboutVariants}
				initial={"initial"}
				whileInView={"animate"}
				viewport={{ margin: "-150px", once: true }}
				className="flex items-center flex-col gap-6 md:flex-row md:h-[50vh] mt-16 md:mt-24"
			>
				<AboutInfo data={data} />
				<AboutMedia />
			</motion.div>
		</MotionContainer>
	);
}

