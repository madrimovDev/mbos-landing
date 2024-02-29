import { Button, Grow } from "@/shared/ui";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Taskie() {
	return (
		<Grow className="flex flex-col md:flex-row-reverse items-center">
			<div className="flex-grow relative w-full grid place-items-center mb-10 md:mb-0">
				<Image
					src="/images/mac.png"
					className=""
					alt="mbos"
					width={673}
					height={406}
				/>
			</div>
			<div className="flex-grow w-full">
				<h3 className="text-3xl font-bold">
					Taskie - Korxonaning ish faoliyatini avtomatlashtirish
				</h3>
				<p className="text-lightBlack leading-8 mt-5 mb-8">
					Ilovada ko&apos;plab sovrinli yangiliklar muntazam o&apos;tkazilib
					turiladi.Undan tashqari ilova doimiy yangilashnida bo&apos;ladi, bu esa
					foydalanuvchilarga ko&apos;plab qulayliklar yaratishga xizmat qiladi
				</p>
				<div className="flex gap-10">
					<div>
						<h4 className="text-5xl font-bold">11K</h4>
						<p className="text-softBlack">Foydalanuvchilar</p>
					</div>
					<div>
						<h4 className="text-5xl font-bold">20+</h4>
						<p className="text-softBlack">Hamkorlar</p>
					</div>
				</div>
				<div className="flex gap-4 mt-8 mb-10">
					<Image
						src="/images/google-play.png"
						alt="Google Play"
						width={120}
						height={30}
					/>
					<Image
						src="/images/app-store.png"
						alt="App Store"
						width={110}
						height={30}
					/>
				</div>
				<div className="flex items-center gap-4">
					<Button>Bog&apos;lanish</Button>
					<button className="flex items-center gap-2 font-semibold text-softBlack hover:text-black">
						Batafsil
						<ExternalLink size="1em" />
					</button>
				</div>
			</div>
		</Grow>
	);
}

