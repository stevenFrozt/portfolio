import Pointer from "@/components/ui/pointer"
import PointerOutline from "@/components/ui/pointerOutline"
import React, { ReactNode } from "react"

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <Pointer />
      <PointerOutline />
      {children}
    </>
  )
}
