'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    content: "The best agency we've ever worked with. They delivered our SaaS platform ahead of schedule and the quality was outstanding.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder at EcoStore",
    content: "Our eCommerce conversions doubled after the redesign. The attention to detail and performance optimization is incredible.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    content: "A seamless experience from start to finish. The custom Next.js website they built is blazingly fast and beautiful.",
    rating: 5
  }
]

export function TestimonialsSlider() {
  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What our clients are saying</h2>
          <p className="text-primary/70 text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-primary/80 italic mb-8 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-primary/60">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
