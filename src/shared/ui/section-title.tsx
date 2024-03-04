"use client";
import {
	ForwardRefRenderFunction,
	HTMLAttributes,
	PropsWithChildren,
	forwardRef,
} from "react";
import { combineClassNames } from "../utils/combineClassNames";
import { Variants, motion } from "framer-motion";

interface Props extends PropsWithChildren {
	className?: HTMLAttributes<HTMLElement>["className"];
}
const aboutVariants: Variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};
const SectionTitleRenderFunction: ForwardRefRenderFunction<
	HTMLHeadingElement,
	Props
> = ({ className, ...props }, ref) => {
	return (
		<motion.h2
			variants={aboutVariants}
			ref={ref}
			{...props}
			className={combineClassNames(
				"w-fit md:mx-auto text-center text-2xl md:text-4xl text-black relative after:absolute after:w-1/2 after:h-1 after:bg-primary after:left-0 after:-bottom-4 font-bold after:rounded-full",
				className
			)}
		/>
	);
};

export default forwardRef(SectionTitleRenderFunction);

