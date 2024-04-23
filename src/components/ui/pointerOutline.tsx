"use client"

import React from "react"
import useMousePosition from "@/hooks/useMousePosition"
import { motion } from "framer-motion"
import usePointerSize from "@/hooks/usePointerSize"
import { useHoverStore } from "@/store/store"

export default function PointerOutline() {
	const { x, y } = useMousePosition()
	const size = usePointerSize()
	const { value } = useHoverStore()
	return (
		<motion.div
			className="w-20 h-20 mouse-outline"
			animate={{
				translateX: `${x - size / 2}px`,
				translateY: `${y - size / 2}px`,
				width: `${size}px`,
				height: `${size}px`,
				opacity: !value ? 1 : 0
			}}
			transition={{
				type: "tween",
				ease: "backOut",
				duration: 0.8
			}}
		></motion.div>
	)
}
