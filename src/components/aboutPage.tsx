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
          {"I'm a designer and developer who believes the best interfaces feel invisible. My work sits at the intersection of visual storytelling and front-end engineering — blending "}
          <strong className="text-heading">thoughtful design</strong>
          {" with "}
          <strong className="text-heading">robust code</strong>
          {"."}
        </p>
        <p>
          {"Over the years I've shipped products across startups, agencies, and larger product teams. I thrive in the messy middle — turning ambiguous ideas into polished, performant experiences people actually enjoy using."}
        </p>
        <p>
          {"When I'm not at a screen, you'll probably find me rock climbing, reading speculative fiction, or tinkering with "}
          <strong className="text-heading">creative coding</strong>
          {" experiments that never quite make it to production."}
        </p>
      </div>
    </section>
  )
}
