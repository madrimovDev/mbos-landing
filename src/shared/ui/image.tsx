"use client";
import NextImage, { ImageProps } from "next/image";
import { combineClassNames } from "../utils/combineClassNames";
import { Fullscreen, X } from "lucide-react";
import { cn } from "../utils/cn";
import usePreviewZoom from "../hooks/usePreviewZoom";
import { HTMLAttributes } from "react";

interface Props extends ImageProps {
	rootClassName?: HTMLAttributes<HTMLElement>["className"];
	preview?: boolean;
}
export default function Image({
	className,
	rootClassName,
	preview: p = true,
	...props
}: Props) {
	const { preview, previewRef, togglePreview: toggle } = usePreviewZoom();

	return (
		<div className={combineClassNames("group relative", rootClassName)}>
			{p && !preview && (
				<div className="absolute w-full h-full bg-black/20 opacity-0 invisible group-hover:visible group-hover:opacity-100 cursor-pointer transition-all">
					<button
						onClick={toggle}
						className="absolute top-2 right-2 text-white inline-flex items-center gap-2"
					>
						<Fullscreen />
						<span className="text-xs"> Full Screen</span>
					</button>
				</div>
			)}
			<NextImage
				{...props}
				className={combineClassNames("w-full", className)}
			/>
			<div
				className={cn(
					"fixed inset-0 bg-black/50 backdrop-blur w-full h-screen grid place-items-center transition-all z-10",
					{
						"invisible opacity-0": !preview,
						"visible opacity-100": preview,
					}
				)}
			>
				<button
					className="absolute top-4 right-4 bg-white/20 p-1 text-white rounded-md"
					onClick={toggle}
				>
					<X />
				</button>
				<NextImage
					draggable={false}
					ref={previewRef}
					{...props}
					className={cn("w-[70%] origin-center delay-200 transition-all", {
						"scale-90 opacity-0 -translate-y-96": !preview,
						"scale-100 opacity-100 translate-y-0": preview,
					})}
				/>
			</div>
		</div>
	);
}

