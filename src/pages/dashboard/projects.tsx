import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FolderGit2, Plus } from 'lucide-react'

export function ProjectsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Projects</h1>
          <p className="text-muted-foreground">GitHub repos, issues, and roadmaps.</p>
        </div>
        <Button size="sm"><Plus className="h-4 w-4 mr-2" /> New issue</Button>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Repo selector</CardTitle>
          <CardDescription>Choose a repository to view activity and issues.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Connect GitHub in Settings to see your repos.</p>
        </CardContent>
      </Card>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Activity & issues</CardTitle>
          <CardDescription>Issue list, Kanban board, roadmap.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-12 text-center text-sm text-muted-foreground">
            <FolderGit2 className="h-12 w-12 mb-4 opacity-50" />
            Select a repo or connect GitHub to get started.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
