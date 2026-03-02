import React from 'react';
import { Mail, Github, Linkedin } from "lucide-react"

const socials = [
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Get in Touch
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mx-auto max-w-lg text-center">
          <p className="mb-8 leading-relaxed text-muted-foreground">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something great. Drop me a line and
            let&apos;s talk.
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            Say Hello
          </a>

          <div className="mt-12 flex items-center justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
