import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

export function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <AlertCircle className="h-16 w-16 text-destructive mb-6" />
      <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
      <p className="text-muted-foreground mt-2 text-center max-w-sm">
        We encountered an error. You can retry or go back to the dashboard.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={() => window.location.reload()}>Retry</Button>
        <Button variant="outline" asChild>
          <Link to="/dashboard">Dashboard</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="/dashboard/help">Report issue</Link>
        </Button>
      </div>
    </div>
  )
}
