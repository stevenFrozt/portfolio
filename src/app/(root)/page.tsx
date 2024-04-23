"use client"
import AboutView from "@/views/index/about/aboutView"
import Intro from "@/views/index/intro/Intro"
import LandingView from "@/views/index/landing/landingView"

export default function Home() {
  return (
    <>
      <Intro />
      <LandingView />
      <AboutView />
    </>
  )
}
