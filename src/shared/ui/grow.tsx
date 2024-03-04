import { HTMLAttributes, forwardRef, PropsWithChildren } from "react";
import { combineClassNames } from "../utils/combineClassNames";

const Grow = forwardRef<
	HTMLDivElement,
	PropsWithChildren<{
		className?: HTMLAttributes<HTMLDivElement>["className"];
		id?: string
	}>
>(({ children, className, id }, ref) => {
	return (
		<div
			ref={ref}
			id={id}
			className={combineClassNames("flex-1", className)}
		>
			{children}
		</div>
	);
});
Grow.displayName = "Grow";
export default Grow;

