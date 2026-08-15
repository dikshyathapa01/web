'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Calendar } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#08121f] to-[#050b14] border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-[#08121f]/50 to-transparent pointer-events-none"></div>

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
              Let&apos;s turn your ideas into a high-performing digital reality. Get a free consultation and project estimate today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5">
                <Mail size={18} /> Get Free Quote
              </Link>
              <Link href="/contact?tab=book" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 rounded-full font-bold transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5">
                <Calendar size={18} /> Book a Meeting
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
