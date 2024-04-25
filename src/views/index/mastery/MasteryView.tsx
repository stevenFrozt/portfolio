import Image from "next/image"
import React from "react"

export default function MasteryView() {
	const languages = [
		{
			name: "C++",
			image: "/languages/cpp.png"
		},
		{
			name: "C#",
			image: "/languages/csharp.png"
		},
		{
			name: "JAVA",
			image: "/languages/java.png"
		},
		{
			name: "Javascript",
			image: "/languages/JavaScript.png"
		},
		{
			name: "Typescript",
			image: "/languages/typescript.png"
		},
		{
			name: "PHP",
			image: "/languages/php.png"
		},
		{
			name: "Python",
			image: "/languages/python.png"
		}
	]

	return (
		<div className="py-20 min-h-screen text-custom-light group">
			<h3 className="py-8 text-3xl text-center">
				Programming languages I know
			</h3>
			<section className="gap-2 grid grid-cols-7 mx-auto py-8 w-5/6">
				{languages.map(item => (
					<div key={item.name} className="">
						<div className="relative w-full h-40 transition-all hover:-translate-y-4 duration-400 hover:rotate-6">
							<Image
								src={item?.image}
								alt={item?.name}
								fill
								className="absolute object-contain"
							/>
						</div>
						<h5 className="py-8 font-medium text-center text-white text-xl">
							{item?.name}
						</h5>
					</div>
				))}
			</section>

			{/* TECHNOLOGY */}
			<div className="pt-40">
				<h3 className="py-8 text-3xl text-center">
					Technology I Used
				</h3>
				<section className="gap-2 grid grid-cols-7 mx-auto py-8 w-5/6">
					{languages.map(item => (
						<div
							className="relative w-full h-28 transition-all hover:-translate-y-4 duration-400 hover:rotate-6"
							key={item.name}
						>
							<Image
								src={item?.image}
								alt={item?.name}
								fill
								className="absolute object-contain"
							/>
						</div>
					))}
				</section>
			</div>
		</div>
	)
}
