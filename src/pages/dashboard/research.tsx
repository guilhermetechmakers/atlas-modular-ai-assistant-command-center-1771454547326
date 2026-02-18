import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Plus } from 'lucide-react'

export function ResearchPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Research & Knowledge Base</h1>
          <p className="text-muted-foreground">Notes, clips, summaries, and decisions with citations.</p>
        </div>
        <Button size="sm"><Plus className="h-4 w-4 mr-2" /> New note</Button>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Notes list</CardTitle>
          <CardDescription>Rich editor, web clipper, summarize, compare view.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-12 text-center text-sm text-muted-foreground">
            <BookOpen className="h-12 w-12 mb-4 opacity-50" />
            No notes yet. Add a note or use the web clipper to save clips.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
