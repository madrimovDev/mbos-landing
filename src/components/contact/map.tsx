import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Map() {
	return (
		<>
			<figure>
				<Image
					src="/images/map.png"
          alt="IT Park"
          className="w-full h-auto"
					width={655}
					height={420}
				/>
				<figcaption className="text-lightBlack text-sm flex items-center gap-1 font-medium mt-4">
					<MapPin
						className="text-red-600 "
						size="1.3em"
					/>
					Tinchlik ko&apos;chasi 6 a uy, Urganch, Xorazm Viloyati,
					O&apos;zbekiston
				</figcaption>
			</figure>
		</>
	);
}

