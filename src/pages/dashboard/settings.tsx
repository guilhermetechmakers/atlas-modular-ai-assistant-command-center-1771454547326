import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User, Link2, Shield, CreditCard, Download, Server } from 'lucide-react'

export function SettingsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-muted-foreground">Account, integrations, security, billing, backup.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="bg-card border border-border">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="export">Export & backup</TabsTrigger>
          <TabsTrigger value="self-host">Self-host</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><User className="h-5 w-5" /> Profile</CardTitle>
              <CardDescription>Avatar, display name, email.</CardDescription>
            </CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Profile form placeholder.</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="integrations" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Link2 className="h-5 w-5" /> Integrations</CardTitle>
              <CardDescription>GitHub, Google Calendar, etc.</CardDescription>
            </CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Connect GitHub and Google Calendar (OAuth).</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" /> Security</CardTitle>
              <CardDescription>2FA, password, sessions.</CardDescription>
            </CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">2FA toggle and re-auth for sensitive ops.</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CreditCard className="h-5 w-5" /> Billing & plan</CardTitle>
              <CardDescription>Plan and usage.</CardDescription>
            </CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Billing section placeholder.</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="export" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Download className="h-5 w-5" /> Export & backup</CardTitle>
              <CardDescription>Workspace export bundle.</CardDescription>
            </CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Export data (JSON/CSV + attachments).</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="self-host" className="space-y-4">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Server className="h-5 w-5" /> Self-host docs</CardTitle>
              <CardDescription>Docker, env, backups.</CardDescription>
            </CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Self-host deployment documentation.</p></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
