import { ForwardRefRenderFunction, HTMLAttributes, forwardRef } from "react";
import { combineClassNames } from "../utils/combineClassNames";

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const ButtonRenderFunction: ForwardRefRenderFunction<
	HTMLButtonElement,
	Props
> = ({ className, ...props }, ref) => {
	return (
		<button
			{...props}
			ref={ref}
			className={combineClassNames("bg-primary px-8 py-3 text-white rounded-full text-base leading-none font-semibold shadow-md shadow-primary/50 hover:brightness-105 hover:shadow-lg hover:shadow-primary/50 transition-all", className)}
		/>
	);
};

export default forwardRef(ButtonRenderFunction);

