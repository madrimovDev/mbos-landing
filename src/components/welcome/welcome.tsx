"use client";
import { Autoplay } from "swiper/modules";
import Slide1 from "./slide-1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function Welcome() {
	return (
		<div className="">
			<Swiper
				autoplay
				modules={[Autoplay]}
				loop
			>
				<SwiperSlide>
					<Slide1
						img="/images/bg.jpg"
						title={{
							mark: "MBOS",
							text: "IT Kompaniyasiga xush kelibsiz",
						}}
						subtitle="Biz sizga qulaykilar yaratamiz"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Slide1
						img="/images/bg.jpg"
						title={{
							mark: "10 yillik",
							text: "tajribaga ega xodimlar",
						}}
						subtitle="Biz sizga qulaykilar yaratamiz"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Slide1
						img="/images/bg.jpg"
						title={{
							mark: "Sifatli",
							text: "Xizmatlarimizni taklif etamiz",
						}}
						subtitle="Biz sizga qulaykilar yaratamiz"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

