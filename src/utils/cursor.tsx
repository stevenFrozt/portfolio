"use client"
import useMousePosition from "@/hooks/useMousePosition"
import { useHoverStore } from "@/store/store"
import Image from "next/image"
import React, { useRef } from "react"
import { cn } from "./cn"

export default function Cursor() {
  const { value } = useHoverStore()

  const mouseOutline = useRef<HTMLDivElement>(null)
  const mousePointer = useRef<HTMLDivElement>(null)
  const { x, y } = useMousePosition()
  const size = 30

  mouseOutline?.current?.animate(
    [
      {
        left: `${x}px`,
        top: `${y}px`
      }
    ],
    { duration: 2000, fill: "forwards" }
  )
  mousePointer?.current?.animate({
    left: `${x}px`,
    top: `${y}px`
  })

  return (
    <>
      {/* POINTER */}
      <div
        ref={mousePointer}
        className="mouse-pointer"
        style={{
          left: x,
          top: y,
          background: value ? "transparent" : "white"
        }}
      ></div>
      {/* OUTLINE */}
      <div
        ref={mouseOutline}
        className={cn("mouse-outline", !value ? "cursor-reveal" : "")}
        style={{
          left: x,
          top: y,
          width: `${!value ? size : 200}px`,
          height: `${!value ? size : 200}px`
          // background: !value ? "transparent" : "#979868"
        }}
      >
        {/* <Image src={"cursor_mask.png"} width={200} height={200} alt="Cursor Reveal" className="" /> */}
      </div>
    </>
  )
}
