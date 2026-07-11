import { Metadata } from 'next'
import { ExternalLink, Code2 } from 'lucide-react'
import { ContactCTA } from '@/components/home/ContactCTA'

export const metadata: Metadata = {
  title: 'Portfolio | Freelance Web Development Agency',
  description: 'View my recent web development projects, case studies, and client success stories.',
}

const portfolioProjects = [
  {
    title: "TechFlow Dashboard",
    category: "SaaS Application",
    description: "A comprehensive analytics dashboard for SaaS companies to track user engagement and revenue metrics in real-time.",
    image: "linear-gradient(to bottom right, #4f46e5, #9333ea)",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "EcoStore Platform",
    category: "eCommerce Store",
    description: "A modern, high-performance eCommerce platform with advanced filtering, cart management, and seamless Stripe checkout experience.",
    image: "linear-gradient(to bottom right, #0ea5e9, #2563eb)",
    tech: ["Next.js", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com"
  },
  {
    title: "FitLife Landing Page",
    category: "Landing Page",
    description: "High-converting marketing landing page for a fitness app, featuring scroll animations, video backgrounds, and lead capture forms.",
    image: "linear-gradient(to bottom right, #f43f5e, #e11d48)",
    tech: ["React", "Framer Motion", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Nexus Corporate Hub",
    category: "Business Website",
    description: "A professional corporate website for a consulting firm, complete with blog, career portal, and CMS integration.",
    image: "linear-gradient(to bottom right, #10b981, #059669)",
    tech: ["Next.js", "Sanity CMS", "TypeScript"],
    liveUrl: "https://example.com"
  }
]

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work. Explore how we&apos;ve helped businesses achieve their digital goals through innovative web solutions.
          </p>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] -z-10"></div>
      </section>

      <section className="py-16 bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="glass-card rounded-3xl overflow-hidden group">
                <div 
                  className="aspect-video w-full relative border-b border-white/10 overflow-hidden"
                >
                  <div 
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: project.image }}
                  ></div>
                </div>
                
                <div className="p-8">
                  <div className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 h-20 overflow-hidden">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 h-14">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground whitespace-nowrap">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                        <Code2 size={16} /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
