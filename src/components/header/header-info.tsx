import { Button, Grow } from "@/shared/ui";
import { PlayCircle } from "lucide-react";

export default function HeaderInfo() {
	return (
		<Grow className="flex flex-col gap-4 items-start relative">
			<h2 className="px-2 py-1 text-sm border font-bold border-primary rounded-full inline-block">
				Multi Branch Online Service
			</h2>
			<h1 className="text-3xl xl:text-4xl 2xl:text-5xl">
				<span className="text-semibold">Biz sizning</span> <br />
				<span className="font-extrabold text-black">Vaqtingizni</span>
			</h1>
			<p className="leading-8 text-lightBlack">
				Ilovada ko&apos;plab sovrinli yangiliklar muntazam o&apos;tkazilib turiladi.Undan
				tashqari ilova doimiy yangilashnida bo&apos;ladi, bu esa foydalanuvchilarga
				ko&apos;plab qulayliklar yaratishga xizmat qiladi.
			</p>
			<div className="flex gap-4 items-center">
				<Button>Bog&apos;lanish</Button>
				<button className="inline-flex gap-1 items-center">
					<span>
						<PlayCircle />
					</span>
					Biz Haqimizda
				</button>
			</div>
			<div className="absolute bg-green-300 bg-gradient-to-tr from-primary/40 to-primary shadow-[inset_3px_3px_4px_1px_#ffffff40,inset_-3px_-3px_6px_0px_#00000040,0px_6px_15px_0px_#00000040] py-4 px-4 sm:px-8 md:px-10 md:py-6 rounded-full right-0 md:-right-10 2xl:right-16 top-8 md:top-4 -rotate-12">
				<h3 className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-white">
					Tejaymiz
				</h3>
			</div>
		</Grow>
	);
}

