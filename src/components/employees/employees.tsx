"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { SectionTitle } from "@/shared/ui";

const imgSrc = [
	"/images/xodimlar/1-min.png",
	"/images/xodimlar/2-min.JPG",
	"/images/xodimlar/3-min.JPG",
	"/images/xodimlar/4-min.JPG",
	"/images/xodimlar/5-min.JPG",
	"/images/xodimlar/6-min.JPG",
	"/images/xodimlar/7-min.JPG",
	"/images/xodimlar/8-min.png",
	"/images/xodimlar/9-min.jpg",
	"/images/xodimlar/10-min.jpg",
	"/images/xodimlar/11-min.jpg",
	"/images/xodimlar/12-min.jpg",
];

export default function employees() {
	return (
		<div className="mt-[160px] px-4" id='employees'>
			<SectionTitle className="mb-16">Xodimlar</SectionTitle>
			<Swiper
				modules={[Navigation, A11y, Autoplay]}
				spaceBetween={30}
				slidesPerView={1}
				style={{
					padding: "0 16px",
				}}
				navigation
				autoplay
				loop
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 50,
					},
				}}
			>
				{imgSrc.map((img, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="rounded-xl overflow-hidden">
								<Image
									src={img}
									alt="img"
									className="object-cover w-[450px] h-[500px] rounded-xl overflow-hidden hover:scale-125 transition-all grayscale hover:grayscale-0"
									width={450}
									height={500}
								/>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

