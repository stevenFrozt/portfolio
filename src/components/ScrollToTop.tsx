"use client"
import React, { useEffect } from "react"
import { ArrowUpFromDotIcon } from "lucide-react"
import { useRef } from "react"

export default function ScrollToTop() {
	const scrollButtonRef = useRef<HTMLDivElement>(null)

	const handleScroll = (e: Event) => {
		console.log("scroll", window.scrollY)
		console.log(e)

		if (scrollButtonRef.current) {
			if (window.scrollY > 190) {
				scrollButtonRef.current.style.display = "block"
			} else {
				scrollButtonRef.current.style.display = "none"
			}
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	useEffect(() => {
		console.log(window.scrollY)
		if (scrollButtonRef.current) {
			if (window.scrollY > 20) {
				scrollButtonRef.current.style.display = "block"
			} else {
				scrollButtonRef.current.style.display = "none"
			}
		}
	}, [])

	function scrollUp() {
		window.scrollTo(0, 0)
	}

	return (
		<div
			onClick={scrollUp}
			ref={scrollButtonRef}
			className="right-2 bottom-2 hover:bottom-4 fixed place-items-center grid rounded-full hover:scale-150 transition-all duration-200"
		>
			<ArrowUpFromDotIcon className="w-8 h-8 text-custom-light animate-bounce hover:animate-none" />
		</div>
	)
}
