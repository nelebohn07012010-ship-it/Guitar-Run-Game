import { useEffect, useState } from "react"
import "./DeathParticles.css"

type Particle = {
  x: number
  y: number
  velocityX: number
  velocityY: number
  life: number
  size: number
}

type DeathParticlesProps = {
  x: number
  y: number

}

const DeathParticles = ({ x, y }: DeathParticlesProps) => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const initialParticles: Particle[] = Array.from(
      { length: 20 },
      () => ({
        x: 0,
        y: 0,
        velocityX: (Math.random() - 0.5) * 8,
        velocityY: Math.random() * 8 + 2,
        life: 1,
        size: Math.random() * 0.35 + 0.15
      })
    )

    setParticles(initialParticles)

    let animationFrame: number
    let lastTime = performance.now()

    const animate = (time: number) => {
      const deltaTime = (time - lastTime) / 1000
      lastTime = time

      setParticles(current =>
        current
          .map(particle => ({
            ...particle,
            x: particle.x + particle.velocityX * deltaTime,
            y: particle.y + particle.velocityY * deltaTime,
            velocityY: particle.velocityY - 12 * deltaTime,
            life: particle.life - deltaTime * 1.5
          }))
          .filter(particle => particle.life > 0)
      )

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div
      className="death-particles"
      style={{
        left: `${x}%`,
        bottom: `${y}%`
      }}
    >
      {particles.map((particle, index) => (
        <div
          key={index}
          className="death-particle"
          style={{
            width: `${particle.size}vw`,
            height: `${particle.size}vw`,
            left: `${particle.x}vw`,
            bottom: `${particle.y}vw`,
            opacity: particle.life > 0.4
              ? 1
              : particle.life / 0.4
          }}
        />
      ))}
    </div>
  )
}

export default DeathParticles