import Image from "next/image"
interface DevOpsAIAgentProps {
  title: string
  description: string
}

export default function DevOpsAIAgent({ title, description }: DevOpsAIAgentProps) {
  return (
    <section className="py-20 bg-white bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center px-4">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">{title}</h2>
          <p className="text-lg md:text-xl mb-6 text-purple-800">{description}</p>
        </div>
        <div className="w-full md:w-1/2 md:pr-10">
          <Image
            src="/Devops.webp"
            alt="DevOps AI Agent"
            width={600}
            height={400}
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

