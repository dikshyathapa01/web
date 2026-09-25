'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Smartphone, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    // Section bg is now defined by the global --background variable (Dark Navy)
    <section className="min-h-[600px] flex items-center relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            // Badge: Slightly lighter dark background + subtle border
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-muted-foreground mb-2 w-max mx-auto md:mx-0"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium">Open for new website projects</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            // Text is now global foreground (white)
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          >
            Websites That <span className="text-accent">Make Your Brand Look Established</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // Muted foreground for description
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0"
          >
            Fast, modern websites with a clean premium feel, built to turn attention into calls, messages, and bookings.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <Link href="/contact" className="w-full sm:w-auto px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-md shadow-accent/20">
              Get Started <ArrowRight size={18} />
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
            { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", desc: "Optimized for speed and performance" },
            { icon: <Smartphone className="w-6 h-6" />, title: "Mobile First", desc: "Flawless responsive design" },
            { icon: <Code className="w-6 h-6" />, title: "Modern Tech", desc: "Built with React & Next.js" }
          ].map((feature, i) => (
            // Cards: bg-card (dark gray)
            <div key={i} className="bg-card p-6 rounded-xl border border-border shadow-xl hover:shadow-2xl transition-shadow flex flex-col gap-3">
              <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center text-accent">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}