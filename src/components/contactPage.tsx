import { Linkedin, Mail } from "lucide-react"

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
      <div className="flex flex-col items-start gap-3">
        <a
        href="mailto:mg.jp2012@gmail.com"
        className="group inline-flex items-center gap-2 border-b border-primary/40 pb-0.5 text-sm font-medium text-primary transition-colors hover:border-primary"
        >
        <Mail className="size-4" />
        {"Say Hello"}
        </a>

        <a
        href="https://www.linkedin.com/in/mohit-gupta-671170251/"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 border-b border-primary/40 pb-0.5 text-sm font-medium text-primary transition-colors hover:border-primary"
        >
        <Linkedin className="size-4" />
        {"Connect"}
          <span className="inline-block transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  )
}
