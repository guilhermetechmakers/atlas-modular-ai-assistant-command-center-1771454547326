import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Data we collect and how we use it</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-muted-foreground">
            <p>Atlas is designed to be self-hosted. When self-hosted, your data stays on your infrastructure.</p>
            <p>When using the hosted service, we collect account and workspace data necessary to provide the service. We do not sell your data. See our full policy for details on retention, access, and your rights.</p>
          </CardContent>
        </Card>
        <Button variant="outline" asChild>
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  )
}
