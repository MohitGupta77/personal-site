"use client"

import { useEffect, useRef } from "react"

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (ref.current) {
        ref.current.style.setProperty("--x", `${e.clientX}px`)
        ref.current.style.setProperty("--y", `${e.clientY}px`)
      }
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(201, 168, 76, 0.06), transparent 60%)",
      }}
      aria-hidden="true"
    />
  )
}
