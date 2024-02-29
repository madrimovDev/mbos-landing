import { useEffect, RefObject } from "react";

const useOutsideClick = <T extends HTMLElement>(
	handler: () => void,
	ref: RefObject<T>
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler();
			}
		};

		const handleTouchStart = (event: TouchEvent) => {
			handleClickOutside(event);
		};

		const handleMouseDown = (event: MouseEvent) => {
			handleClickOutside(event);
		};

		document.addEventListener("touchstart", handleTouchStart);
		document.addEventListener("mousedown", handleMouseDown);

		return () => {
			document.removeEventListener("touchstart", handleTouchStart);
			document.removeEventListener("mousedown", handleMouseDown);
		};
	}, [handler, ref]);
};

export default useOutsideClick;
