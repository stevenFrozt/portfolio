import React, { useEffect, useState } from "react"

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  function updateMousePosition(e: MouseEvent) {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      removeEventListener("mousemove", updateMousePosition)
    }
  }, [])
  return mousePosition
}
