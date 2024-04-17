"use client";
import { motion } from "framer-motion";
import { Fragment } from "react";

interface Props {
	title: {
		mark: string;
		text: string;
	};
	subtitle: string;
	img: string;
	animate: boolean;
	index: number;
}
const imgs = ["/images/mbos-company/1.JPG", "/images/mbos-company/2.JPG", "/images/mbos-company/3.JPG"];
export default function Slide1({
	subtitle,
	title,
	img,
	animate,
	index,
}: Props) {
	const text = (text: string) => {
		const textArray = text.split(" ");
		const firstHalf = textArray.slice(0, Math.ceil(textArray.length / 2));
		const secondHalf = textArray.slice(textArray.length / 2, textArray.length);
		return [firstHalf.join(" "), secondHalf.join(" ")] as const;
	};
	return (
		<div className="w-full h-[calc(100vh-65px)] md:h-[calc(100vh-80px)] grid place-items-center bg-black">
			<div className="container text-white relative z-10">
				<motion.h1
					animate={{
						opacity: animate ? 1 : 0,
						y: animate ? 0 : -20,
						transition: {
							delay: 1,
							duration: 1,
							type: "keyframe",
						},
					}}
					className="text-center text-4xl sm:text-5xl md:text-7xl font-black text-white capitalize"
				>
					<span className="leading-snug">{text(title.text)[0]}</span> <br />
					<span className="">{text(title.text)[1]}</span>
				</motion.h1>
				<motion.h2
					animate={{
						opacity: animate ? 1 : 0,
						y: animate ? 0 : -20,
						transition: {
							delay: 1.4,
							duration: 1,
							type: "keyframe",
						},
					}}
					className="text-center mt-8 text-xl sm:text-2xl md:text-3xl capitalize"
				>
					{subtitle}
				</motion.h2>
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
			<div className="w-full h-full absolute inset-x-0 bottom-0 z-[1]">
				<div className="w-full h-full absolute inset-0 bg-gradient-to-b from-black/40   to-black/0 z-[1]" />
				<div
					style={{
						backgroundImage: `url(${imgs[index]})`,
					}}
					className={`w-full h-full bg-bottom bg-cover  opacity-50`}
				/>
			</div>
		</div>
	);
}

