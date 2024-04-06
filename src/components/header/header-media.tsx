import { Grow } from "@/shared/ui";
import { Variants, motion } from "framer-motion";
import Image from "next/image";

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
const getRandomRotation = () => Math.random() * 10 - 5;
const cardVariant: Variants = {
	initial: {
		scale: 1,
		opacity: 1,
	},
	animate: (custom: number) => {
		const xValues = [0, -5, 5, -5, 2, -2, 0].map((val) => val + getRandomRotation());
		const yValues = [0, 5, -2, 2, -1, 1, 0].map((val) => val + getRandomRotation());
		return {
			scale: 1,
			opacity: 1,
			x: xValues.map((val, index) => val * custom + index * 2), // Adjusted x values with custom parameter and index
			y: yValues.map((val, index) => val * custom + index * 2), // Adjusted y values with custom parameter and index
			transition: {
				duration: 20,
				repeat: Infinity,
				repeatType: "mirror",
				ease: "easeInOut",
				damping: 15,
				stiffness: 150,
			},
		};
	},
};
export default function HeaderMedia() {
	return (
		<>
			<MotionGrow
				variants={headerInfoVariants}
				className="relative flex justify-end"
			>
				<motion.div
					variants={cardVariant}
					custom={2}
					className="sm:w-40 bg-gradient-to-tr p-4 sm:px-0 sm:py-6 from-gray-200 via-white to-gray-100 absolute -top-10 md:top-0 right-0 md:left-[15%] shadow rounded-3xl flex flex-col justify-center items-center "
				>
					<span className="text-xl sm:text-3xl text-softBlack font-black">
						300+
					</span>
					<span className="font-medium text-softBlack">Hamkorlar</span>
				</motion.div>
				<motion.div
					variants={cardVariant}
					custom={2}
					className="bg-gradient-to-tr py-4 px-6 sm:p-9 from-stone-950 via-stone-800  to-stone-950 absolute bottom-4 md:bottom-1/3 left-0 md:left-[5%] shadow-lg  rounded-3xl flex flex-col justify-center items-center "
				>
					<span className="text-xl sm:text-4xl font-black text-white">12K</span>
					<span className="font-medium text-white text-sm mt-2 text-center leading-none  md:text-base">
						Doimiy
						<br />
						Foydalanuvchilar
					</span>
				</motion.div>
				<Image
					src="/images/client.png"
					alt="client"
					width={560}
					height={490}
					loading="lazy"
				/>
			</MotionGrow>
		</>
	);
}

