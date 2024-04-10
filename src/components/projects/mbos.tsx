import { Button, Grow } from "@/shared/ui";
import { Variants, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "./project-data";
import { cn } from "@/shared/utils/cn";
import useModalStore from "../core/contact-modal-store";
import { Projects } from "@/dict/types";

const MotionGrow = motion(Grow);

const aboutVariants: Variants = {
	initial: {
		opacity: 0,
		scale: 0.5,
	},
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.11,
		},
	},
};

export default function Mbos({
	project,
	dir,
	contact,
}: {
	project: Projects["projects"][number];
	dir: "left" | "right";
	contact: Projects["contact"];
}) {
	const openModal = useModalStore((s) => s.openModal);

	return (
		<MotionGrow
			variants={aboutVariants}
			initial="initial"
			animate="animate"
			id="mbos"
			viewport={{
				once: true,
				margin: "-100px",
			}}
			className={cn("flex flex-col items-center h-max", {
				"md:flex-row": dir === "left",
				"md:flex-row-reverse": dir === "right",
			})}
		>
			<motion.div
				variants={aboutVariants}
				className="flex-grow relative w-full h-full flex items-center justify-center mb-10 md:mb-0"
			>
				{project.imgs?.map((img, index, arr) => (
					<Image
						key={img.alt}
						src={img.src}
						className={cn(`h-full`, {
							"-mr-24": index > 0 && index === 0,
							"-ml-24": index > 0 && index === 1,
							"w-1/2": arr.length > 1,
							"w-full": !arr.length,
						})}
						style={{
							maxWidth: arr.length === 2 ? img.width + "px" : "",
						}}
						alt={img.alt}
						width={img.width}
						height={img.height}
					/>
				))}
			</motion.div>
			<motion.div
				variants={aboutVariants}
				initial="initial"
				whileInView="animate"
				viewport={{
					once: true,
					margin: "-100px",
				}}
				className="flex-grow w-full"
			>
				<motion.h3
					variants={aboutVariants}
					className="text-3xl font-bold mb-4"
				>
					{project.name}
				</motion.h3>
				{project.descriptions.map((desc) => (
					<motion.p
						key={desc}
						variants={aboutVariants}
						className="text-lightBlack leading-8 my-2"
					>
						{desc}
					</motion.p>
				))}
				<motion.div
					variants={aboutVariants}
					className="flex gap-10"
				>
					{project.stats?.map((stat) => (
						<motion.div
							key={stat.name}
							variants={aboutVariants}
						>
							<motion.h4
								variants={aboutVariants}
								className="text-5xl font-bold"
							>
								{stat.value}
							</motion.h4>
							<motion.p
								variants={aboutVariants}
								className="text-softBlack"
							>
								{stat.name}
							</motion.p>
						</motion.div>
					))}
				</motion.div>
				{project.downloadLinks && (
					<motion.div
						variants={aboutVariants}
						className="flex gap-4 mt-8 items-stretch"
					>
						{project.downloadLinks?.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="h-auto inline-block"
							>
								<Image
									src={`/images/${
										link.name === "Google Play" ? "google-play" : "app-store"
									}.png`}
									alt={link.name}
									className="object-contain h-full"
									width={120}
									height={30}
								/>
							</Link>
						))}
					</motion.div>
				)}
				<div className="flex items-center gap-4 mt-10">
					<Button onClick={openModal}>{contact}</Button>`
				</div>
			</motion.div>
		</MotionGrow>
	);
}

