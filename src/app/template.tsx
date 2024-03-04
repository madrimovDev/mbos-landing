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
			<div
				id="loader"
				className="fixed inset-0 z-50 w-full h-screen bg-white grid place-items-center"
			>
				<div className="custom-loader"></div>
			</div>
			{children}
			<ContactModal />
			<Test />
			<Script
				id="for-loader"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
					document.getElementById('loader').remove();
			`,
				}}
			/>
		</motion.div>
	);
}

