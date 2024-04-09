import { Icon } from "@/shared/icons";

export default function Top() {
	return (
		<div className="bg-blue-500 text-white">
			<div className="container py-1 text-xs md:text-sm flex justify-between items-center">
				<span>
					<b>+99 891 123 45 67</b>
				</span>
				<ul className="fill-white flex gap-2 scale-75 -mr-4">
					<li>
						<a
							href=""
							className=""
						>
							{<Icon.Facebook />}
						</a>
					</li>
					<li>
						<a
							href=""
							className=""
						>
							{<Icon.Instagram />}
						</a>
					</li>
					<li>
						<a
							href=""
							className=""
						>
							{<Icon.Telegram />}
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

