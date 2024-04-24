import Nav from "@/components/ui/nav"
import DivMask from "@/components/ui/mask/divMask"
import React from "react"
import { useHoverStore } from "@/store/store"
import Button from "@/components/ui/button"
import { InhabitsFont } from "@/fonts/fonts"

export default function LandingView() {
	const { mouseEnter, mouseLeave } = useHoverStore()
	return (
		<>
			<main className="relative w-full min-h-screen">
				<div className="relative min-h-screen overflow-hidden">
					<h1 className="-top-10 -left-40 absolute font-semibold text-[40rem] text-stroke text-transparent pointer-events-none">
						STEVEN
					</h1>
					<div className="place-items-center grid pt-8">
						<Nav mode="light" />
						<div className="relative pt-40 w-full">
							<p className="w-full text-center text-custom-light text-lg">
								Hi, my name is{" "}
							</p>
							<DivMask className="bg-custom-light w-full h-screen">
								<h1
									className={`text-custom-green text-6xl md:text-9xl pt-[13.5rem]  text-center py-6 ${InhabitsFont.className}`}
								>
									FullStack Developer
								</h1>
							</DivMask>
							<h1
								onMouseEnter={mouseEnter}
								onMouseLeave={mouseLeave}
								className={`text-custom-light text-6xl md:text-9xl  mx-auto  text-center py-6 ${InhabitsFont.className}`}
							>
								Steven Kyle Evio
							</h1>
							<div className="place-items-center grid">
								<Button className="border w-34">
									Get in Touch
								</Button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
