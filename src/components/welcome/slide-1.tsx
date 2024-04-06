"use client";
import { motion } from "framer-motion";

interface Props {
	title: {
		mark: string;
		text: string;
	};
	subtitle: string;
	img: string
}

export default function Slide1({ subtitle, title, img }: Props) {
	return (
		<div className="w-full h-screen grid place-items-center mt-[-80px] bg-black">
			<div className="container text-white relative z-10">
				<h1 className="text-center text-5xl md:text-6xl font-black text-white">
					<span className="text-primary">{title.mark}</span> {title.text}
				</h1>
				<h2 className="text-center mt-8 text-2xl md:text-3xl capitalize">{subtitle}</h2>
			</div>
			<button className="absolute bottom-20 left-1/2 -translate-x-1/2 scale-150 z-10 text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-mouse"
				>
					<rect
						x="5"
						y="2"
						width="14"
						height="20"
						rx="7"
					/>
					<motion.path
						animate={{
							y: [0, 1],
							transition: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 0.8,
							},
						}}
						d="M12 6v4"
					/>
				</svg>
			</button>
			<div className="w-full h-2/3 absolute inset-x-0 bottom-0 z-[1]">
				<div className="w-full h-full absolute inset-0 bg-gradient-to-b from-black to-black/0 z-[1]" />
				<div className={`bg-[url('/images/bg.jpg')] w-full h-full bg-bottom bg-cover grayscale opacity-50`} />
			</div>
		</div>
	);
}

