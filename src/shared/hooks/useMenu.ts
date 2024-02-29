import { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import useKeyDown from "./useKeyDown";
import { useOverflow } from "./useOverflow";

export const useMenu =<T extends HTMLElement = any> () => {
	const [open, setOpen] = useState(false);
	const ref = useRef<T>(null);

	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);
	const onToggle = () => setOpen((prev) => !prev);

	useOutsideClick(onClose, ref);
	useKeyDown("Escape", onClose, open);
	useOverflow(open)
	
	return {
		open,
		onOpen,
		onClose,
		onToggle,
		ref
	};
};

