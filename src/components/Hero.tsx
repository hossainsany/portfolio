import { Button } from './ui/button'
import { Download, PanelsTopLeft } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 lg:px-0 min-h-screen flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl font-bold leading-8">Hi, I'm Hossain Sany</h1>
        <span className="block text-2xl mb-6">
          Full-Stack Software Engineer
        </span>
        <p className="max-w-[60%] text-center">
          I specialize in the React/TypeScript ecosystem and serverless database
          architecture. Currently focused on building scalable UI/UX and
          resilient backend payment pipelines for fast-paced scale-ups.
        </p>
        <div className="flex items-center gap-4 mt-6">
          <Button variant="default" size="lg">
            <PanelsTopLeft className="mr-2" /> View Projects
          </Button>
          <Button variant="outline" size="lg">
            <Download className="mr-2" /> Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
