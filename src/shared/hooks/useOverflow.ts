import { useEffect } from "react";

export const useOverflow = (condition: boolean) => {
	useEffect(() => {
		if (condition) {
			document.documentElement.style.overflow = "hidden";
			document.body.style.overflow = "hidden";
		} else {
			document.documentElement.style.overflow = "";
			document.body.style.overflow = "";
		}
		return () => {
			document.documentElement.style.overflow = "";
			document.body.style.overflow = "";
		};
	}, [condition]);
};
