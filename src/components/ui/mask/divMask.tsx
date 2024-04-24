import React, { ReactNode, useEffect, useRef } from "react"
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"
import useMousePosition from "@/hooks/useMousePosition"
import { useHoverStore } from "@/store/store"
import { cn } from "@/utils/cn"
import usePointerSize from "@/hooks/usePointerSize"

type props = HTMLMotionProps<"div"> & {
	children?: ReactNode
	className?: string
}

export default function DivMask({ children, className, ...props }: props) {
	const { value } = useHoverStore()
	const { x, y } = useMousePosition()
	const size = usePointerSize()
	const ref = useRef<HTMLDivElement>(null)

	// useEffect(() => {
	// 	if (ref.current) {
	// 		const selected = ref.current
	// 		const keyframes = {
	// 			webkitMaskPosition: `${x}px ${y}px`,
	// 			webkitMaskSize: `${value ? size : 30}px`,
	// 			opacity: value ? 1 : 0
	// 		}
	// 		const options: KeyframeAnimationOptions = {
	// 			duration: 1000,
	// 			fill: "forwards",
	// 			delay: 0
	// 		}

	// 		selected.animate(keyframes, options)
	// 		// selected.animate(keyframes, options)
	// 	}
	// }, [size, value, x, y])

	return (
		<motion.div
			ref={ref}
			{...props}
			className={cn("h-full mask bg-custom-light", className)}
			animate={{
				WebkitMaskPosition: `${x - size / 2}px ${
					y - 68 - size / 2
				}px`,

				WebkitMaskSize: `${value ? size : 30}px`,
				opacity: value ? 1 : 0
			}}
			transition={{
				type: "tween",
				ease: "backOut",
				duration: 0
			}}
		>
			<div className="bg-dot-custom-green/40 h-full">
				{children}
			</div>
		</motion.div>
	)
}
