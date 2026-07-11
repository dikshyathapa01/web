'use client'
import { motion } from 'framer-motion'
import { Globe, ShoppingCart, LayoutTemplate, Search, Shield, Cpu } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Business Websites",
    description: "Professional, SEO-optimized websites that establish your brand and generate leads."
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "eCommerce Stores",
    description: "High-converting online stores built with Next.js, Stripe, and modern CMS platforms."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "SaaS Applications",
    description: "Scalable full-stack web applications with complex logic, databases, and user authentication."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8" />,
    title: "Landing Pages",
    description: "Laser-focused, fast-loading landing pages designed to maximize conversion rates."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Technical SEO and performance tuning to get your website ranking higher on Google."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Maintenance & Support",
    description: "Ongoing support, security updates, and performance monitoring for your peace of mind."
  }
]

export function ServicesSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What I Build</h2>
          <p className="text-primary/70 text-lg">
            Focused website services that help a business look credible, load fast, and convert better.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-start"
            >
              <div className="text-accent mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-primary/70 mb-6 leading-relaxed flex-1">
                {service.description}
              </p>
              <Link href="/services" className="text-accent font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
