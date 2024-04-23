import { cn } from "@/utils/cn"
import React, { HtmlHTMLAttributes, ReactNode } from "react"

type buttonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
  className?: string
  active?: boolean
  mode?: "light" | "dark"
}

export default function Button({
  children = "Button",
  className = "",
  active = false,
  mode = "light",
  ...props
}: buttonProps) {
  return (
    <button
      className={cn(
        "bg-transparent overflow-hidden  px-4 h-9 group",
        className,
        active ? "font-bold" : "",
        mode === "light"
          ? "text-custom-light  border-custom-light"
          : "text-custom-green  border-custom-green"
      )}
      {...props}
    >
      <span className="block h-10  pt-1 group-hover:-translate-y-9 transition-all duration-300">
        {children}
      </span>
      <span className="block h-10  group-hover:-translate-y-9 transition-all duration-300">
        {children}
      </span>
    </button>
  )
}
