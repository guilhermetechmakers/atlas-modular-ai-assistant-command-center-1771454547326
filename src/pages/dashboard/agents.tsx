import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Wrench } from 'lucide-react'

export function AgentsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Agent Builder & Skills Registry</h1>
          <p className="text-muted-foreground">Create custom agents and manage skills.</p>
        </div>
        <Button size="sm"><Plus className="h-4 w-4 mr-2" /> New agent</Button>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Agent creation</CardTitle>
          <CardDescription>Name, instructions, tone, allowed skills, memory scope, approval policy.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Create agents and assign skills from the registry.</p>
        </CardContent>
      </Card>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Skill registry</CardTitle>
          <CardDescription>Installed skills, approval queue, test console.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-12 text-center text-sm text-muted-foreground">
            <Wrench className="h-12 w-12 mb-4 opacity-50" />
            Skills (GitHub, Google Calendar, etc.) appear here after approval.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
