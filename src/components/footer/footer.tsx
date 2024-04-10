import type { Footer } from "@/dict/types";
import { Icon } from "@/shared/icons";
import { Container, Logo } from "@/shared/ui";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
interface Props {
	data: Footer;
}
export default function Footer({ data }: Props) {
	return (
		<section className="bg-gray-950 text-lightBlack mt-[100px]">
			<Container className="py-20 grid md:grid-cols-4 gap-[50px] md:gap-[100px]">
				<div>
					<Logo href="/" />
					<p className="text-xs leading-4 mt-5">{data.description}</p>
					<div className="flex gap-4 my-5">
						<Icon.Facebook className="fill-softBlack hover:fill-facebook transition-all" />
						<Icon.Instagram className="fill-softBlack hover:fill-instagram transition-all" />
						<Icon.Telegram className="fill-softBlack hover:fill-telegram transition-all" />
					</div>
				</div>
				<div>
					<h3 className="font-bold text-white">{data.siteMap.title}</h3>
					<ul className="mt-5 space-y-1 text-sm font-medium">
						{data.siteMap.items.map((i) => (
							<li key={i.href}>
								<Link href={{ hash: i.href }}>{i.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className="font-bold text-white">{data.projects.title}</h3>
					<ul className="mt-5 space-y-1 text-sm font-medium">
						{data.projects.items.map((i) => (
							<li key={i.href}>
								<Link href={{ hash: i.href }}>{i.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className="font-bold text-white">Bog&apos;lanish</h3>
					<ul className="mt-5 space-y-1 text-sm font-medium">
						<li>
							<span className="flex items-start gap-2">
								<MapPin />
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

