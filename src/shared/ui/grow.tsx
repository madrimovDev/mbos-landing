import { HTMLAttributes, PropsWithChildren } from "react";
import { combineClassNames } from "../utils/combineClassNames";

export default function Grow({
	children,
	className,
}: PropsWithChildren & {
	className?: HTMLAttributes<HTMLDivElement>["className"];
}) {
	return (
		<div className={combineClassNames("flex-1", className)}>{children}</div>
	);
}

