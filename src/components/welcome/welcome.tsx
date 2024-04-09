"use client";
import { Autoplay, Pagination } from "swiper/modules";
import Slide1 from "./slide-1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination"
import { useState } from "react";

const slidesData = [
	{
		img: "/images/bg.jpg",
		title: {
			mark: "MBOS",
			text: "IT Kompaniyasiga xush kelibsiz",
		},
		subtitle: "Biz sizga qulaykilar yaratamiz",
	},
	{
		img: "/images/bg.jpg",
		title: {
			mark: "10 yillik",
			text: "tajribaga ega xodimlar",
		},
		subtitle: "Biz sizga qulaykilar yaratamiz",
	},
	{
		img: "/images/bg.jpg",
		title: {
			mark: "Sifatli",
			text: "Xizmatlarimizni taklif etamiz",
		},
		subtitle: "Biz sizga qulaykilar yaratamiz",
	},
];
export default function Welcome() {
	const [realIndex, setRealIndex] = useState(0);
	return (
		<div className="">
			<Swiper
				id="welcome"
				autoplay={{
					delay: 1000,
          disableOnInteraction: false,
				}}
				onSlideChange={(e) => setRealIndex(e.realIndex)}
				modules={[Autoplay, Pagination]}
				pagination={{
					type: 'progressbar'
				}}
				speed={2000}
				loop
			>
				{slidesData.map((i, index) => {
					return (
						<SwiperSlide key={index}>
							<Slide1
								index={index}
								img={i.img}
								title={{
									mark: i.title.mark,
									text: i.title.text,
								}}
								subtitle={i.subtitle}
								animate={index === realIndex}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

