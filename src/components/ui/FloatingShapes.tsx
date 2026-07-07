"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Shape {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  color: string
  shape: "circle" | "square" | "hexagon"
  duration: number
}

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    const generated: Shape[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40,
      rotation: Math.random() * 360,
      color: i % 3 === 0 ? "#2563EB" : i % 3 === 1 ? "#14B8A6" : "#DBEAFE",
      shape: (["circle", "square", "hexagon"] as const)[i % 3],
      duration: 6 + Math.random() * 4,
    }))
    setShapes(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {shape.shape === "circle" && (
            <div
              className="w-full h-full rounded-full"
              style={{ background: shape.color, opacity: 0.2 }}
            />
          )}
          {shape.shape === "square" && (
            <div
              className="w-full h-full rounded-2xl"
              style={{ background: shape.color, opacity: 0.15, transform: `rotate(${shape.rotation}deg)` }}
            />
          )}
          {shape.shape === "hexagon" && (
            <div
              className="w-full h-full"
              style={{ opacity: 0.12 }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50 5, 95 27.5, 95 72.5, 50 95, 5 72.5, 5 27.5"
                  fill={shape.color}
                />
              </svg>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
