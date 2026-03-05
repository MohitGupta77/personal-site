"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  href: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "Personal Page",
    description:
      "The website you are currently on! Built with Next.js and Tailwind CSS, featuring a custom spotlight effect and dynamic theming.",
    href: "#",
    image: "/images/Personal_site_screenshot.png",
    tags: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 py-20 md:px-12 lg:px-20"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="mb-10 text-xs font-medium uppercase tracking-[0.2em] text-primary"
      >
        Projects
      </h2>
      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-x-6 gap-y-4 rounded-md p-5 transition-colors hover:bg-secondary/40 md:grid-cols-[200px_1fr]"
          >
            <div className="relative aspect-video overflow-hidden rounded border border-border/30">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="flex items-center gap-1.5 text-base font-semibold text-heading">
                {project.title}
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </h3>
              <p className="text-sm leading-relaxed text-foreground">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 pt-1" aria-label="Technologies">
                {project.tags.map((tag) => (
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
        ))}
      </div>
    </section>
  )
}
