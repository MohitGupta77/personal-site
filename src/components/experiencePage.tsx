"use client"

import { ArrowUpRight } from "lucide-react"

interface Role {
  period: string
  title: string
  company: string
  href: string
  description: string
  tags: string[]
}

const roles: Role[] = [
  {
    period: "2023 — Present",
    title: "Senior Product Designer",
    company: "Meridian",
    href: "#",
    description:
      "Lead the design system and core product experience for a developer infrastructure platform. Collaborate closely with engineering to ship pixel-perfect, accessible interfaces at scale.",
    tags: ["Figma", "React", "TypeScript", "Storybook"],
  },
  {
    period: "2021 — 2023",
    title: "Design Engineer",
    company: "Arclight Studio",
    href: "#",
    description:
      "Bridged design and development for a creative agency, building interactive prototypes and production-ready front-ends for clients ranging from Series A startups to Fortune 500 brands.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    period: "2019 — 2021",
    title: "Front-End Developer",
    company: "Noma Labs",
    href: "#",
    description:
      "Built and maintained the customer-facing web platform for a health-tech startup. Focused on performance, accessibility, and delightful micro-interactions.",
    tags: ["React", "JavaScript", "CSS", "Node.js"],
  },
  {
    period: "2017 — 2019",
    title: "Junior Developer",
    company: "Pixel Union",
    href: "#",
    description:
      "Developed Shopify themes and custom storefronts. Learned the craft of translating pixel-perfect mockups into responsive, cross-browser code.",
    tags: ["HTML", "CSS", "JavaScript", "Shopify"],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-6 py-20 md:px-12 lg:px-20"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="mb-10 text-xs font-medium uppercase tracking-[0.2em] text-primary"
      >
        Experience
      </h2>
      <ol className="flex flex-col gap-2">
        {roles.map((role) => (
          <li key={role.title + role.company}>
            <a
              href={role.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-x-6 gap-y-1 rounded-md p-5 transition-colors hover:bg-secondary/40 md:grid-cols-[180px_1fr]"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground pt-1">
                {role.period}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center gap-1.5 text-base font-semibold text-heading">
                  {role.title} &middot; {role.company}
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </h3>
                <p className="text-sm leading-relaxed text-foreground">
                  {role.description}
                </p>
                <ul className="flex flex-wrap gap-2 pt-1" aria-label="Technologies">
                  {role.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
