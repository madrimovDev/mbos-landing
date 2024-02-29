import { HTMLAttributes } from "react";

export const combineClassNames = <
	T extends HTMLAttributes<HTMLElement>["className"]
>(
	className: T,
	className2?: T
) => {
	return className2 ? `${className} ${className2}` : className;
};

