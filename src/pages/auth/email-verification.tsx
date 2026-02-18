import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail } from 'lucide-react'
import { toast } from 'sonner'

export function EmailVerificationPage() {
  const handleResend = async () => {
    try {
      await new Promise((r) => setTimeout(r, 600))
      toast.success('Verification email sent. Check your inbox.')
    } catch {
      toast.error('Resend failed. Try again in a few minutes.')
    }
  }

  return (
    <Card className="border-border bg-card shadow-card">
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl">Verify your email</CardTitle>
        <CardDescription>
          We sent a verification link to your email. Click the link to activate your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
          Didn&apos;t receive the email? Check spam or request a new link (rate limited).
        </div>
        <Button variant="outline" className="w-full" onClick={handleResend}>
          Resend verification email
        </Button>
        <Button asChild className="w-full">
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
