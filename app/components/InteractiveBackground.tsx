// "use client"

// import type React from "react"
// import { useEffect, useRef } from "react"

// interface Particle {
//   x: number
//   y: number
//   size: number
//   speedX: number
//   speedY: number
//   color: string
// }

// const InteractiveBackground: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const mouseRef = useRef({ x: 0, y: 0 })
//   const particlesRef = useRef<Particle[]>([])
//   const animationFrameRef = useRef<number>()

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     const handleResize = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//       initParticles()
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       mouseRef.current = { x: e.clientX, y: e.clientY }
//     }

//     const initParticles = () => {
//       particlesRef.current = []
//       const numberOfParticles = 50
//       const colors = ["#ad6aea", "#8a2be2", "#9370db", "#ba55d3"]

//       for (let i = 0; i < numberOfParticles; i++) {
//         particlesRef.current.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           size: Math.random() * 3 + 1,
//           speedX: (Math.random() - 0.5) * 0.5,
//           speedY: (Math.random() - 0.5) * 0.5,
//           color: colors[Math.floor(Math.random() * colors.length)],
//         })
//       }
//     }

//     const drawLine = (particle1: Particle, particle2: Particle) => {
//       const dx = particle1.x - particle2.x
//       const dy = particle1.y - particle2.y
//       const distance = Math.sqrt(dx * dx + dy * dy)

//       if (distance < 100) {
//         ctx.beginPath()
//         ctx.strokeStyle = `rgba(138, 43, 226, ${1 - distance / 100})`
//         ctx.lineWidth = 0.5
//         ctx.moveTo(particle1.x, particle1.y)
//         ctx.lineTo(particle2.x, particle2.y)
//         ctx.stroke()
//       }
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       particlesRef.current.forEach((particle, index) => {
//         particle.x += particle.speedX
//         particle.y += particle.speedY

//         if (particle.x > canvas.width) particle.x = 0
//         else if (particle.x < 0) particle.x = canvas.width

//         if (particle.y > canvas.height) particle.y = 0
//         else if (particle.y < 0) particle.y = canvas.height

//         const dx = mouseRef.current.x - particle.x
//         const dy = mouseRef.current.y - particle.y
//         const distance = Math.sqrt(dx * dx + dy * dy)

//         if (distance < 150) {
//           const angle = Math.atan2(dy, dx)
//           const force = (150 - distance) / 150
//           particle.speedX += Math.cos(angle) * force * 0.02
//           particle.speedY += Math.sin(angle) * force * 0.02
//         }

//         ctx.beginPath()
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
//         ctx.fillStyle = particle.color
//         ctx.fill()

//         // Draw lines between nearby particles
//         for (let j = index + 1; j < particlesRef.current.length; j++) {
//           drawLine(particle, particlesRef.current[j])
//         }
//       })

//       animationFrameRef.current = requestAnimationFrame(animate)
//     }

//     handleResize()
//     window.addEventListener("resize", handleResize)
//     window.addEventListener("mousemove", handleMouseMove)
//     animate()

//     return () => {
//       window.removeEventListener("resize", handleResize)
//       window.removeEventListener("mousemove", handleMouseMove)
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current)
//       }
//     }
//   }, [])

//   return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-30" />
// }

// export default InteractiveBackground

