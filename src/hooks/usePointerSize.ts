"use client"
import { useEffect, useState } from "react"
import { useHoverStore } from "@/store/store"

export default function usePointerSize() {
  const { value } = useHoverStore()
  const [size, setSize] = useState(30)

  useEffect(() => {
    if (!value) setSize(30)
    else setSize(300)
  }, [value])

  return size
}
