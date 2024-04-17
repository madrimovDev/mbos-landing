"use client";
import { Grow, Image } from "@/shared/ui";
import { Variants, motion } from "framer-motion";

const MotionGrow = motion(Grow);
const aboutVariants: Variants = {
	initial: {
		scale: 0.5,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1,
		},
	},
};

export default function AboutMedia() {
	return (
		<MotionGrow
			variants={aboutVariants}
			initial={"initial"}
			whileInView="animate"
			viewport={{ once: true }}
			className="grid grid-cols-2 grid-rows-6 h-full gap-4"
		>
			<motion.div
				variants={aboutVariants}
				className="row-start-1 col-start-1 row-span-4 rounded-xl overflow-hidden relative group border-4 "
			>
				 
				<Image
					src="/images/mbos-company/1.JPG"
					alt="Developer"
					className="h-full object-cover rounded-xl"
					rootClassName="h-full"
					width={640}
					preview
					height={640}
				/>
			</motion.div>
			<motion.div
				variants={aboutVariants}
				className="row-span-2 col-start-1 row-start-5 rounded-xl overflow-hidden relative group border-4"
			>
				 
				<Image
					src="/images/mbos-company/2.JPG"
					alt="Developer"
					className="h-full object-cover rounded-xl"
					rootClassName="h-full"
					width={640}
					preview
					height={640}
				/>
			</motion.div>
			<motion.div
				variants={aboutVariants}
				className="row-span-2 col-start-2 row-start-1 rounded-xl overflow-hidden relative group border-4 "
			>
				 
				<Image
					src="/images/mbos-company/3.JPG"
					alt="Developer"
					className="h-full object-cover rounded-xl"
					rootClassName="h-full"
					width={640}
					preview
					height={640}
				/>
			</motion.div>
			<motion.div
				variants={aboutVariants}
				className="row-span-4 col-start-2 row-start-3 rounded-xl overflow-hidden relative group border-4 "
			>
				<Image
					src="/images/mbos-company/4.JPG"
					className="h-full object-cover rounded-xl"
					rootClassName="h-full"
					alt="Developer"
					width={640}
					preview
					height={640}
				/>
			</motion.div>
		</MotionGrow>
	);
}

