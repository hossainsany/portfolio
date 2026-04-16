import { Button } from './ui/button'
import { Download, PanelsTopLeft } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 lg:px-0 min-h-screen flex flex-col justify-center items-center gap-6">
        <h1 className="text-4xl md:text-6xl text-center font-bold leading-10 md:leading-8">
          Hi, I'm Hossain Sany
        </h1>
        <span className="block text-xl md:text-2xl mb-6">
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
          >
            <PanelsTopLeft className="mr-2" /> View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-full md:min-w-auto"
          >
            <Download className="mr-2" /> Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
