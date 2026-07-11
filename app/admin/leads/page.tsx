export default function LeadsPage() {
  // Database access removed — leads are not available.
  const leads: any[] = []

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contact Leads (Disabled)</h1>

      <div className="glass-card border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-8 text-center text-muted-foreground">
          Leads are not available because database functionality has been disabled.
        </div>
      </div>
    </div>
  )
}
