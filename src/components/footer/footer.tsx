import { Icon } from "@/shared/icons";
import { Container, Logo } from "@/shared/ui";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<section className="bg-gray-950 text-lightBlack mt-[100px]">
			<Container className="py-20 grid md:grid-cols-4 gap-[50px] md:gap-[100px]">
				<div>
					<Logo href="/" />
					<p className="text-xs leading-4 mt-5">
						Ilovada ko&apos;plab sovrinli yangiliklar muntazam o&apos;tkazilib
						turiladi.Undan tashqari ilova doimiy yangilashnida bo&apos;ladi, bu esa
						foydalanuvchilarga ko&apos;plab qulayliklar yaratishga xizmat qiladi
					</p>
					<div className="flex gap-4 my-5">
						<Icon.Facebook className="fill-softBlack hover:fill-facebook transition-all" />
						<Icon.Instagram className="fill-softBlack hover:fill-instagram transition-all" />
						<Icon.Telegram className="fill-softBlack hover:fill-telegram transition-all" />
					</div>
				</div>
				<div>
					<h3 className="font-bold text-white">Sayt Xaritasi</h3>
					<ul className="mt-5 space-y-1 text-sm font-medium">
						<li>
							<Link href="#home">Bosh Sahifa</Link>
						</li>
						<li>
							<Link href="#projects">Loyihalar</Link>
						</li>
						<li>
							<Link href="#">Hamkorlar</Link>
						</li>
						<li>
							<Link href="#contact">Bog&apos;lanish</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-bold text-white">Loyihalar</h3>
					<ul className="mt-5 space-y-1 text-sm font-medium">
						<li>
							<Link href="#mbos">Mbos - Online Navbar Olish</Link>
						</li>
						<li>
							<Link href="#taskie">Taskie - Xodimarni Nazorat Qilish</Link>
						</li>
						<li>
							<Link href="#">GPS - Kutuzov</Link>
						</li>
						<li>
							<Link href="#">Elektron Navbat</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-bold text-white">Bog&apos;lanish</h3>
					<ul className="mt-5 space-y-1 text-sm font-medium">
						<li>
							<span className="flex items-start gap-2">
								<MapPin  />
								Tinchlik ko&apos;chasi 6 a uy, Urganch, Xorazm&nbsp;Viloyati
							</span>
						</li>
						<li>
							<a
								href="tel:+998914245014"
								className="flex items-center gap-2"
							>
								<Phone size="1.2em" />
								+998914245014
							</a>
						</li>
						<li>
							<Link
								href="#"
								className="flex items-center gap-2"
							>
								<Mail size="1.2em" />
								example@mail.co
							</Link>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	);
}

