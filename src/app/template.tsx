"use client";
import ContactModal from "@/components/core/contact-modal";
import { motion, Variants } from "framer-motion";
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
	useLayoutEffect(() => {
		if (document.readyState === "complete") {
			document.getElementById("loader")?.remove();
		}
	}, []);
	return (
		<motion.div
			variants={templateVariant}
			initial="initial"
			animate="animate"
		>
			<div
				id="loader"
				className="fixed inset-0 z-50 w-full h-screen bg-white grid place-items-center"
			>
				<div className="custom-loader"></div>
			</div>
			{children}
			<ContactModal />
		</motion.div>
	);
}

