import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, UserPlus } from 'lucide-react'

export function AdminUsersPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">User management</h1>
          <p className="text-muted-foreground">Workspace members and roles.</p>
        </div>
        <Button size="sm"><UserPlus className="h-4 w-4 mr-2" /> Invite user</Button>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Members</CardTitle>
          <CardDescription>Invite token flows, roles and permissions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-12 text-center text-sm text-muted-foreground">
            <Users className="h-12 w-12 mb-4 opacity-50" />
            User list with roles. Invite via token.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
