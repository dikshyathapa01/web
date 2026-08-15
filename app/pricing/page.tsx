import { Metadata } from 'next'
import { Check, X } from 'lucide-react'
import Link from 'next/link'
import { ContactCTA } from '@/components/home/ContactCTA'

export const metadata: Metadata = {
  title: 'Pricing | Freelance Web Development Agency',
  description: 'Transparent pricing packages for business websites, eCommerce stores, and custom web applications.',
}

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses establishing their online presence.",
    price: "Rs 12,000",
    popular: false,
    features: [
      { name: "Up to 5 Pages", included: true },
      { name: "Mobile Responsive Design", included: true },
      { name: "Contact Form Integration", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "CMS Integration", included: false },
      { name: "eCommerce Functionality", included: false },
      { name: "Custom API Integration", included: false },
    ]
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses needing dynamic content and better conversion.",
    price: "Rs 20,000",
    popular: true,
    features: [
      { name: "Up to 15 Pages", included: true },
      { name: "Mobile Responsive Design", included: true },
      { name: "Advanced Forms & Lead Capture", included: true },
      { name: "Advanced SEO & Schema", included: true },
      { name: "CMS Integration (Sanity/Contentful)", included: true },
      { name: "eCommerce Functionality", included: false },
      { name: "Custom API Integration", included: false },
    ]
  }
]

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
            Clear, value-driven pricing packages designed to match your specific business requirements and growth stage.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`glass-card p-8 rounded-3xl relative border transition-transform duration-300 hover:-translate-y-2 flex flex-col ${
                  plan.popular ? 'border-primary shadow-[0_0_30px_rgba(79,70,229,0.2)]' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground font-medium"> /project</span>}
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/50 shrink-0" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/60'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/contact?plan=${plan.name.toLowerCase()}`}
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.popular 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>
      </section>

      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How long does it take to build a website?", a: "A standard 5-page business website typically takes 2-3 weeks. More complex eCommerce or SaaS applications can take 6-12 weeks depending on the scope of requirements." },
              { q: "Do you provide hosting and maintenance?", a: "Yes! I offer ongoing maintenance and premium hosting packages starting at $99/month to ensure your website remains secure, fast, and up-to-date." },
              { q: "What is your payment structure?", a: "I typically request a 50% deposit upfront to secure the project slot, with the remaining 50% due upon project completion and before final launch." },
              { q: "Will I be able to update the website myself?", a: "Absolutely. For the Professional and Premium packages, I integrate user-friendly Content Management Systems (CMS) like Sanity or Contentful so you can easily edit text and images without touching code." }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6 md:p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
