import { Button, Grow } from "@/shared/ui";
import { Variants, motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import useModalStore from "../core/contact-modal-store";
import { Header } from "@/dict/types";

const MotionGrow = motion(Grow);

const headerInfoVariants: Variants = {
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
	data: Header;
}

export default function HeaderInfo({ data }: Props) {
	const openModal = useModalStore((state) => state.openModal);
	return (
		<MotionGrow
			variants={headerInfoVariants}
			className="flex flex-col gap-4 items-start relative"
		>
			<motion.h2
				variants={headerInfoVariants}
				className="px-2 py-1 text-sm border font-bold border-primary rounded-full inline-block"
			>
				{data.subtitle}
			</motion.h2>
			<motion.h1
				variants={headerInfoVariants}
				className="text-3xl xl:text-4xl 2xl:text-5xl"
			>
				<motion.span
					variants={headerInfoVariants}
					className="text-semibold"
				>
					{data.title.text}
				</motion.span>{" "}
				<br />
				<motion.span
					variants={headerInfoVariants}
					className="font-extrabold text-black"
				>
					{data.title.mark}
				</motion.span>
			</motion.h1>
			<motion.p
				variants={headerInfoVariants}
				className="leading-8 text-lightBlack font-semibold"
			>
				{data.description}
			</motion.p>
			<motion.div
				variants={headerInfoVariants}
				className="flex gap-4 items-center"
			>
				<Button onClick={openModal}>{data.contact}</Button>
				<button className="inline-flex gap-1 items-center">
					<span>
						<PlayCircle />
					</span>
					{data.aboutUs}
				</button>
			</motion.div>
		</MotionGrow>
	);
}

