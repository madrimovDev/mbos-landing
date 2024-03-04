import { Button, Grow } from "@/shared/ui";
import { Variants, motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import useModalStore from "../core/contact-modal-store";

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

export default function HeaderInfo() {
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
				Multi Branch Online Service
			</motion.h2>
			<motion.h1
				variants={headerInfoVariants}
				className="text-3xl xl:text-4xl 2xl:text-5xl"
			>
				<motion.span
					variants={headerInfoVariants}
					className="text-semibold"
				>
					Biz sizning
				</motion.span>{" "}
				<br />
				<motion.span
					variants={headerInfoVariants}
					className="font-extrabold text-black"
				>
					Vaqtingizni
				</motion.span>
			</motion.h1>
			<motion.p
				variants={headerInfoVariants}
				className="leading-8 text-lightBlack font-semibold"
			>
				MBOS - innovatsion yechimlar. Biz veb saytlar, mobil
				dasturlar, telegram botlar, online dokon va CRM tizimlari ishlab
				chiqaramiz. Bizning xizmatlarimiz bilan innovatsion yechimlarga
				ega bo`ling.
			</motion.p>
			<motion.div
				variants={headerInfoVariants}
				className="flex gap-4 items-center"
			>
				<Button onClick={openModal}>Bog&apos;lanish</Button>
				<button className="inline-flex gap-1 items-center">
					<span>
						<PlayCircle />
					</span>
					Biz Haqimizda
				</button>
			</motion.div>
			<motion.div
				variants={headerInfoVariants}
				className="absolute bg-green-300 bg-gradient-to-tr from-primary/40 to-primary shadow-[inset_3px_3px_4px_1px_#ffffff40,inset_-3px_-3px_6px_0px_#00000040,0px_6px_15px_0px_#00000040] py-4 px-4 sm:px-8 md:px-10 md:py-6 rounded-full right-0 md:-right-10 2xl:right-16 top-8 md:top-4"
			>
				<h3 className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-white">
					Tejaymiz
				</h3>
			</motion.div>
		</MotionGrow>
	);
}

