import Image from "next/image";

const imagePaths = [
	"/images/mbos/1.jpg",
	"/images/mbos/2.jpg",
	"/images/mbos/3.jpg",
	"/images/mbos/4.jpg",
	"/images/mbos/5.jpg",
];

const makeImageArray = (length = 3) => {
	return Array.from({ length }, (_, i) => imagePaths[i % imagePaths.length]);
};

const shuffleArray = (arr: any[] = []) => {
	const shuffledArray = [...arr];
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		// Swap elements
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
		// Ensure no consecutive identical elements
		if (shuffledArray[i] === shuffledArray[i - 1]) {
			// Swap with a random element before it
			const k = Math.floor(Math.random() * i);
			[shuffledArray[i], shuffledArray[k]] = [
				shuffledArray[k],
				shuffledArray[i],
			];
		}
	}
	return shuffledArray;
};

export default function Mbos() {
	return (
		<div>
			<div className="relative">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
					<h1 className="text-7xl text-white font-black drop-shadow select-none touch-none">
						<b className="text-primary">MBOS</b> - Vaqtingiz Tejaymiz
					</h1>
				</div>
				<div className="grid grid-cols-5 grid-rows-2 max-h-[30vh] mb-10">
					{shuffleArray(makeImageArray(10)).map((image, i) => (
						<div
							key={i}
							className=""
						>
							<Image
								src={image}
								alt="mbos"
								className="h-full object-cover grayscale hover:grayscale-0 brightness-50 contrast-125 hover:brightness-100 transition-all"
								width={673}
								height={406}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="prose prose-h2:text-3xl max-w-screen-lg mx-auto bg-white p-4 rounded-md shadow">
				<h2>MBOS</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure
					similique delectus, ab, optio ipsa dicta provident nobis architecto
					reiciendis nostrum atque? Ad sit eum provident? Optio beatae
					cupiditate deleniti!
				</p>
				<blockquote>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quasi
						ipsum minus non provident, aliquid repellat cupiditate quam quia,
						nesciunt ea a doloremque atque fuga similique? Itaque, quam.
						Consequatur, sapiente!
					</p>
					<cite>John Doe</cite>
				</blockquote>
				<h3>Biz sizga taklif etamiz:</h3>
				<ol>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ol>
				<h3>Tariflarimiz:</h3>
				<table className="">
					<thead>
						<tr>
							<th>Tarif</th>
							<th>Qiymat</th>
							<th>Imkoniyatlar</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Start</td>
							<td>$100</td>
							<td>
								<ol>
									<li>Lorem ipsum dolor sit.</li>
									<li>Lorem ipsum dolor sit.</li>
									<li>Lorem ipsum dolor sit.</li>
								</ol>
							</td>
						</tr>
						<tr>
							<td>Silver</td>
							<td>$200</td>
							<td>
								<ol>
									<li>Lorem ipsum dolor sit.</li>
									<li>Lorem ipsum dolor sit.</li>
									<li>Lorem ipsum dolor sit.</li>
								</ol>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

