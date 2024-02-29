import { Grow } from "@/shared/ui";
import Image from "next/image";

export default function HeaderMedia() {
	return (
		<>
			<Grow className="relative flex justify-end">
				<div className="sm:w-40 bg-gradient-to-tr p-4 sm:px-0 sm:py-6 from-gray-200 via-white to-gray-100 absolute -top-10 md:top-0 right-0 md:left-[15%] shadow rounded-3xl flex flex-col justify-center items-center ">
					<span className="text-xl sm:text-3xl text-softBlack font-black">200+</span>
					<span className="font-medium text-softBlack">MIJOZLAR</span>
				</div>
				<div className="bg-gradient-to-tr py-4 px-6 sm:p-9 from-stone-950 via-stone-800  to-stone-950 absolute bottom-4 md:bottom-1/3 left-0 md:left-[5%] shadow-lg  rounded-3xl flex flex-col justify-center items-center ">
					<span className="text-xl sm:text-4xl font-black text-white">11K</span>
					<span className="font-medium text-white text-sm mt-2 text-center leading-none  md:text-base">
						Doimiy
						<br />
						Foydalanuvchilar
					</span>
				</div>
				<Image
					src="/images/client.png "
					alt="client"
					width={560}
					height={490}
					loading="lazy"
				/>
			</Grow>
		</>
	);
}

