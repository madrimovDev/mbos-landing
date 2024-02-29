"use client";
import Link from "next/link";
import { cn } from "../utils/cn";
import { useActiveKey } from "../hooks/useActiveKey";

interface MenuItem {
	href: string;
	title: string;
}

interface MenuProps {
	items: MenuItem[];
	onChangeHash?: VoidFunction
	direction?: "vertical" | "horizontal";
	gutter?: string;
	defaultActiveKey?: string;
}

export default function Menu({
	items,
	direction = "horizontal",
	gutter = "gap-4",
	defaultActiveKey,
	onChangeHash
}: MenuProps) {
	const [activeKey, changeActiveKey] = useActiveKey(defaultActiveKey)

	return (
		<ul
			className={cn("flex items-center", gutter, {
				"flex-row": direction === "horizontal",
				"flex-col": direction === "vertical",
			})}
		>
			{items.map((item) => {
				return (
					<li
						key={item.title}
						onClick={onChangeHash}
						className={cn(
							"relative before:w-full before:h-[2px] before:absolute before:transition-colors transition-colors font-medium before:inset-x-0 before:-bottom-1 before:rounded-full",
							{
								"before:bg-primary text-primary": activeKey === item.href,
								"before:bg-transparent": activeKey !== item.href,
							}
						)}
					>
						<Link
							onClick={() => changeActiveKey(item.href)}
							href={"#" + item.href}
						>
							{item.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

