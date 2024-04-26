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

	const tools = [
		{ name: "React js", image: "/tools/reactjs.png" },
		{ name: "Next js", image: "/tools/nextjs.png" },
		{ name: "Node js", image: "/tools/nodejs.png" },
		{ name: "React Query", image: "/tools/reactquery.png" },
		{ name: "React Table", image: "/tools/reacttable.png" },
		{ name: "Next Auth", image: "/tools/nextauth.png" },
		{ name: "Tailwind CSS", image: "/tools/tailwind.jpg" },
		{ name: "Zustand", image: "/tools/zustand.png" },
		{ name: "MySQL", image: "/tools/mysql.png" },
		{ name: "Github", image: "/tools/github.png" },
		{ name: "Figma", image: "/tools/figma.png" },
		{ name: "Adobe XD", image: "/tools/xd.png" },
		{ name: "Adobe Photoshop", image: "/tools/photoshop.png" },
		{ name: "Adobe Illustrator", image: "/tools/illustrator.png" },
		{ name: "Adobe Premier Pro", image: "/tools/premierpro.png" },
		{ name: "Adobe After Effects", image: "/tools/aftereffects.png" }
	]

	return (
		<div className="py-20 min-h-screen text-custom-light group">
			<div className="min-h-[80vh]">
				<h3 className="py-8 font-bold text-center text-xl lg:text-3xl">
					Programming languages I know
				</h3>
				<section className="gap-4 lg:gap-2 grid grid-cols-4 lg:grid-cols-7 mx-auto py-8 w-5/6">
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
							<h5 className="py-8 font-medium text-center text-xl">
								{item?.name}
							</h5>
						</div>
					))}
				</section>
			</div>

			{/* TECHNOLOGY */}

			<div className="flex flex-col justify-center min-h-screen">
				<h3 className="py-8 font-bold text-center text-xl lg:text-3xl">
					Tools I Use
				</h3>
				<section className="gap-8 grid grid-cols-4 mx-auto py-8 w-5/6">
					{tools.map(item => (
						<div
							key={item.name}
							className="transition-all hover:-translate-y-2 duration-400"
						>
							<div className="relative w-full h-28">
								<Image
									src={item?.image}
									alt={item?.name}
									fill
									className="absolute object-contain"
								/>
							</div>
							<h5 className="py-8 font-medium text-center text-xl">
								{item?.name}
							</h5>
						</div>
					))}
				</section>
			</div>
		</div>
	)
}
