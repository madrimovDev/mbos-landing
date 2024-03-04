import { Icon } from "@/shared/icons";
import { Button, Grow } from "@/shared/ui";
import { Variants, motion } from "framer-motion";
import useModalStore from "../core/contact-modal-store";

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

export default function AboutInfo() {
	const openModal =useModalStore(s => s.openModal)
	return (
		<MotionGrow
			variants={aboutVariants}
			className="md:pr-20"
		>
			<motion.h2
				variants={aboutVariants}
				className="text-3xl md:text-6xl font-extrabold text-black"
			>
				MBOS
			</motion.h2>
			<motion.h3
				variants={aboutVariants}
				className="text-lg md:text-2xl text-softBlack font-semibold"
			>
				Multi Branch Online Service
			</motion.h3>
			<motion.p
				variants={aboutVariants}
				className="text-lightBlack leading-8 mt-3 md:mt-6"
			>
				Kompaniya 2020 - yil fevral oyida <b>Yusupov Mansur</b>,
				<b>Sahobiddinov Dilshod</b> va <b>Sobirov Zafarbek</b> tomonidan
				<b>Mbos</b> startup loyihasi ishlab chiqish bilan boshlangan va
				kompaniya nomi ham Mbos deb nomlangan.
			</motion.p>
			<motion.p
				variants={aboutVariants}
				className="text-lightBlack leading-8 mt-3 md:mt-6"
			>
				Prezidentimizning 2020-yil 28-apreldagi &quot;Raqamli iqtisodiyot va elektron
				hukumatni keng joriy etish chora-tadbirlari to`g`risida&quot; gi qarorining
				ijrosini ta`minlash maqsadida boshqa sohalarda ham, jumladan korxona
				tashkilotlarning boshqaruvidagi tizimlarni ishlab chiqish undan tashqari
				veb saytlar, mobil dasturlar ishlab chiqish bilan shug`ullanadi
			</motion.p>
			<motion.div
				variants={aboutVariants}
				className="flex gap-6 my-6"
			>
				<Icon.Facebook className="fill-softBlack hover:fill-facebook transition-all" />
				<Icon.Instagram className="fill-softBlack hover:fill-instagram transition-all" />
				<Icon.Telegram className="fill-softBlack hover:fill-telegram transition-all" />
			</motion.div>
			<Button onClick={openModal}>Bog&apos;lanish</Button>
		</MotionGrow>
	);
}

