import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { FileQuestion } from 'lucide-react'

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <FileQuestion className="h-16 w-16 text-muted-foreground mb-6" />
      <h1 className="text-2xl font-bold text-white">Page not found</h1>
      <p className="text-muted-foreground mt-2 text-center max-w-sm">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild>
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/dashboard/help">Help</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="/dashboard/help">Report issue</Link>
        </Button>
      </div>
    </div>
  )
}
