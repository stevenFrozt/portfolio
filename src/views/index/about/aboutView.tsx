import { InhabitsFont } from "@/fonts/fonts"
import Image from "next/image"
import React from "react"

export default function AboutView() {
	return (
		<div className="relative min-h-screen text-custom-light">
			<h1 className="-top-10 -left-40 absolute font-semibold text-[40rem] text-stroke text-transparent pointer-events-none">
				ABOUT
			</h1>
			<div className="mx-auto w-5/6">
				<h1 className="py-4 font-bold text-6xl text-center">
					About Me
				</h1>
				<div className="flex items-center mt-40 w-full">
					<div className="relative w-full h-[30rem] -rotate-2 hover:rotate-0 transition-all duration-100">
						<Image
							src={"/avatar1.png"}
							alt="avatar"
							fill
							className="absolute overflow-hidden object-contain"
						/>
					</div>
					<div className="space-y-4 w-full text-lg">
						<p>
							Hey there! 👋 I&apos;m a passionate
							developer with a Bachelor of Science
							in Computer Science, graduating this
							year.
							{/*  I embarked on my coding journey
							back in 2018 and haven&apos;t looked
							back since. Over the years, I&apos;ve
							delved into a variety of languages and
							technologies, including C#, Java, PHP,
							JavaScript, C++, CSS, HTML, React,
							Next.js, MySQL, Tailwind CSS, and
							Node.js. */}
						</p>
						{/* <p>
							I take pride in my perfectionist
							approach to development, ensuring that
							each project I undertake meets the
							highest standards of quality and
							precision. One of my standout
							achievements is the FarmKonek landing
							page, which garnered significant
							attention for its sleek design and
							compelling content.
						</p> */}
						<p>
							While I&apos;m still exploring
							different industries within
							development, I&apos;m always eager to
							learn and grow. I stay updated with
							the latest trends and technologies
							through YouTube tutorials and
							documentation updates, constantly
							seeking ways to expand my knowledge
							and skillset.
						</p>
						<p>
							In addition to coding, I have a
							passion for photography, travel vlogs,
							and editing. When I&apos;m not
							immersed in lines of code, you can
							often find me capturing moments behind
							the lens, documenting my adventures in
							travel vlogs, or honing my editing
							skills to perfection.
						</p>
						<p>
							I&apos;m excited to continue my
							journey in the world of development
							and explore new opportunities to
							innovate and create. Let&apos;s
							connect and build something amazing
							together!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
