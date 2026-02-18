import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar as CalendarIcon, MapPin } from 'lucide-react'

export function CalendarPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white">Calendar & Travel</h1>
        <p className="text-muted-foreground">Day/week/month view, tasks, trip board.</p>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
          <CardDescription>Connect Google Calendar in Settings for events.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-12 text-center text-sm text-muted-foreground">
            <CalendarIcon className="h-12 w-12 mb-4 opacity-50" />
            Calendar view (day / week / month) will appear here.
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Trip board</CardTitle>
          <CardDescription>Plan trips with the Personal agent.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-12 text-center text-sm text-muted-foreground">
            <MapPin className="h-12 w-12 mb-4 opacity-50" />
            Trip itineraries and packing lists.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
