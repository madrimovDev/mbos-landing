"use client";
import { Container, Grow } from "@/shared/ui";
import HeaderMedia from "./header-media";
import HeaderInfo from "./header-info";
import { Variants, motion } from "framer-motion";

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

export default function Header() {
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
				<HeaderInfo />
				<HeaderMedia />
			</MotionContainer>
		</motion.section>
	);
}

