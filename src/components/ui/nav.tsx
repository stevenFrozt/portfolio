import Button from "@/components/ui/button"
import { cn } from "@/utils/cn"
import React, { HtmlHTMLAttributes } from "react"

type props = HtmlHTMLAttributes<HTMLDivElement> & {
  className?: string
  mode?: "light" | "dark"
}

export default function Nav({ className, mode, ...props }: props) {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Button mode={mode} className="border-b-2">
        About
      </Button>
      <Button mode={mode} className="border-b-2">
        Skills
      </Button>
      <Button mode={mode} className="border-b-2">
        Projects
      </Button>
      <Button mode={mode} className="border-b-2">
        Contact
      </Button>
    </div>
  )
}
