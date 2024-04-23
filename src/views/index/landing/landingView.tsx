import Nav from "@/components/ui/nav"
import DivMask from "@/components/ui/mask/divMask"
import React from "react"
import { useHoverStore } from "@/store/store"
import Button from "@/components/ui/button"
import { InhabitsFont } from "@/fonts/fonts"

export default function LandingView() {
  const { mouseEnter, mouseLeave } = useHoverStore()
  return (
    <>
      <main className="relative min-h-screen w-full">
        <div className="min-h-screen  relative overflow-hidden ">
          <h1 className="absolute text-[40rem] font-semibold -top-10 -left-40 text-transparent text-stroke pointer-events-none">
            STEVEN
          </h1>
          <div className="grid place-items-center pt-8">
            <Nav mode="light" />
            <div className="w-full  pt-40  relative  ">
              <p className="text-custom-light text-center w-full text-lg">
                Hi, my name is{" "}
              </p>
              <DivMask className=" bg-custom-light w-full h-screen ">
                <h1
                  className={`text-custom-green text-6xl md:text-9xl pt-[13.5rem]  text-center py-6 ${InhabitsFont.className}`}
                >
                  FullStack Developer
                </h1>
              </DivMask>
              <h1
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className={`text-custom-light text-6xl md:text-9xl  text-center py-6 ${InhabitsFont.className}`}
              >
                Steven Kyle Evio
              </h1>
              <div className="grid place-items-center">
                <Button className="border w-34">Get in Touch</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
