export default function AdminDashboard() {
  // Database access removed — showing placeholders instead.
  const leadsCount = 0
  const newLeadsCount = 0
  const projectsCount = 0

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard (DB Disabled)</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass-card p-6 rounded-2xl border border-white/10">
          <div className="text-muted-foreground mb-2">Total Leads</div>
          <div className="text-4xl font-bold">{leadsCount}</div>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-primary/30 bg-primary/5">
          <div className="text-primary mb-2">New Inquiries</div>
          <div className="text-4xl font-bold">{newLeadsCount}</div>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/10">
          <div className="text-muted-foreground mb-2">Portfolio Projects</div>
          <div className="text-4xl font-bold">{projectsCount}</div>
        </div>
      </div>

      <div className="p-6 bg-yellow-500/10 rounded-lg text-yellow-400">
        Database functionality has been disabled in this build.
      </div>
    </div>
  )
}
