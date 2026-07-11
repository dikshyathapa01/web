'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  description: z.string().min(10, "Please provide some details about your project")
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (!res.ok) throw new Error('Submission failed')
      
      setStatus('success')
      reset()
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="glass-card p-8 rounded-3xl text-center">
        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
        <p className="text-muted-foreground mb-8">
          Thank you for reaching out. I've received your inquiry and will get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="glass-card p-8 rounded-3xl relative">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name *</label>
            <input 
              {...register('name')}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address *</label>
            <input 
              {...register('email')}
              type="email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            <input 
              {...register('phone')}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="+977-9849104391"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Company</label>
            <input 
              {...register('company')}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Acme Inc."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Project Type *</label>
            <select 
              {...register('projectType')}
              className="w-full bg-[#1c1c1f] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
            >
              <option value="">Select a service</option>
              <option value="business-website">Business Website</option>
              <option value="ecommerce">eCommerce Store</option>
              <option value="saas">SaaS Application</option>
              <option value="landing-page">Landing Page</option>
              <option value="seo">SEO & Performance</option>
              <option value="other">Other</option>
            </select>
            {errors.projectType && <p className="text-red-400 text-sm mt-1">{errors.projectType.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Estimated Budget</label>
            <select 
              {...register('budget')}
              className="w-full bg-[#1c1c1f] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
            >
              <option value="">Select a range</option>
              <option value="under-1k">Under $1,000</option>
              <option value="1k-3k">$1,000 - $3,000</option>
              <option value="3k-5k">$3,000 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="over-10k">$10,000+</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Project Details *</label>
          <textarea 
            {...register('description')}
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            placeholder="Tell me about your project goals, timeline, and any specific features you need..."
          ></textarea>
          {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description.message}</p>}
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl">
            <AlertCircle size={20} />
            <p className="text-sm">Something went wrong. Please try again or email me directly.</p>
          </div>
        )}

        <button 
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70"
        >
          {status === 'submitting' ? 'Sending...' : (
            <>Send Message <Send size={18} /></>
          )}
        </button>
      </form>
    </div>
  )
}
