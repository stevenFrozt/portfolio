import DivMask from "@/components/ui/mask/divMask"
import useMousePosition from "@/hooks/useMousePosition"
import { useHoverStore } from "@/store/store"
import Image from "next/image"
import React, { useEffect, useRef } from "react"

export default function AboutView() {
	const targetRef = useRef<HTMLDivElement>(null)
	const { x, y } = useMousePosition()
	useEffect(() => {
		const selected = targetRef.current
		if (selected) {
			const test = x / selected.offsetWidth
			const test2 = y / selected.offsetHeight
			const keyframes = {
				transform: `rotateY(${test * 5}deg) rotateZ(${
					test2 * 2
				}deg)`
			}
			const options: KeyframeAnimationOptions = {
				duration: 1000,
				fill: "forwards",
				delay: 0
			}

			selected.animate(keyframes, options)
		}
	}, [x, y])
	const { mouseEnter, mouseLeave } = useHoverStore()
	return (
		<div className="relative pt-20 pb-20 min-h-screen text-custom-light overflow-hidden">
			<h1 className="py-2 font-bold text-6xl text-center">
				About Me
			</h1>
			<h1
				id="about"
				className="-top-10 -left-40 absolute font-semibold text-[40rem] text-stroke text-transparent pointer-events-none"
			>
				ABOUT
			</h1>
			<div className="relative mx-auto w-5/6">
				<div className="flex md:flex-row flex-col items-center mt-20 w-full">
					<div className="relative w-full h-[25rem] transition-all duration-100 -rotate-2">
						<div className="top-1/2 left-1/2 absolute border-custom-light/40 border rounded-xl w-[25rem] h-[25rem] -translate-x-1/2 -translate-y-1/2 -rotate-6"></div>
						<div className="top-1/2 left-1/2 absolute border-custom-light/40 border rounded-xl w-[25rem] h-[25rem] -translate-x-1/2 -translate-y-1/2 -rotate-12"></div>

						<Image
							src={"/avatar1.png"}
							alt="avatar"
							fill
							className="absolute overflow-hidden object-contain"
						/>
					</div>
					<div
						className="space-y-4 bg-white/10 p-4 rounded-xl w-full text-lg transform-3d transform-gpu"
						ref={targetRef}
					>
						<p>
							Hey there! 👋 I&apos;m a passionate
							developer pursuing Bachelor of Science
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
						<p></p>
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
