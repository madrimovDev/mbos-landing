import Link, { LinkProps } from "next/link";
import {
	AnchorHTMLAttributes,
	ForwardRefRenderFunction,
	forwardRef,
} from "react";
import { combineClassNames } from "../utils/combineClassNames";
import Image from "next/image";

interface Props extends LinkProps {}

const LogoRenderFunction: ForwardRefRenderFunction<
	HTMLAnchorElement,
	Props & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ className, ...props }, ref) => {
	return (
		<>
			<Link
				ref={ref}
				className={combineClassNames("", className)}
				{...props}
			>
				<Image
					priority
					src="/images/mbos.png"
					alt="MBOS"
					width={80}
					height={45}
					className="h-auto w-16 md:w-auto"
				/>
			</Link>
		</>
	);
};

export default forwardRef(LogoRenderFunction);

