"use client";
import type { Navbar } from "@/dict/types";
import { useActiveKey } from "@/shared/hooks/useActiveKey";
import { useMenu } from "@/shared/hooks/useMenu";
import { Button, Container, Grow, Logo, Menu } from "@/shared/ui";
import { cn } from "@/shared/utils/cn";
import { Variants, motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";

const navbarVariants: Variants = {
	initial: {
		y: -10,
		opacity: 0,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};

interface Props {
	data: Navbar;
}

export default function Navbar({ data }: Props) {
	const { ref, onToggle, open, onClose } = useMenu();
	const router = useRouter();
	const params = useParams();
	return (
		<motion.div
			variants={navbarVariants}
			className="sticky w-full top-0  inset-x-0 bg-white shadow-md z-10"
		>
			<Container
				as="nav"
				className="flex justify-between items-center py-3 md:py-4"
			>
				<Grow>
					<div className="w-fit">
						<Logo
							href="/"
							className="w-max"
						/>
					</div>
				</Grow>
				<Grow className="flex justify-center items-center flex-none">
					<div
						ref={ref}
						className={cn(
							"fixed left-0 md:static md:h-auto h-screen bg-white shadow-lg md:shadow-none md:translate-x-0 md:bg-transparent transition-all top-0 bottom-0 right-0 w-full md:max-w-max p-4 md:p-0",
							{
								"translate-x-0 ": open,
								"-translate-x-full": !open,
							}
						)}
					>
						<button
							onClick={onClose}
							className="absolute top-4 right-4 md:hidden"
						>
							<X />
						</button>
						<Menu
							gutter="gap-[30px] flex-col md:flex-row mt-20 md:mt-0"
							onChangeHash={onClose}
							items={data.menu}
						/>
					</div>
				</Grow>
				<Grow className="flex justify-end items-center gap-4">
					<button
						className="md:hidden"
						onClick={onToggle}
					>
						<MenuIcon size="1.2em" />
					</button>
					<select
						defaultValue={params.lang}
						onChange={(e) => {
							router.push(`/${e.target.value}`);
						}}
						className="p-1 rounded-md bg-transparent"
					>
						<option value="uz">UZ</option>
						<option value="ru">RU</option>
						<option value="en">EN</option>
					</select>
					<Button
						onClick={() => router.push("#contact")}
						className="hidden md:inline-block text-sm"
					>
						{data.contact}
					</Button>
				</Grow>
			</Container>
		</motion.div>
	);
}

