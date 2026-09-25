'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send, CheckCircle2 } from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdenleko'

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  projectType: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  description: z.string().min(10, "Details required")
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setStatus('submitting')
    setSubmitError('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          projectType: data.projectType,
          budget: data.budget || 'Not specified',
          message: data.description,
        }),
      })

      if (!response.ok) {
        throw new Error('Unable to send your message right now.')
      }

      setStatus('success')
    } catch (error) {
      setStatus('error')
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="p-8 rounded-3xl text-center border border-white/10 glass-card">
        <CheckCircle2 className="mx-auto text-accent mb-4" size={48} />
        <h3 className="text-2xl font-bold">Message Sent!</h3>
      </div>
    )
  }

  const inputClasses = "w-full bg-[#08121f]/50 border border-white/10 rounded-xl px-4 py-3.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-500"

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input {...register('name')} placeholder="Full Name *" className={inputClasses} />
          <input {...register('email')} placeholder="Email Address *" className={inputClasses} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select {...register('projectType')} className={inputClasses}>
            <option value="" className="bg-[#0b1220]">Select a service *</option>
            <option value="web" className="bg-[#0b1220]">Web Development</option>
            <option value="saas" className="bg-[#0b1220]"></option>
          </select>
          <select {...register('budget')} className={inputClasses}>
            <option value="" className="bg-[#0b1220]">Select a budget</option>
            <option value="10,000" className="bg-[#0b1220]">10,000 </option>
            <option value="20,000" className="bg-[#0b1220]">20,000</option>
            <option value="30,000" className="bg-[#0b1220]">30,000</option>
          </select>
        </div>

        <textarea {...register('description')} rows={5} placeholder="Project Details *" className={inputClasses + " resize-none"} />

        {submitError && (
          <p className="text-sm text-red-400">{submitError}</p>
        )}

        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-[0_4px_14px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
        >
          {status === 'submitting' ? (
            'Sending...'
          ) : (
            <>
              Send Message
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  )
}