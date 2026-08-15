'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // Ensure you have lucide-react installed

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-[#08121f]/70 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image src="/pahadi.png" alt="Pahadi" width={160} height={48} className="w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          {['Services', 'Portfolio', 'Pricing', 'About', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-primary transition-colors duration-300">
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-foreground" /> : <Menu className="text-foreground" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-[#08121f]/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4">
          {['Services', 'Portfolio', 'Pricing', 'About', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-lg font-medium py-2 border-b border-white/10 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}