"use client"

import React from "react"
import useMousePosition from "@/hooks/useMousePosition"
export default function Pointer() {
	const { x, y } = useMousePosition()
	return (
		<div
			className="w-20 h-20 mouse-pointer"
			style={{ left: x, top: y }}
		></div>
	)
}
