import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Plus } from 'lucide-react'

export function ContentPipelinePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Content Pipeline</h1>
          <p className="text-muted-foreground">Ideas → drafts → schedule → publish.</p>
        </div>
        <Button size="sm"><Plus className="h-4 w-4 mr-2" /> Add content</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-base">Ideas</CardTitle>
            <CardDescription>Quick capture and ideas list.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No ideas yet. Use quick capture to add one.</p>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-base">Drafts</CardTitle>
            <CardDescription>Editor, version history, scheduler.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No drafts. Create from an idea or start blank.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Content calendar</CardTitle>
          <CardDescription>Schedule and repurpose tool.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-12 text-center text-sm text-muted-foreground">
            <FileText className="h-12 w-12 mb-4 opacity-50" />
            Content calendar and scheduler will appear here.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
