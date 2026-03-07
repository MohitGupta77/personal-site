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
    period: "June 2025 - Aug 2025",
    title: "Data Engineer",
    company: "Accrete AI",
    href: "https://www.accrete.ai/",
    description:
      "Designed and implemented an automated data pipeline to ingest, transform, and organize raw data into structured datasets. Modeled the processed data as a knowledge graph to expose relationships and enable deeper data insights and analysis.",
    tags: ["Python", "Apache Airflow", "AWS", "PySpark", "Terraform"],
  },
  {
    period: "2023 — 2024",
    title: "Web Application Developer",
    company: "MIT Lincoln Laboratory",
    href: "https://www.ll.mit.edu/",
    description: "Integrated legacy systems with modern web applications and improved application functionality through database query development. Collaborated closely with cross-functional teams to support development and ensure alignment on project progress and requirements.",
    tags: ["SQL", "Mulesoft Anypoint"],
  },
  {
    period: "Sep 2022 - Dec 2022",
    title: "Teaching Assistant",
    company: "Northeastern University",
    href: "https://www.northeastern.edu/",
    description: "Supported undergraduate students in their learning of discrete mathematics concepts and problem-solving techniques.",
    tags: ["Tutor", "Discrete Mathematics"],
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
