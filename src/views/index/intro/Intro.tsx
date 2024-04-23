import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

export default function Intro() {
  //   const [height, setHeight] = useState(100)
  //   useEffect(() => {
  //     const delay = setTimeout(() => {
  //       setHeight(0)
  //     }, 1000)
  //     return () => clearTimeout(delay)
  //   }, [])
  return (
    <motion.div
      initial={{ height: "100vh" }}
      animate={{ height: 0 }}
      transition={{ type: "tween", duration: 1 }}
      className={"h-screen bg-gray-500 "}
    ></motion.div>
  )
}
