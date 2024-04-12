"use client";
import { Container, SectionTitle } from "@/shared/ui";
import { ArrowUpRight, Bot, PieChart, Store, Wallpaper } from "lucide-react";
import useModalStore from "../core/contact-modal-store";
import type { Services } from "@/dict/types";
interface Props {
	data: Services;
}
export default function Services({ data }: Props) {
	const openModal = useModalStore((s) => s.openModal);
	return (
		<Container className="mt-[80px] md:mt-[160px]">
			<SectionTitle>{data.sectionTitle}</SectionTitle>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20 place-items-stretch">
				{data.services.map((service) => (
					<div
						key={service.title}
						onClick={() => openModal(service.type)}
						className="bg-gray-50 px-4 py-8 rounded-lg group flex flex-col justify-center items-start gap-4 cursor-pointer hover:scale-105 hover:shadow-lg transition-all"
					>
						<div className="flex items-center gap-4">
							<span className="group-hover:text-primary transition-all">
								{service.type === "website" ? (
									<Wallpaper
										size="2.5em"
										strokeWidth={1}
									/>
								) : service.type === "crm" ? (
									<PieChart
										size="2.5em"
										strokeWidth={1}
									/>
								) : service.type === "e-com" ? (
									<Store
										size="2.5em"
										strokeWidth={1}
									/>
								) : (
									<Bot
										size="2.5em"
										strokeWidth={1}
									/>
								)}
							</span>
							<h3 className="text-2xl font-bold text-softBlack">
								{service.title}
							</h3>
						</div>
						<p className="text-lightBlack flex-1 leading-relaxed">
							{service.description}
						</p>
						<button className="group-hover:text-blue-500 inline-flex items-center gap-2 text-sm">
							<ArrowUpRight size="1.5em" />
						</button>
					</div>
				))}
			</div>
		</Container>
	);
}

