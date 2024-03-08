import { Button, Grow } from "@/shared/ui";
import { Variants, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export default function Mbos() {
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
			className="flex flex-col md:flex-row items-center"
		>
			<motion.div
				variants={aboutVariants}
				className="flex-grow relative w-full grid place-items-center mb-10 md:mb-0"
			>
				<Image
					src="/images/ip-portrait.png"
					className="w-1/2 h-auto md:w-auto -ml-20"
					alt="mbos"
					width={254}
					height={516}
				/>
				<Image
					src="/images/ip2-portrait.png"
					className="w-1/2 h-auto md:w-auto absolute top-0 bottom-0 left-1/2 md:left-1/3 -translate-x-1/2"
					alt="mbos"
					width={254}
					height={516}
				/>
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
					className="text-3xl font-bold"
				>
					MBOS - Online Navbat Xizmati
				</motion.h3>
				<motion.p
					variants={aboutVariants}
					className="text-lightBlack leading-8 mt-5 mb-8"
				>
					Ilova o&apos;z ichinda ko&apos;plab online navbat sohalarni ichiga
					olgan. Xususan Metan to&apos;ldirish shaxobchalari, Avtomoyka,
					Klinika, Bank, va boshqa ko&apos;plab sohalarni o&apos;z ichiga olgan.
				</motion.p>
				<motion.div
					variants={aboutVariants}
					className="flex gap-10"
				>
					<motion.div variants={aboutVariants}>
						<motion.h4
							variants={aboutVariants}
							className="text-5xl font-bold"
						>
							11K
						</motion.h4>
						<motion.p
							variants={aboutVariants}
							className="text-softBlack"
						>
							Foydalanuvchilar
						</motion.p>
					</motion.div>
					<motion.div variants={aboutVariants}>
						<motion.h4
							variants={aboutVariants}
							className="text-5xl font-bold"
						>
							20+
						</motion.h4>
						<motion.p
							variants={aboutVariants}
							className="text-softBlack"
						>
							Hamkorlar
						</motion.p>
					</motion.div>
				</motion.div>
				<motion.div
					variants={aboutVariants}
					className="flex gap-4 mt-8 mb-10"
				>
					<Image
						src="/images/google-play.png"
						alt="Google Play"
						width={120}
						height={30}
					/>
					<Image
						src="/images/app-store.png"
						alt="App Store"
						width={110}
						height={30}
					/>
				</motion.div>
				<div className="flex items-center gap-4">
					<Button>Bog&apos;lanish</Button>
					<Link
						href="mbos"
						className="flex items-center gap-2 font-semibold text-softBlack hover:text-black"
					>
						Batafsil
						<ExternalLink size="1em" />
					</Link>
				</div>
			</motion.div>
		</MotionGrow>
	);
}

