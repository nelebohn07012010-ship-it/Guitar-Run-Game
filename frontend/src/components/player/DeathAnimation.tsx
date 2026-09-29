import { useEffect, useState } from "react"
import "./DeathAnimation.css"
import { GAME_CONFIG } from "../../gameConfig"
import fragment1 from "../../assets/fragment_1.png"
import fragment2 from "../../assets/fragment_2.png"
import fragment3 from "../../assets/fragment_3.png"
import DeathParticles from "./DeathParticles"

type Fragment = {
  x: number
  y: number
  velocityX: number
  velocityY: number
  rotation: number
  rotationSpeed: number
  life: number
}

type DeathAnimationProps = {
  x: number
  y: number
  groundY: number
}

const DeathAnimation = ({ x, y, groundY }: DeathAnimationProps) => {
  const [fragments, setFragments] = useState<Fragment[]>([])

  useEffect(() => {
    const initialFragments = Array.from({ length: fragmentImages.length }, () => ({
      x,
      y,
      velocityX: -Math.random() * 90 - 40,
      velocityY: Math.random() * 30 + 25,
      rotation: 0,
      rotationSpeed: (Math.random() - 0.5) * 120,
      life: 1
    }))

    setFragments(initialFragments)

    let lastTime = performance.now()
    let animationFrame: number

    const animate = (time: number) => {
      const deltaTime = (time - lastTime) / 1000
      lastTime = time

      setFragments(current =>
        current.map(fragment => {
          let newY =
            fragment.y +
            fragment.velocityY * deltaTime

          let newVelocityY =
            fragment.velocityY -
            100 * deltaTime

          if (newY <= groundY) {
            newY = groundY

            newVelocityY =
              Math.abs(fragment.velocityY) * 0.55
          }

          return {
            ...fragment,

            x:
              fragment.x +
              fragment.velocityX * deltaTime,

            y: newY,

            velocityY: newVelocityY,

            rotation:
              fragment.rotation +
              fragment.rotationSpeed * deltaTime,
            life: fragment.life - deltaTime * 0.5
          }
        })
      )

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  const fragmentImages = [
    fragment1,
    fragment2,
    fragment3
  ]

  return (
    <div id="death-animation">
      {fragments.map((fragment, index) => (
        <div
          key={index}
          className="death-fragment"
          style={{
            left: `${x}%`,
            bottom: `${fragment.y}%`,
            backgroundImage: `url(${fragmentImages[index]})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: `
        translateX(${fragment.x}px)
        rotate(${fragment.rotation}deg)
      `,
            opacity: fragment.life > 1
              ? 1
              : fragment.life / 1
          }}
        >
          <DeathParticles
            x={2}
            y={0}
          />
        </div>
      ))}
    </div>
  )
}

export default DeathAnimation