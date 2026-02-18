import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Wallet, Upload } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const placeholderData = [
  { month: 'Jan', value: 0 },
  { month: 'Feb', value: 0 },
  { month: 'Mar', value: 0 },
  { month: 'Apr', value: 0 },
]

export function FinancePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Finance Cockpit</h1>
          <p className="text-muted-foreground">Ledger, budget, runway, AI summaries.</p>
        </div>
        <Button size="sm" variant="outline"><Upload className="h-4 w-4 mr-2" /> Import CSV</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Runway</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">—</p>
            <p className="text-xs text-muted-foreground">Import transactions to calculate.</p>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Income (MTD)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">—</p>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Expenses (MTD)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">—</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Budget & runway</CardTitle>
          <CardDescription>Charts with animated transitions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={placeholderData}>
                <defs>
                  <linearGradient id="fillChart" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(var(--primary))" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="rgb(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="rgb(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="rgb(var(--muted-foreground))" fontSize={12} />
                <Area type="monotone" dataKey="value" stroke="rgb(var(--primary))" fill="url(#fillChart)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Transactions ledger</CardTitle>
          <CardDescription>CSV import, invoices panel, AI finance tools.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-12 text-center text-sm text-muted-foreground">
            <Wallet className="h-12 w-12 mb-4 opacity-50" />
            Import CSV to see transactions and run AI analysis.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
