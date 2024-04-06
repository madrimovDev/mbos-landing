import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";

export default function Test() {
	const [open, setOpen] = useState(true);
	if (!open) return null;
	return (
		<div className="fixed flex justify-between items bottom-10 left-1/2 overflow-hidden -translate-x-1/2 max-w-md w-full bg-gray-200 p-4 rounded-md shadow-lg text-lg opacity-80 hover:opacity-100">
			<div className="flex -m-4 items-center w-full">
				<div className="h-full aspect-square  grid place-items-center text-orange-600">
					<AlertTriangle size="1.4em" />
				</div>
				Sayt hozir Test rejimida ishlamoqda
			</div>
			<button onClick={() => setOpen(false)}>
				<X />
			</button>
		</div>
	);
}

