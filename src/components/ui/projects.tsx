import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A real-time task management app with collaborative boards, drag-and-drop prioritization, and team analytics built on Next.js and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Synthwave API",
    description:
      "An open-source REST API that generates procedural music data. Features rate limiting, comprehensive docs, and an interactive playground.",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    github: "#",
  },
  {
    title: "PixelMark",
    description:
      "A markdown editor with live preview, syntax highlighting, and image optimization. Designed for developers who write technical content.",
    tags: ["React", "CodeMirror", "Markdown", "Vercel"],
    github: "#",
    live: "#",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px] hover:shadow-primary/10">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-card-foreground">
          {project.title}
        </h3>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              aria-label={`View ${project.title} source code on GitHub`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              aria-label={`Visit ${project.title} live site`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <ul className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
