"use client";
import ContactModal from "@/components/core/contact-modal";
import Test from "@/components/test/test";
import { motion, Variants } from "framer-motion";
import Script from "next/script";
import { PropsWithChildren, useLayoutEffect } from "react";

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
			<ContactModal />
			{/* <Test /> */}
		</motion.div>
	);
}

