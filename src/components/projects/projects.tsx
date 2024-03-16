"use client";
import { Container, SectionTitle } from "@/shared/ui";
import Mbos from "./mbos";
import { Variants, motion } from "framer-motion";
import projectData from "./projects-data.json";
import { Project } from "./project-data";

const projectsData = projectData as Project[];

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

const MotionTitle = motion(SectionTitle);

export default function Projects() {
	return (
		<MotionContainer
			as="section"
			initial="initial"
			whileInView="animate"
			id="projects"
			viewport={{
				once: false,
				margin: "-100px",
			}}
			className="mt-[80px] md:mt-[160px]"
		>
			<MotionTitle variants={aboutVariants}>Loyihalar</MotionTitle>
			<motion.div
				variants={aboutVariants}
				className="flex flex-col gap-[80px] md:gap-[160px] mt-[50px] md:mt-[100px]"
			>
				{projectsData.map((project, index) => (
					<Mbos
						key={index}
						project={project}
						dir={index % 2 === 1 ? "right" : "left"}
					/>
				))}
			</motion.div>
		</MotionContainer>
	);
}

