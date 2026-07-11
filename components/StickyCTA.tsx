'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-primary/95 backdrop-blur-sm text-primary-foreground py-3 px-4 transform transition-transform duration-300 translate-y-0 shadow-[0_-10px_40px_rgba(79,70,229,0.3)]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-medium text-sm sm:text-base text-center sm:text-left">
          Ready to transform your online presence? Let's build something amazing together.
        </p>
        <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap">
          Get Free Consultation
        </Link>
      </div>
    </div>
  )
}
