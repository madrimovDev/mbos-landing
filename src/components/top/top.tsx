import { CoreData } from "@/dict/types";
import { Icon } from "@/shared/icons";
interface Props {
	data: CoreData;
}
export default function Top({ data }: Props) {
	return (
		<div className="bg-blue-500 text-white">
			<div className="container py-1 text-xs md:text-sm flex justify-between items-center">
				<span>
					{data.phone.map((p) => (
						<b
							className="block md:inline-block md:mr-4"
							key={p}
						>
							{p}
						</b>
					))}
				</span>
				<ul className="fill-white flex gap-2 scale-75 -mr-4">
					<li>
						<a
							href={data.facebook}
							target="_blank"
						>
							{<Icon.Facebook />}
						</a>
					</li>
					<li>
						<a
							href={data.instagram}
							target="_blank"
						>
							{<Icon.Instagram />}
						</a>
					</li>
					<li>
						<a
							href={data.telegram}
							target="_blank"
						>
							{<Icon.Telegram />}
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

