"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { SectionTitle } from "@/shared/ui";

const employeesArray = [
	{
		img: "/images/xodimlar/azizbek.jpg",
		blurred: "/images/xodimlar/azizbek-blur.jpg",
		name: "Abdullayev Azizbek",
		position: "B2B Menejeri",
	},
	{
		img: "/images/xodimlar/dilshod.jpg",
		blurred: "/images/xodimlar/dilshod-blur.jpg",
		name: "Sahabutdinov Dilshod",
		position: "Texnik Departament Rahbari",
	},
	{
		img: "/images/xodimlar/madina.jpg",
		blurred: "/images/xodimlar/madina-blur.jpg",
		name: "Saparova Madina",
		position: "Sifat Nazorati Menejeri",
	},
	{
		img: "/images/xodimlar/mansur.jpg",
		blurred: "/images/xodimlar/mansur-blur.jpg",
		name: "Yusupov Mansur",
		position: "Kompaniya Rahbari",
	},
	{
		img: "/images/xodimlar/muxtor.jpg",
		blurred: "/images/xodimlar/muxtor-blur.jpg",
		name: "Saparboyev Muxtor",
		position: "Dasturchi",
	},
	{
		img: "/images/xodimlar/quvondiq.jpg",
		blurred: "/images/xodimlar/quvondiq-blur.jpg",
		name: "Kurbaniyozov Quvondiq",
		position: "Sotuv Departamenti rahbari",
	},
	{
		img: "/images/xodimlar/shoxida.jpg",
		blurred: "/images/xodimlar/shoxida-blur.jpg",
		name: "Rajabboyeva Shohida",
		position: "Moliya Departamenti rahbari",
	},
	{
		img: "/images/xodimlar/xudoyshukur.jpg",
		blurred: "/images/xodimlar/xudoyshukur-blur.jpg",
		name: "Masharipov Xudoyshukur",
		position: "Texnik Dasturchi",
	},
];

export default function employees() {
	return (
		<div
			className="mt-[160px] px-4 container"
			id="employees"
		>
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
						slidesPerView: 4,
						spaceBetween: 50,
					},
				}}
			>
				{employeesArray.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="rounded-xl overflow-hidden">
								<Image
									src={item.img}
									placeholder="blur"
									blurDataURL={item.blurred}
									alt="img"
									className="object-cover w-[450px] h-[350px] rounded-xl overflow-hidden"
									width={450}
									height={300}
								/>
								<div className="mt-2">
									<h2 className="font-bold">{item.name}</h2>
									<p className="capitalize">{item.position}</p>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

