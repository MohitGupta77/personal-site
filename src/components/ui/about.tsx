const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
  "REST & GraphQL",
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            About Me
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          <div className="space-y-5 md:col-span-3">
            <p className="leading-relaxed text-muted-foreground">
              {"I'm a software developer who thrives on turning complex problems into simple, elegant solutions. With a deep curiosity for how things work under the hood, I approach every project with both technical rigor and creative thinking."}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {"Beyond writing code, I care about the full picture \u2014 accessibility, performance, and the subtle details that make an interface feel intuitive. I believe the best software is the kind you barely notice because it just works."}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {"When I'm not building, you'll find me exploring open source projects, reading about system design, or tinkering with new technologies just for the fun of it."}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-4 font-mono text-xs tracking-widest text-primary uppercase">
              Tech I work with
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
