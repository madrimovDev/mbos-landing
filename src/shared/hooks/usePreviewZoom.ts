import { useState, useEffect, useRef } from "react";

const usePreviewZoom = () => {
	const [preview, setPreview] = useState(false);
	const previewRef = useRef<HTMLImageElement>(null);

	const togglePreview = () => setPreview((prev) => !prev);

	useEffect(() => {
		const previewElement = previewRef.current;

		const wheelZoom = (event: WheelEvent) => {
			const up = event.deltaY < 0;
			const zoom = 0.05;

			if (previewElement) {
				if (up) {
					previewElement.style.transform = `scale(${
						Number(
							previewElement.style.transform
								.replace("scale(", "")
								.replace(")", "") || "1"
						) + zoom
					})`;
				} else {
					previewElement.style.transform = `scale(${
						Number(
							previewElement.style.transform
								.replace("scale(", "")
								.replace(")", "") || "1"
						) - zoom
					})`;
				}
			}
		};

		if (preview) {
			window.addEventListener("wheel", wheelZoom);
			document.documentElement.style.overflow = "hidden";
		} else {
			document.documentElement.style.overflow = "";
		}

		return () => {
			window.removeEventListener("wheel", wheelZoom);
		};
	}, [preview]);

	return { preview, togglePreview, previewRef };
};

export default usePreviewZoom;
