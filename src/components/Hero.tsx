import { Button } from './ui/button'
import { Download, PanelsTopLeft } from 'lucide-react'
import HeroGridDraw from './HeroGridDraw'
import { Link } from '@tanstack/react-router'

export const Hero = () => {
  return (
    <section className="bg-background relative overflow-hidden">
      <HeroGridDraw />

      <div className="container mx-auto px-4 lg:px-0 min-h-screen flex flex-col justify-center items-center gap-6 relative z-5">
        <h1 className="text-4xl md:text-6xl text-center font-bold leading-10 md:leading-8">
          Hi, I'm Hossain Sany
        </h1>
        <span className="block text-xl md:text-2xl font-mono mb-6">
          Full-Stack Software Engineer
        </span>
        <p className="lg:max-w-[60%] text-center">
          I specialize in the React/TypeScript ecosystem and serverless database
          architecture. Currently focused on building scalable UI/UX and
          resilient backend payment pipelines for fast-paced scale-ups.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-6 w-full md:w-auto">
          <Button
            variant="default"
            size="lg"
            className="min-w-full md:min-w-auto"
            asChild
          >
            <Link to="/case-studies">
              <PanelsTopLeft className="mr-2" /> View Projects
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-full md:min-w-auto"
            asChild
          >
            <a
              href="/hossains-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2" /> Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
