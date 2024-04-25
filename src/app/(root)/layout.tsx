"use client"

import React, { ReactNode } from "react"

export default function layout({ children }: { children: ReactNode }) {
	return <div className="bg-custom-green bg-dot-white/5">{children}</div>
}
