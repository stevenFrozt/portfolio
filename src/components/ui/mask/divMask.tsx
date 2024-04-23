import React, { ReactNode } from "react"
import { HTMLMotionProps, motion } from "framer-motion"
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

  return (
    <motion.div
      {...props}
      className={cn("h-full mask bg-custom-light", className)}
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - 60 - size / 2}px`,
        WebkitMaskSize: `${value ? size : 30}px`,
        opacity: value ? 1 : 0
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.8
      }}
    >
      <div className="bg-dot-custom-green/40 h-full">{children}</div>
    </motion.div>
  )
}
