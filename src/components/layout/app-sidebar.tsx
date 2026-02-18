import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  FolderGit2,
  FileText,
  BookOpen,
  Calendar,
  Wallet,
  Bot,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
  Shield,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

const SIDEBAR_STORAGE_KEY = 'atlas-sidebar-collapsed'

const mainNav = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/dashboard/projects', label: 'Projects', icon: FolderGit2 },
  { to: '/dashboard/content', label: 'Content Pipeline', icon: FileText },
  { to: '/dashboard/research', label: 'Research & KB', icon: BookOpen },
  { to: '/dashboard/calendar', label: 'Calendar & Travel', icon: Calendar },
  { to: '/dashboard/finance', label: 'Finance Cockpit', icon: Wallet },
  { to: '/dashboard/agents', label: 'Agent Builder', icon: Bot },
]

const bottomNav = [
  { to: '/dashboard/settings', label: 'Settings', icon: Settings },
  { to: '/dashboard/help', label: 'About & Help', icon: HelpCircle },
]

const adminNav = [
  { to: '/dashboard/admin', label: 'Admin', icon: Shield },
  { to: '/dashboard/admin/users', label: 'Users', icon: Users },
]

export function AppSidebar() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem(SIDEBAR_STORAGE_KEY) === 'true'
    } catch {
      return false
    }
  })
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_STORAGE_KEY, String(collapsed))
    } catch {
      // ignore
    }
  }, [collapsed])

  const isActive = (to: string) => {
    if (to === '/dashboard') return location.pathname === '/dashboard'
    return location.pathname.startsWith(to)
  }

  const NavLink = ({
    to,
    label,
    icon: Icon,
  }: {
    to: string
    label: string
    icon: React.ComponentType<{ className?: string }>
  }) => (
    <Link
      to={to}
      onClick={() => setMobileOpen(false)}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
        isActive(to)
          ? 'bg-primary/15 text-primary border-l-2 border-primary'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      )}
    >
      <Icon className="h-5 w-5 shrink-0" />
      {!collapsed && <span>{label}</span>}
    </Link>
  )

  const sidebarContent = (
    <>
      <div className="flex h-14 items-center border-b border-border px-2">
        {!collapsed && (
          <Link to="/dashboard" className="flex items-center gap-2 font-semibold text-white px-2">
            <span className="text-primary">Atlas</span>
          </Link>
        )}
        <div className={cn('flex items-center gap-1', collapsed ? 'mx-auto' : 'ml-auto')}>
          <Button
            variant="ghost"
            size="icon-sm"
            className="lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="hidden lg:flex"
            onClick={() => setCollapsed((c) => !c)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="flex flex-col gap-1">
          {mainNav.map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} icon={item.icon} />
          ))}
        </nav>
        <Separator className="my-4" />
        <nav className="flex flex-col gap-1">
          {bottomNav.map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} icon={item.icon} />
          ))}
        </nav>
        <Separator className="my-4" />
        <nav className="flex flex-col gap-1">
          {adminNav.map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} icon={item.icon} />
          ))}
        </nav>
      </ScrollArea>
    </>
  )

  return (
    <>
      {/* Mobile: sheet trigger */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0" showClose={false}>
          <div className="flex h-full flex-col">{sidebarContent}</div>
        </SheetContent>
      </Sheet>

      {/* Desktop: collapsible sidebar */}
      <aside
        className={cn(
          'hidden lg:flex lg:flex-col border-r border-border bg-card transition-[width] duration-200',
          collapsed ? 'w-[60px]' : 'w-64'
        )}
      >
        {sidebarContent}
      </aside>
    </>
  )
}

export function SidebarExpandButton({
  collapsed,
  onToggle,
}: {
  collapsed: boolean
  onToggle: () => void
}) {
  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="hidden lg:flex"
      onClick={onToggle}
      aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
    >
      <ChevronLeft
        className={cn('h-4 w-4 transition-transform', collapsed && 'rotate-180')}
      />
    </Button>
  )
}
