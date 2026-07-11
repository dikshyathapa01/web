'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Calendar } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-1/2">
        <svg viewBox="0 0 1440 120" className="w-full h-20" preserveAspectRatio="none">
          <path d="M0,80 C300,0 1100,0 1440,80 L1440,0 L0,0 Z" fill="var(--background)"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Let's turn your ideas into a high-performing digital reality. Get a free consultation and project estimate today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                <Mail size={18} /> Get Free Quote
              </Link>
              <Link href="/contact?tab=book" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                <Calendar size={18} /> Book a Meeting
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
