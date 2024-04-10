import { Icon } from "@/shared/icons";
import { Grow } from "@/shared/ui";
import { Variants, motion } from "framer-motion";
import { About } from "@/dict/types";

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

interface Props {
	data: About;
}

export default function AboutInfo({ data }: Props) {
	return (
		<MotionGrow
			variants={aboutVariants}
			className="md:pr-20"
		>
			<motion.h2
				variants={aboutVariants}
				className="text-3xl md:text-6xl font-extrabold text-black"
			>
				{data.title}
			</motion.h2>
			<motion.h3
				variants={aboutVariants}
				className="text-lg md:text-2xl text-softBlack font-semibold"
			>
				{data.subtitle}
			</motion.h3>
			{data.descriptions.map((d) => {
				return (
					<motion.p
						key={d}
						variants={aboutVariants}
						className="text-lightBlack leading-8 mt-3 md:mt-6"
					>
						{d}
					</motion.p>
				);
			})}

			<motion.div
				variants={aboutVariants}
				className="flex gap-6 my-6"
			>
				<Icon.Facebook className="fill-softBlack hover:fill-facebook transition-all" />
				<Icon.Instagram className="fill-softBlack hover:fill-instagram transition-all" />
				<Icon.Telegram className="fill-softBlack hover:fill-telegram transition-all" />
			</motion.div>
		</MotionGrow>
	);
}

