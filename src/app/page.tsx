import { Hero } from "../components/hero"
import { About } from "../components/aboutPage"
import { Experience } from "../components/experiencePage"
import { Projects } from "../components/projectsPage"
import { Contact } from "../components/contactPage"
import { Footer } from "../components/footer"
import { Spotlight } from "../components/spotlight" 

export default function Page() {
  return (
    <>
      <Spotlight />
      <div className="relative mx-auto max-w-7xl lg:flex">
        {/* Left column — sticky on desktop */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-svh lg:w-1/2 lg:flex-col">
          <Hero /> 
        </div>

        {/* Right column — scrollable content */}
        <main className="lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}
