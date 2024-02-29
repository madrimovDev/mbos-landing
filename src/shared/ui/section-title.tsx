import { ForwardRefRenderFunction, HTMLAttributes, forwardRef } from "react";
import { combineClassNames } from "../utils/combineClassNames";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

const SectionTitleRenderFunction: ForwardRefRenderFunction<
	HTMLHeadingElement,
	Props
> = ({ className, ...props }, ref) => {
	return (
		<h2
			{...props}
			ref={ref}
			className={combineClassNames(
				"w-fit md:mx-auto text-center text-2xl md:text-4xl text-black relative after:absolute after:w-1/2 after:h-1 after:bg-primary after:left-0 after:-bottom-4 font-bold after:rounded-full",
				className
			)}
		/>
	);
};

export default forwardRef(SectionTitleRenderFunction);

