import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="group border-t border-white/10 bg-black/20 mt-24 relative overflow-hidden transition-colors duration-500 hover:bg-black/30">
      {/* Top glowing ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 group-hover:via-primary to-transparent transition-all duration-700"></div>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 rounded-full blur-3xl opacity-30 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center group/logo">
              <Image 
                src="/pahadi.png" 
                alt="Pahadi" 
                width={180} 
                height={54} 
                className="h-13.5 w-45 object-cover object-center transition-transform duration-300 group-hover/logo:scale-105" 
                loading="eager" 
              />
            </Link>
            <p className="text-muted-foreground max-w-sm mt-4 text-sm leading-relaxed">
              Clean, modern websites for brands that want a stronger first impression and more inquiries.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground tracking-wide text-sm uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group/link inline-flex items-center gap-2 py-1 text-muted-foreground transition-all duration-300"
                  >
                    <div className="relative pb-1">
                      <span className="font-medium text-slate-400 group-hover/link:text-primary transition-colors duration-300">
                        {link.label}
                      </span>
                      {/* Base subtle underline */}
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 rounded-full transition-colors duration-300" />
                      {/* Active glowing color underline that expands on hover */}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary via-blue-400 to-accent rounded-full transition-all duration-300 ease-out group-hover/link:w-full shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    </div>
                    <ArrowUpRight 
                      size={14} 
                      className="text-slate-600 -translate-x-1 translate-y-0.5 group-hover/link:text-accent group-hover/link:translate-x-0 group-hover/link:-translate-y-0.5 transition-all duration-300" 
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground tracking-wide text-sm uppercase">Contact</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a 
                  href="mailto:pahadi.technologies@gmail.com" 
                  className="flex items-center gap-3 px-3 py-2 -mx-3 rounded-xl text-muted-foreground hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200 break-all group/contact"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover/contact:border-primary/40 group-hover/contact:bg-primary/10 group-hover/contact:text-primary flex items-center justify-center shrink-0 transition-all duration-200 group-hover/contact:scale-105">
                    <Mail size={14} />
                  </span>
                  <span className="group-hover/contact:translate-x-0.5 transition-transform duration-200">pahadi.technologies@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+977-9849014391" 
                  className="flex items-center gap-3 px-3 py-2 -mx-3 rounded-xl text-muted-foreground hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200 group/contact"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover/contact:border-primary/40 group-hover/contact:bg-primary/10 group-hover/contact:text-primary flex items-center justify-center shrink-0 transition-all duration-200 group-hover/contact:scale-105">
                    <Phone size={14} />
                  </span>
                  <span className="group-hover/contact:translate-x-0.5 transition-transform duration-200">+977-9849014391</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pahadi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
