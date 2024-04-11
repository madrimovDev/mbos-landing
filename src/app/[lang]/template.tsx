"use client";
import { motion, Variants } from "framer-motion";
import { PropsWithChildren } from "react";

const templateVariant: Variants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.11,
		},
	},
};

export default function Template({ children }: PropsWithChildren) {
	return (
		<motion.div
			variants={templateVariant}
			initial="initial"
			animate="animate"
		>
			{children}
		</motion.div>
	);
}

