"use client";

import useModalStore from "./contact-modal-store";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useRef } from "react";
import { X } from "lucide-react";
import useKeyDown from "@/shared/hooks/useKeyDown";
import { Button } from "@/shared/ui";
import { useForm } from "@/shared/hooks/useForm";
import { t } from "@/dict";

const wrapperVariant: Variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
			duration: 0.2,
			ease: [0.43, 0.13, 0.23, 0.96],
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: [0.43, 0.13, 0.23, 0.96],
			when: "afterChildren",
		},
	},
};

const modalVariants: Variants = {
	initial: {
		opacity: 0,
		y: -20,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
	exit: {
		opacity: 0,
		y: -20,
		scaleY: 0.8,
		originY: "top",
		transition: {
			duration: 0.1,
		},
	},
};
interface Props {
	lang: "en" | "ru" | "uz";
}
export default function ContactModal({ lang }: Props) {
	const { isOpen, closeModal, getLink, target } = useModalStore();
	const modalRef = useRef<HTMLDivElement>(null);
	const data = t(lang);
	const { submitHandler } = useForm();
	useKeyDown("Escape", closeModal);
	const onSubmit = (data: any) => {
		const link = getLink(target);
		if (link) {
			const url = new URL(link?.link, "https://lead.mbos.uz");
			const searchs = Object.fromEntries(url.searchParams.entries());
			const l = Object.keys(searchs)
				.map((key) => `${key}=${searchs[key]}`)
				.join("&");

			fetch(`https://lead.mbos.uz/api/v1/lead?${l}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					full_name: data.full_name,
					phone: data.phone,
					description: data.message,
				}),
			}).then((data) => {
				console.log(data);
			});
		}
	};

	return (
		<AnimatePresence mode="wait">
			{isOpen && (
				<motion.div
					variants={wrapperVariant}
					initial="initial"
					animate="animate"
					exit="exit"
					className="fixed inset-0 px-4 backdrop-blur-sm z-50 bg-black/40 flex justify-center items-center pt-10"
				>
					<motion.div
						ref={modalRef}
						className="max-w-md w-full p-4 bg-white shadow-lg rounded-lg relative"
						variants={modalVariants}
					>
						<button
							onClick={closeModal}
							className="absolute top-2 right-2 hover:bg-black/10 rounded-md text-black p-1"
						>
							<X size="1em" />
						</button>
						<div className="space-y-4 mt-4">
							<blockquote className="bg-gray-50 text-sm leading-relaxed text-gray-500 pl-2 py-2 border-l-4 border-l-primary">
								{data.modalData.notification.message}
								<div className="mt-2">
									{data.modalData.notification.contact(data.coreData.phone)}
								</div>
								<div className="mt-2 font-bold">
									{data.modalData.notification.marked}
								</div>
							</blockquote>
							<form
								className="space-y-4 "
								onSubmit={submitHandler(onSubmit)}
							>
								<div>
									<input
										type="text"
										required
										title={data.modalData.nameTitle}
										name="full_name"
										minLength={3}
										maxLength={100}
										onInvalid={(e) => {
											const el = e.target as HTMLInputElement;

											if (el.validity.valid) return;
											(e.target as HTMLInputElement).setCustomValidity(
												data.modalData.nameTitle
											);
										}}
										className="border border-gray-300 w-full rounded-md p-2"
										placeholder={data.modalData.namePlaceholder}
									/>
								</div>
								<div>
									<input
										type="tel"
										name="phone"
										title={data.modalData.phoneTitle}
										required
										minLength={3}
										maxLength={100}
										onInvalid={(e) => {
											const el = e.target as HTMLInputElement;
											if (el.validity.patternMismatch) return;
											(e.target as HTMLInputElement).setCustomValidity(
												data.modalData.phoneTitle
											);
										}}
										pattern="^(?:\+998)?\d{9}$"
										className="border border-gray-300 w-full rounded-md p-2"
										placeholder={data.modalData.phonePlaceholder}
									/>
									<p className="mt-1 text-xs text-gray-500">
										{data.modalData.phoneExample}
									</p>
								</div>
								<div>
									<textarea
										name="message"
										className="border border-gray-300 w-full rounded-md p-2"
										placeholder={data.modalData.messagePlaceholder}
									/>
								</div>
								<Button className="w-full rounded-md">
									{data.modalData.sendMessage}
								</Button>
							</form>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

