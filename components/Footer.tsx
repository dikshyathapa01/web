import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 mt-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center">
              <Image src="/pahadi.png" alt="Pahadi" width={180} height={54} className=" w-auto" priority />
            </Link>
            <p className="text-muted-foreground max-w-sm mt-4">
              Clean, modern websites for brands that want a stronger first impression and more inquiries.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors duration-300">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors duration-300">Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors duration-300">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors duration-300">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>pahadi.technologies@gmail.com</li>
              <li>+977-9849104391</li>
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
