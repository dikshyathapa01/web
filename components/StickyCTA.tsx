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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl glass rounded-full py-3 px-4 md:px-6 transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-medium text-sm sm:text-base text-center sm:text-left text-slate-200">
          Ready to transform your online presence? <span className="hidden md:inline">Let&apos;s build something amazing together.</span>
        </p>
        <Link href="/contact" className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_4px_14px_rgba(16,185,129,0.3)] whitespace-nowrap">
          Get Free Consultation
        </Link>
      </div>
    </div>
  )
}
