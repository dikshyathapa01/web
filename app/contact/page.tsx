import { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react'
import { CalendlyWidget } from '@/components/CalendlyWidget'




export const metadata: Metadata = {
  title: 'Contact | Pahadi',
  description: 'Get in touch to discuss a new website, redesign, or landing page.',
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pahadi.technologies@gmail.com',
    href: 'mailto:pahadi.technologies@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+977-9849104391',
    href: 'tel:+977-9849104391',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Banepa, Kavrepalanchowk',
    href: null,
  },
]

const expectations = [
  'Clear scope and timeline before work begins',
  'Fast communication throughout the project',
  'A polished final result designed to convert',
]

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-200 h-200 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-160 h-160 bg-white/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground mb-6">
            <Clock size={16} /> Typical response time: within 1 business day
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s build a <span className="text-gradient">professional website</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Share your goals, timeline, and the kind of result you want. We&apos;ll reply with a clear next step and the right way to move forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          <aside className="lg:col-span-4 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Contact details</h2>
              <div className="space-y-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                        <div className="font-medium text-foreground wrap-break-word">{item.value}</div>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a key={item.label} href={item.href} className="block rounded-2xl p-3 -mx-3 hover:bg-white/5 transition-colors">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="rounded-2xl p-3 -mx-3">
                      {content}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 to-transparent relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">What to include in your message</h3>
              <ul className="space-y-3 text-sm text-slate-300 relative z-10">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-8">
            <section id="contact-form" className="glass-card p-8 md:p-10 rounded-3xl border border-white/10">
              <div className="max-w-2xl mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Send a project brief</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Use the form below to outline what you need. I&apos;ll review the details and get back to you with a practical plan.
                </p>
              </div>
              <ContactForm />
            </section>

          <section id="booking" className="glass-card p-8 md:p-10 rounded-3xl border border-white/10">
  <div className="mb-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule a discovery call</h2>
    <p className="text-muted-foreground leading-relaxed mb-6">
      If you already know the project is a fit, click the button below to book a short call to discuss scope, priorities, and timeline.
    </p>
    
    <CalendlyWidget />
  </div>
</section>
          </div>
        </div>
      </div>
    </div>
  )
}
