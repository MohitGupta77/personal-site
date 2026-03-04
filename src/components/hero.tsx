"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react"

const socials = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "X / Twitter", href: "https://x.com", icon: Twitter },
]

const sections = ["About", "Experience", "Projects", "Contact"]

function useActiveSection() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )

    for (const s of sections) {
      const el = document.getElementById(s.toLowerCase())
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return active
}

export function Hero() {
  const active = useActiveSection()

  return (
    <header className="flex min-h-svh flex-col justify-between px-6 py-16 md:px-12 lg:px-20 lg:py-20">
      <div className="flex flex-col gap-4">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
          Designer & Developer
        </p>
        <h1 className="text-balance font-serif text-5xl leading-tight tracking-tight text-heading md:text-6xl lg:text-7xl">
          Alex Chen
        </h1>
        <p className="max-w-md text-base leading-relaxed text-foreground">
          I craft thoughtful digital experiences where design intent meets
          engineering precision.
        </p>
      </div>

      <div className="flex flex-col gap-10 pt-20">
        <nav aria-label="Section navigation" className="flex flex-col gap-3">
          {sections.map((s) => {
            const isActive = active === s.toLowerCase()
            return (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className={`group flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span
                  className={`inline-block h-px transition-all ${
                    isActive
                      ? "w-16 bg-primary"
                      : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary"
                  }`}
                />
                {s}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>

        <a
          href="#about"
          aria-label="Scroll to About"
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary md:hidden"
        >
          <ArrowDown className="size-4 animate-bounce" />
          Scroll
        </a>
      </div>
    </header>
  )
}
