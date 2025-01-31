import { Button } from "@/components/ui/button"

interface CTAProps {
  title: string
  description: string
}

export default function CTA({ title, description }: CTAProps) {
  return (
    <section className="py-20 bg-purple-900 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-xl md:text-2xl mb-8 text-purple-200 max-w-2xl mx-auto">{description}</p>
        <Button variant="secondary" size="lg" className="w-full md:w-auto bg-white text-purple-900 hover:bg-purple-100">
          Contact Us
        </Button>
      </div>
    </section>
  )
}

