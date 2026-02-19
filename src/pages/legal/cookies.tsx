import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold text-white">Cookie Policy</h1>
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>How we use cookies</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-muted-foreground space-y-4">
            <p>Atlas uses cookies and similar technologies to provide authentication, preferences, and security. When self-hosted, cookie data stays on your infrastructure.</p>
            <p>We use essential cookies for session management and security. Optional cookies may be used for analytics or preferences when you enable them in settings. You can control non-essential cookies in Settings.</p>
            <p>For full details on cookie types, retention, and your choices, see our Privacy Policy.</p>
          </CardContent>
        </Card>
        <Button variant="outline" asChild>
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  )
}
