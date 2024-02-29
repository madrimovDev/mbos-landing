import { Icon } from "@/shared/icons";
import { Button, Grow } from "@/shared/ui";

export default function AboutInfo() {
	return (
		<Grow className="md:pr-20">
			<h2 className="text-3xl md:text-6xl font-extrabold text-black">MBOS</h2>
			<h3 className="text-lg md:text-2xl text-softBlack font-semibold">
				Multi Branch Online Service
			</h3>
			<p className="text-lightBlack leading-8 mt-3 md:mt-6">
				Lorem ipsum dolor sit amet consectetur. Mollis nulla amet vulputate duis
				pharetra blandit enim sagittis odio. At nec volutpat sed augue. Nunc
				montes sit mi id vitae. Augue nulla quis tincidunt ante convallis quam
				purus.
			</p>
			<div className="flex gap-6 my-6">
				<Icon.Facebook className="fill-softBlack hover:fill-facebook transition-all" />
				<Icon.Instagram className="fill-softBlack hover:fill-instagram transition-all" />
				<Icon.Telegram className="fill-softBlack hover:fill-telegram transition-all" />
			</div>
			<Button>
				Bog&apos;lanish
			</Button>
		</Grow>
	);
}

