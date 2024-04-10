"use client";
import { ContactInfo } from "@/dict/types";
import { useForm } from "@/shared/hooks/useForm";
import { Button } from "@/shared/ui";
import { Mail, Phone, Send } from "lucide-react";

interface FormData {
	full_name: string;
	phone: string;
	message: string;
}
interface Props {
	data: ContactInfo;
}
export default function Form({ data }: Props) {
	const { submitHandler } = useForm();

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={submitHandler(onSubmit)}
			className="flex flex-col gap-5"
		>
			<input
				className="p-5 rounded-full border text-sm font-bold text-softBlack"
				placeholder={data.name}
				required
				name="full_name"
				minLength={3}
			/>
			<input
				className="p-5 rounded-full border text-sm font-bold text-softBlack"
				placeholder={data.phone}
				required
				name="phone"
				type="tel"
				pattern="^\+998\d{2}\d{7}$"
				title="+998YYXXXXXXX formatidagi O'zbekiston telefon raqamini kiriting"
			/>
			<textarea
				className="p-5 rounded-3xl border text-sm font-bold text-softBlack  resize-none"
				placeholder={data.message}
				name="message"
				required
				minLength={3}
				title={data.message}
				rows={5}
			></textarea>
			<Button>{data.send}</Button>
			<div className="flex items-center flex-wrap justify-center gap-4 text-softBlack text-sm">
				<a
					className="flex gap-2 items-center"
					href="tel:+998914245014"
				>
					<Phone size="1.4em" />
					+998914245014
				</a>
				<a
					className="flex gap-2 items-center"
					href="mailto:example@gmail.com"
				>
					<Mail size="1.4em" />
					example@gmail.com
				</a>
				<a
					className="flex gap-2 items-center"
					href="http://t.me/mbos_official"
				>
					<Send size="1.4em" />
					@mbos_official
				</a>
			</div>
		</form>
	);
}

