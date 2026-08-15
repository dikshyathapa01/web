import Image from "next/image"
import Link from "next/link"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <div className="min-h-screen bg-black flex text-foreground">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 glass p-6 hidden md:flex flex-col">
        <Link href="/admin" className="mb-12 inline-flex items-center gap-3">
          <Image src="/paha.jpg" alt="Pahadi" width={40} height={40} className=" rounded-2xl object-cover" priority />
          <div className="font-bold text-2xl text-gradient">Admin</div>
        </Link>
        
    
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
