'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    category: "Web Application",
    image: "linear-gradient(to bottom right, #f1f5f9, #e2e8f0)",
    tech: ["Next.js", "Tailwind", "Prisma"]
  },
  {
    title: "Premium eCommerce Store",
    category: "eCommerce",
    image: "linear-gradient(to bottom right, #e0f2fe, #bae6fd)",
    tech: ["Next.js", "Stripe", "PostgreSQL"]
  }
]

export function PortfolioShowcase() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Work</h2>
            <p className="text-primary/70 text-lg">
              Explore some of our recent projects demonstrating our expertise in building modern web applications.
            </p>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative border border-slate-200 bg-slate-50">
                <div 
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: project.image }}
                ></div>
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="bg-white text-primary px-6 py-3 rounded-full flex items-center gap-2 font-medium shadow-lg">
                    View Project <ExternalLink size={18} />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm text-accent mb-2 font-semibold">{project.category}</div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
