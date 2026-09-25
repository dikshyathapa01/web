import { Metadata } from 'next'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ContactCTA } from '@/components/home/ContactCTA'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Freelance Web Development Agency',
  description: 'Explore our professional web development services including business websites, eCommerce stores, and SaaS applications.',
}

const detailedServices = [
  {
    title: "Business Websites",
    description: "We build professional, modern websites that serve as your 24/7 digital storefront. Designed to establish trust, generate leads, and showcase your brand in the best possible light.",
    features: ["Responsive Design", "SEO Optimized", "CMS Integration", "Contact Forms", "Analytics Setup"],
    price: "Rs.15,000",
    delay: 0.1
  },
  {
    title: "eCommerce Stores",
    description: "High-performance online stores built to maximize conversions. I integrate secure payment gateways, inventory management, and intuitive shopping experiences.",
    features: ["E-sewa Integration", "Product Management", "Shopping Cart", "Order Tracking", "Customer Accounts"],
    price: "Rs.30,000",
    delay: 0.2
  },
  {
    title: "Graphic Design",
    description: "Cohesive visual designs that help your brand communicate clearly and make a memorable impression across digital platforms.",
    features: ["Logo Design", "Brand Identity", "Social Media Graphics", "Marketing Materials", "Print-Ready Assets"],
    price: "Rs.23,000",
    delay: 0.3
  },
  
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Digital Solutions for <span className="text-gradient">Modern Brands</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            From simple landing pages to complex web applications, We provide end-to-end development services tailored to your business goals.
          </p>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      </section>

      <ServicesSection />

      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Deep Dive Into <span className="text-gradient">Core Services</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing and clear deliverables for all my primary service offerings.
            </p>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {detailedServices.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
                <div className="flex-1 w-full glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                  {/* Decorative background */}
                  <div className={`absolute -bottom-20 ${index % 2 === 0 ? '-right-20' : '-left-20'} w-64 h-64 bg-primary/10 rounded-full blur-[60px] transition-transform duration-700 group-hover:scale-150`}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-8">
                      <div className="text-4xl font-bold">{service.price}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <h4 className="text-xl font-bold mb-6"> What&apos;s Included:</h4>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                        <span className="text-lg text-slate-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
