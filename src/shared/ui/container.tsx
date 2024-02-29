import { ElementType, ForwardRefRenderFunction, HTMLAttributes, forwardRef } from "react";
import { combineClassNames } from "../utils/combineClassNames";

interface Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
}

const ContainerRenderFunction: ForwardRefRenderFunction<HTMLElement, Props> = (
	{ className, as: Component = "div", ...props },
	ref
) => {
	return (
		<Component
			ref={ref}
			className={combineClassNames("container", className)}
			{...props}
		/>
	);
};

export default forwardRef(ContainerRenderFunction);
