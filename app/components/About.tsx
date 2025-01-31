interface AboutProps {
  title: string
  description: string
}

export default function About({ title, description }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">{title}</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-purple-800">{description}</p>
      </div>
    </section>
  )
}


