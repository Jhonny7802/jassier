'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Award, CheckCircle2, Clock } from 'lucide-react'

const stats = [
  { value: 5000, suffix: '+', label: 'Licencias Tramitadas', icon: CheckCircle2 },
  { value: 10, suffix: '+', label: 'Anos de Experiencia', icon: Award },
  { value: 98, suffix: '%', label: 'Tasa de Aprobacion', icon: Users },
  { value: 24, suffix: 'h', label: 'Tiempo de Respuesta', icon: Clock },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setCount(Math.floor(eased * target))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-primary-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function StatsCounter() {
  return (
    <section className="py-16 px-4 bg-primary/95">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="inline-flex h-12 w-12 rounded-xl bg-accent/20 items-center justify-center mb-2">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-primary-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
