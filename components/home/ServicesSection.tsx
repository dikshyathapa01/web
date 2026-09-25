'use client'
import { motion } from 'framer-motion'
import { Globe, ShoppingCart, LayoutTemplate, Search, Shield, Cpu, Palette } from 'lucide-react'

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Business Websites",
    description: "Professional, SEO-optimized websites that establish your brand and generate leads."
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "eCommerce Stores",
    description: "High-converting online stores built with Next.js, Khalti, and modern CMS platforms."
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
    icon: <Palette className="w-8 h-8" />,
    title: "Graphic Design",
    description: "Distinctive visual assets and brand designs that make your business stand out."
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
    <section className="bg-black/20 border-y border-white/5 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We <span className="text-gradient">Build</span></h2>
          <p className="text-slate-400 text-lg">
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
              className="glass-card p-8 rounded-3xl group hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(59,130,246,0.1)] transition-all duration-500 flex flex-col items-start relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 text-primary">
                {service.icon}
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed flex-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
