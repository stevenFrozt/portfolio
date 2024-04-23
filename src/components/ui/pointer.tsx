"use client"

import React from "react"
import useMousePosition from "@/hooks/useMousePosition"
import { useHoverStore } from "@/store/store"
export default function Pointer() {
  const { x, y } = useMousePosition()
  const { value } = useHoverStore()
  return (
    <div
      className="mouse-pointer bg-red-500 h-20 w-20"
      style={{ left: x, top: y }}
    ></div>
  )
}
