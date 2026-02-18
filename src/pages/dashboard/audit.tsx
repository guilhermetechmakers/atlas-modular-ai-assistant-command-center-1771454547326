import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText } from 'lucide-react'

export function AuditPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white">Audit logs</h1>
        <p className="text-muted-foreground">Append-only, immutable agent and user actions.</p>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Log entries</CardTitle>
          <CardDescription>Filter by date, agent, action type. Retention policies apply.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-12 text-center text-sm text-muted-foreground">
            <FileText className="h-12 w-12 mb-4 opacity-50" />
            Audit log viewer. Entries appear as actions are executed.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
