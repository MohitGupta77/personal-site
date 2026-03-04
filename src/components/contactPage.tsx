import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 py-20 md:px-12 lg:px-20"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-primary"
      >
        Contact
      </h2>
      <div className="max-w-xl space-y-5">
        <p className="text-base leading-relaxed text-foreground">
          {"Whether you have a project in mind, want to collaborate, or just want to say hi — I'd love to hear from you. I'm always open to interesting conversations and new opportunities."}
        </p>
        <a
          href="mailto:hello@alexchen.dev"
          className="group inline-flex items-center gap-2 border-b border-primary/40 pb-0.5 text-sm font-medium text-primary transition-colors hover:border-primary"
        >
          <Mail className="size-4" />
          {"Say Hello"}
          <span className="inline-block transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  )
}
