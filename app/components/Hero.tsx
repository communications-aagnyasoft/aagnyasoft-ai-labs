import Image from "next/image"

interface HeroProps {
  title: string
  description: string
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-900">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-800">{description}</p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative aspect-square max-w-[400px] md:max-w-[600px] mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ARNav.jpg-ewQl8InGx9tHsMjLPWQruoWM3dNLJJ.jpeg"
              alt="Ajna AR Navigation Illustration"
              fill
              className="object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

