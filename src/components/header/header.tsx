"use client";
import { Container, Grow } from "@/shared/ui";
import HeaderMedia from "./header-media";
import HeaderInfo from "./header-info";
import { Variants, motion } from "framer-motion";
import type { Header } from "@/dict/types";

const headerVariants: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1,
		},
	},
};

const MotionContainer = motion(Container);

interface Props {
	data: Header
}

export default function Header({data}: Props) {
	return (
		<motion.section
			variants={headerVariants}
			animate="animate"
			initial="initial"
			id="home"
		>
			<MotionContainer
				variants={headerVariants}
				animate="animate"
				initial="initial"
				as="article"
				className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 mt-10 md:mt-[120px]"
			>
				<HeaderInfo data={data} />
				<HeaderMedia data={data} />
			</MotionContainer>
		</motion.section>
	);
}

