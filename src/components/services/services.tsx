"use client";
import { Container, SectionTitle } from "@/shared/ui";
import { ArrowUpRight, Bot, PieChart, Store, Wallpaper } from "lucide-react";
import useModalStore from "../core/contact-modal-store";

export default function Services() {
	const openModal = useModalStore((s) => s.openModal);
	return (
		<Container className="mt-[80px] md:mt-[160px]">
			<SectionTitle>Xizmatlarimiz</SectionTitle>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20 place-items-stretch">
				<div
					onClick={openModal}
					className="bg-gray-50 px-4 py-8 rounded-lg group flex flex-col justify-center items-start gap-4 cursor-pointer hover:scale-105 hover:shadow-lg transition-all"
				>
					<div className="flex items-center gap-4">
						<span className="group-hover:text-primary transition-all">
							<Wallpaper
								size="2.5em"
								strokeWidth={1}
							/>
						</span>
						<h3 className="text-2xl font-bold text-softBlack">Veb Saytlar</h3>
					</div>
					<p className="text-lightBlack flex-1 leading-relaxed">
						Internet orqali elektronik sharoitda joylashgan, maqsadli
						ma&apos;lumotlar va xizmatlarni taqdim etuvchi virtual platforma.
					</p>
					<button className="group-hover:text-blue-500 inline-flex items-center gap-2 text-sm">
						Buyurtma Berish <ArrowUpRight size="1.5em" />
					</button>
				</div>
				<div
					onClick={openModal}
					className="bg-gray-50 px-4 py-8 rounded-lg group flex flex-col justify-center items-start gap-4 cursor-pointer hover:scale-105 hover:shadow-lg transition-all"
				>
					<div className="flex items-center gap-4">
						<span className="group-hover:text-primary transition-all">
							<Store
								size="2.5em"
								strokeWidth={1}
							/>
						</span>
						<h3 className="text-2xl font-bold text-softBlack">
							Online Dokonlar
						</h3>
					</div>
					<p className="text-lightBlack flex-1 leading-relaxed">
						Internet orqali mahsulot sotish va etkazib berish xizmatlari. Tez va
						qulaylik, xavfsizlik va yetkazib berish samaradorligi.
					</p>
					<button className="group-hover:text-blue-500 inline-flex items-center gap-2 text-sm">
						Buyurtma Berish <ArrowUpRight size="1.5em" />
					</button>
				</div>
				<div
					onClick={openModal}
					className="bg-gray-50 px-4 py-8 rounded-lg group flex flex-col justify-center items-start gap-4 cursor-pointer hover:scale-105 hover:shadow-lg transition-all"
				>
					<div className="flex items-center gap-4">
						<span className="group-hover:text-primary transition-all">
							<PieChart
								size="2.5em"
								strokeWidth={1}
							/>
						</span>
						<h3 className="text-2xl font-bold text-softBlack">CRM Tizimlar</h3>
					</div>
					<p className="text-lightBlack flex-1 leading-relaxed">
						Kompaniyalar uchun mijozlar bilan aloqalarni boshqarish va xizmat
						ko&apos;rsatish jarayonlarini avtomatlashtirish dasturiy
						ta&apos;minotidir.
					</p>
					<button className="group-hover:text-blue-500 inline-flex items-center gap-2 text-sm">
						Buyurtma Berish <ArrowUpRight size="1.5em" />
					</button>
				</div>
				<div
					onClick={openModal}
					className="bg-gray-50 px-4 py-8 rounded-lg group flex flex-col justify-center items-start gap-4 cursor-pointer hover:scale-105 hover:shadow-lg transition-all"
				>
					<div className="flex items-center gap-4">
						<span className="group-hover:text-primary transition-all">
							<Bot
								size="2.5em"
								strokeWidth={1}
							/>
						</span>
						<h3 className="text-2xl font-bold text-softBlack">
							Telegram Botlar
						</h3>
					</div>
					<p className="text-lightBlack flex-1 leading-relaxed">
						Telegramda ishlaydigan dastur. Mijozlar bilan aloqani
						avtomatlashtirish, xizmatlarni taklif qilish uchun yordam beradi.
					</p>
					<button className="group-hover:text-blue-500 inline-flex items-center gap-2 text-sm">
						Buyurtma Berish <ArrowUpRight size="1.5em" />
					</button>
				</div>
			</div>
		</Container>
	);
}

