import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FolderGit2, FileText, Wallet, Bot, ArrowRight } from 'lucide-react'

export function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white">Command Center</h1>
        <p className="text-muted-foreground mt-1">Your daily summary and quick actions.</p>
      </div>

      {/* Today panel */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Today</CardTitle>
          <CardDescription>Upcoming and suggested focus.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No events or tasks for today. Ask the Personal agent: &quot;What should I do today?&quot;</p>
          <Button variant="outline" size="sm" className="mt-4">
            Ask Personal agent
          </Button>
        </CardContent>
      </Card>

      {/* Bento-style cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-border bg-card transition-all duration-200 hover:shadow-card-hover hover:border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">GitHub summary</CardTitle>
            <FolderGit2 className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Repos and recent activity.</p>
            <Button variant="ghost" size="sm" className="mt-2 px-0" asChild>
              <Link to="/dashboard/projects">View projects <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card transition-all duration-200 hover:shadow-card-hover hover:border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">Content pipeline</CardTitle>
            <FileText className="h-5 w-5 text-secondary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Drafts and scheduled content.</p>
            <Button variant="ghost" size="sm" className="mt-2 px-0" asChild>
              <Link to="/dashboard/content">Open pipeline <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card transition-all duration-200 hover:shadow-card-hover hover:border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">Finance snapshot</CardTitle>
            <Wallet className="h-5 w-5 text-chart-4" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Runway and recent transactions.</p>
            <Button variant="ghost" size="sm" className="mt-2 px-0" asChild>
              <Link to="/dashboard/finance">Finance cockpit <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Agent activity */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Agent activity</CardTitle>
          <CardDescription>Recent suggestions and pending approvals.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-8 text-center text-sm text-muted-foreground">
            <Bot className="h-10 w-10 mb-2 opacity-50" />
            No pending actions. Agents will show suggested tasks and write operations here for approval.
          </div>
          <Button variant="outline" className="mt-4" asChild>
            <Link to="/dashboard/agents">Agent Builder</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-2">
        <Button asChild><Link to="/dashboard/calendar">Calendar</Link></Button>
        <Button variant="outline" asChild><Link to="/dashboard/audit">Audit log</Link></Button>
      </div>
    </div>
  )
}
