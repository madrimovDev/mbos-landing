export default function loading() {
	return (
		<div
			id="loader"
			className="fixed inset-0 z-50 w-full h-screen bg-white grid place-items-center"
		>
			<div className="custom-loader"></div>
		</div>
	);
}
