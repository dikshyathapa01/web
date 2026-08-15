import { Metadata } from 'next'
import { ContactCTA } from '@/components/home/ContactCTA'
import { Code2, Database, Layout, Megaphone, Palette, PenTool, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Freelance Web Development Agency',
  description: 'Learn more about my background, skills, and the web development process I use to build successful digital products.',
}

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Hi, We are passionate <span className="text-gradient">Web Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We specialize in building premium, high-performance web applications and websites. With a deep understanding of modern web technologies, We bridge the gap between aesthetic design and robust engineering.
              </p>
              <div className="flex gap-4">
                <div className="glass px-6 py-4 rounded-xl border border-white/10 text-center flex-1">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
                <div className="glass px-6 py-4 rounded-xl border border-white/10 text-center flex-1">
                  <div className="text-3xl font-bold text-primary mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-md relative">
              <div className="aspect-square rounded-full glass-card border border-white/10 overflow-hidden relative p-4 bg-linear-to-br from-indigo-500/20 to-purple-500/20 shadow-2xl">
                {/* Placeholder for avatar/photo */}
                <div className="w-full h-full rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent"></div>
                  <span className="text-muted-foreground font-medium">photo here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      </section>

      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Tech Stack</span></h2>
            <p className="text-muted-foreground">The modern tools and frameworks we use to build scalable digital products.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
    {
      icon: <Layout />,
      title: "Frontend",
      desc: "React, Next.js, Tailwind CSS, Framer Motion",
    },
    {
      icon: <Database />,
      title: "Backend",
      desc: "Node.js, Prisma, PostgreSQL, REST APIs",
    },
    {
      icon: <Code2 />,
      title: "Languages",
      desc: "TypeScript, JavaScript, HTML5, CSS3",
    },
    {
      icon: <Smartphone />,
      title: "Tools",
      desc: "Git, Vercel, Docker, Figma",
    },
    {
      icon: <PenTool />,
      title: "UI/UX Design",
      desc: "Wireframing, Prototyping, User Research, Design Systems",
    },
    {
      icon: <Palette />,
      title: "Graphic Design",
      desc: "Adobe Photoshop, Illustrator, Canva, Brand Identity",
    },
    {
      icon: <Megaphone />,
      title: "Digital Marketing",
      desc: "SEO, Social Media Marketing, Content Strategy, Analytics",
    },
  ].map((skill, index) => (
    <div
      key={index}
      className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] cursor-default"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
        {skill.icon}
      </div>

      <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
      <p className="text-muted-foreground">{skill.desc}</p>
    </div>
  ))}
        </div>
      </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Process</span></h2>
            <p className="text-muted-foreground">How we go from initial idea to successful launch.</p>
          </div>
          
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "We start with a deep dive into your business goals, target audience, and functional requirements to create a solid roadmap." },
              { step: "02", title: "Design & Prototyping", desc: "Creating high-fidelity wireframes and interactive prototypes to align on the visual direction and user experience." },
              { step: "03", title: "Development", desc: "Writing clean, scalable code using modern frameworks to turn the designs into a fully functional product." },
              { step: "04", title: "Testing & Launch", desc: "Rigorous quality assurance, SEO optimization, and performance testing before a smooth deployment to production." }
            ].map((process, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 bg-[#08121f] text-accent font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(8,18,31,1)] relative z-10 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10">
                  {process.step}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 md:p-8 rounded-3xl group-hover:border-white/10 transition-colors duration-300">
                  <h3 className="font-bold text-xl mb-3 text-slate-100">{process.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{process.desc}</p>
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
