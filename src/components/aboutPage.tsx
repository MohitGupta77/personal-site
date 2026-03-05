export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-6 py-20 md:px-12 lg:px-20"
      aria-labelledby="about-heading"
    >
      <h2
        id="about-heading"
        className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-primary"
      >
        About
      </h2>
      <div className="max-w-2xl space-y-5 text-base leading-relaxed text-foreground">
        <p>
          {"I’m a data engineer who enjoys building the systems that turn raw data into reliable, usable information. My experience focuses on designing and maintaining data pipelines, integrating APIs, and developing infrastructure that supports data-driven applications. I’ve worked with ETL workflows, SQL-based data transformations, and cloud-based tooling to ensure data is accessible, scalable, and reliable."}
        </p>
        <p>
          {"Over the years I've worked with many different technologies and languages, and I’ve developed a strong ability to quickly adapt to new tools, frameworks, and engineering practices."}
        </p>
        <p>
          {"When I'm not at a screen, you'll probably find me running, reading science fiction, eating ramen, or tinkering with some newer AI models."}
        </p>
      </div>
    </section>
  )
}
