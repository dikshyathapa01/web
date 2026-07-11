'use client'
import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  const whatsappNumber = "+977XXXXXXXXXX" // Placeholder
  const message = "Hello! I'm interested in your web development services."
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
