export function Footer() {
  return (
    <footer className="px-6 py-12 md:px-12 lg:px-20">
      <p className="max-w-lg text-xs leading-relaxed text-muted-foreground">
        {"Loosely designed in Figma and coded in "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          VS Code
        </a>
        {". Built with "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          Next.js
        </a>
        {" and "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          Tailwind CSS
        </a>
        {". Deployed on "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          Vercel
        </a>
        {"."}
      </p>
    </footer>
  )
}
