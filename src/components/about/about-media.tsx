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
			delayChildren: 0.1
		}
	},
};

export default function AboutMedia() {
	return (
		<MotionGrow variants={aboutVariants} initial={'initial'} whileInView='animate' viewport={{once: true}} className="grid grid-cols-2 grid-rows-6 h-full gap-4">
			<motion.div variants={aboutVariants} className="row-span-3 rounded-xl overflow-hidden relative group border-4 border-primary/50">
				<div className="flex flex-col justify-end p-2 absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-all w-full h-1/2 z-[1]">
					<h3 className="font-bold text-white">Madrimov Xudoshukur</h3>
					<p className="text-white">Frontend Dasturchi</p>
				</div>
				<Image
					src="/images/developer.jpg"
					alt="Developer"
					className="h-full object-cover rounded-xl"
					rootClassName="h-full"
					width={640}
					preview
					height={640}
				/>
			</motion.div>
			<motion.div variants={aboutVariants} className="row-span-3 col-start-1 row-start-4 rounded-xl overflow-hidden relative group border-4 border-primary/50">
				<div className="flex flex-col justify-end p-2 absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-all w-full h-1/2 z-[1]">
					<h3 className="font-bold text-white">Madrimov Xudoshukur</h3>
					<p className="text-white">Frontend Dasturchi</p>
				</div>
				<Image
					src="/images/developer.jpg"
					alt="Developer"
					className="h-full object-cover rounded-xl"
					rootClassName="h-full"
					width={640}
					preview
					height={640}
				/>
			</motion.div>
			<motion.div variants={aboutVariants} className="row-span-2 col-start-2 row-start-1 rounded-xl overflow-hidden relative group border-4 border-primary/50">
				<div className="flex flex-col justify-end p-2 absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-all w-full h-1/2 z-[1]">
					<h3 className="font-bold text-white">Madrimov Xudoshukur</h3>
					<p className="text-white">Frontend Dasturchi</p>
				</div>
				<Image
					src="/images/developer.jpg"
					alt="Developer"
					className="h-full object-cover rounded-xl"
					rootClassName="h-full"
					width={640}
					preview
					height={640}
				/>
			</motion.div>
			<motion.div variants={aboutVariants} className="row-span-2 col-start-2 row-start-3 rounded-xl overflow-hidden relative group border-4 border-primary/50">
				<div className="flex flex-col justify-end p-2 absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-all w-full h-1/2 z-[1]">
					<h3 className="font-bold text-white">Madrimov Xudoshukur</h3>
					<p className="text-white">Frontend Dasturchi</p>
				</div>
				<Image
					src="/images/developer.jpg"
					className="h-full object-cover rounded-xl"
					rootClassName="h-full"
					alt="Developer"
					width={640}
					preview
					height={640}
				/>
			</motion.div>
			<motion.div variants={aboutVariants} className="col-start-2 row-start-5 row-span-2 rounded-xl overflow-hidden relative border-4 border-primary/50">
				<Image
					src="/images/developer.jpg"
					className="h-full object-cover rounded-xl"
					rootClassName="h-full"
					alt="Developer"
					width={640}
					preview={false}
					height={640}
				/>
			</motion.div>
		</MotionGrow>
	);
}

