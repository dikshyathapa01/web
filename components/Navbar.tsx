import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gradient">
          <Image src="/pahadi.png" alt="Pahadi" width={160} height={48} className="h-8 w-auto" priority />
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
          <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  )
}
