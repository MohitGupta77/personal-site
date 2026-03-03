import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative z-10 max-w-2xl">
        <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
          Software Developer
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          I build things for
          <br />
          <span className="text-primary">the web.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Focused on creating clean, performant applications with thoughtful
          user experiences. I care about the details that make software feel
          right.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-10 animate-bounce text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
