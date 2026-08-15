'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const reasons = [
  "Pixel-perfect, modern designs",
  "High-performance & fast loading times",
  "Mobile-first responsive approach",
  "SEO optimized out of the box",
  "Clean, maintainable code",
  "Transparent communication & timely delivery"
]

export function WhyChooseMe() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Me?</h2>
            <p className="text-primary/70 mb-8 text-lg leading-relaxed">
              We don&apos;t just build websites; We build digital experiences that drive growth. With a focus on modern aesthetics, performance, and user experience, We ensure your business stands out in a crowded digital landscape.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 text-primary text-lg">
                  <Check className="w-6 h-6 text-accent shrink-0" />
                  <span className="font-medium text-sm md:text-base">{reason}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-10 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative flex justify-center"
          >
            <div className="aspect-[4/3] w-full max-w-lg rounded-2xl bg-slate-100 overflow-hidden relative shadow-lg flex items-center justify-center border border-slate-200">
              <div className="text-slate-400 font-medium flex flex-col items-center gap-2">
                <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>Illustration Placeholder</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
