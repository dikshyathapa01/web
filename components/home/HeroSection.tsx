'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Smartphone, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="bg-white min-h-[600px] flex items-center relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-2 w-max mx-auto md:mx-0"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium">Open for new website projects</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight tracking-tight"
          >
            Websites That <span className="text-accent">Make Your Brand Look Established</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-primary/80 max-w-xl mx-auto md:mx-0"
          >
            Fast, modern websites with a clean premium feel, built to turn attention into calls, messages, and bookings.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <Link href="/contact" className="w-full sm:w-auto px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-md">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-primary rounded-lg font-semibold transition-all flex items-center justify-center shadow-sm">
              View Portfolio
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg"
        >
          {[
            { icon: <Zap className="text-accent w-6 h-6" />, title: "Lightning Fast", desc: "Optimized for speed and performance" },
            { icon: <Smartphone className="text-accent w-6 h-6" />, title: "Mobile First", desc: "Flawless responsive design" },
            { icon: <Code className="text-accent w-6 h-6" />, title: "Modern Tech", desc: "Built with React & Next.js" }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-primary">{feature.title}</h3>
                <p className="text-sm text-primary/70">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
