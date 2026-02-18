import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, BookOpen, MessageCircle, FileCode } from 'lucide-react'

export function HelpPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white">About & Help</h1>
        <p className="text-muted-foreground">Docs, FAQ, contact, changelog.</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Search docs…" className="pl-9" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base"><BookOpen className="h-5 w-5" /> Documentation</CardTitle>
            <CardDescription>Guides and onboarding.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Searchable docs and getting started.</p>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base"><MessageCircle className="h-5 w-5" /> FAQ & contact</CardTitle>
            <CardDescription>Common questions and support.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">FAQ and contact form.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><FileCode className="h-5 w-5" /> Changelog</CardTitle>
          <CardDescription>Releases and updates.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Changelog for self-host and cloud.</p>
        </CardContent>
      </Card>
    </div>
  )
}
