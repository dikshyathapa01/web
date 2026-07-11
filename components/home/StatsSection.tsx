'use client'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Smile, Calendar, GitCommit } from 'lucide-react'

const stats = [
  { label: "Projects Completed", value: 150, suffix: "+", icon: <Briefcase className="w-8 h-8" /> },
  { label: "Happy Clients", value: 98, suffix: "%", icon: <Smile className="w-8 h-8" /> },
  { label: "Years Experience", value: 5, suffix: "+", icon: <Calendar className="w-8 h-8" /> },
  { label: "Code Commits", value: 10, suffix: "k+", icon: <GitCommit className="w-8 h-8" /> }
]

export function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-slate-50 py-20 border-y border-slate-200" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-accent mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {inView ? <CountUp end={stat.value} duration={2.5} /> : "0"}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-primary/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
