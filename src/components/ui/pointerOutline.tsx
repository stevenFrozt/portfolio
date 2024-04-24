"use client"

import React, { useEffect, useRef } from "react"
import useMousePosition from "@/hooks/useMousePosition"
import { motion } from "framer-motion"
import usePointerSize from "@/hooks/usePointerSize"
import { useHoverStore } from "@/store/store"

export default function PointerOutline() {
	const { x, y } = useMousePosition()
	const size = usePointerSize()
	const { value } = useHoverStore()
	const ref = useRef<HTMLDivElement>(null)

	// const xPosition = x - size / 2
	// const yPosition = y - size / 2

	useEffect(() => {
		if (ref.current) {
			const selected = ref.current
			const keyframes = {
				left: `${x}px`,
				top: `${y}px`,
				width: `${size}px`,
				height: `${size}px`,
				opacity: !value ? 1 : 0
			}
			const options: KeyframeAnimationOptions = {
				duration: 1500,
				fill: "forwards",
				delay: 0
			}

			selected.animate(keyframes, options)
		}
	}, [size, value, x, y])

	return (
		<motion.div
			ref={ref}
			className="w-20 h-20 mouse-outline"
			// animate={{
			// 	left: `${xPosition}px`,
			// 	top: `${yPosition}px`,
			// 	width: `${size}px`,
			// 	height: `${size}px`,
			// 	opacity: !value ? 1 : 0
			// }}
			// transition={{
			// 	type: "tween",
			// 	ease: "backOut",
			// 	duration: 0.8
			// }}
		></motion.div>
	)
}
