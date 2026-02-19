import { createBrowserRouter } from 'react-router-dom'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { AuthLayout } from '@/components/layout/auth-layout'

import { LandingPage } from '@/pages/landing'
import { LoginPage } from '@/pages/auth/login'
import { SignupPage } from '@/pages/auth/signup'
import { PasswordResetRequestPage } from '@/pages/auth/password-reset-request'
import { PasswordResetConfirmPage } from '@/pages/auth/password-reset-confirm'
import { EmailVerificationPage } from '@/pages/auth/email-verification'

import { DashboardPage } from '@/pages/dashboard/dashboard'
import { ProjectsPage } from '@/pages/dashboard/projects'
import { ContentPipelinePage } from '@/pages/dashboard/content'
import { ResearchPage } from '@/pages/dashboard/research'
import { CalendarPage } from '@/pages/dashboard/calendar'
import { FinancePage } from '@/pages/dashboard/finance'
import { AgentsPage } from '@/pages/dashboard/agents'
import { SettingsPage } from '@/pages/dashboard/settings'
import { HelpPage } from '@/pages/dashboard/help'
import { AdminPage } from '@/pages/dashboard/admin'
import { AdminUsersPage } from '@/pages/dashboard/admin-users'
import { AuditPage } from '@/pages/dashboard/audit'

import { PrivacyPolicyPage } from '@/pages/legal/privacy'
import { TermsPage } from '@/pages/legal/terms'
import { CookiePolicyPage } from '@/pages/legal/cookies'

import { NotFoundPage } from '@/pages/not-found'
import { ErrorPage } from '@/pages/error'

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'password-reset', element: <PasswordResetRequestPage /> },
      { path: 'password-reset/confirm', element: <PasswordResetConfirmPage /> },
      { path: 'verify-email', element: <EmailVerificationPage /> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'content', element: <ContentPipelinePage /> },
      { path: 'research', element: <ResearchPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'finance', element: <FinancePage /> },
      { path: 'agents', element: <AgentsPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'help', element: <HelpPage /> },
      { path: 'audit', element: <AuditPage /> },
      { path: 'admin', element: <AdminPage /> },
      { path: 'admin/users', element: <AdminUsersPage /> },
    ],
  },
  { path: '/privacy', element: <PrivacyPolicyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/cookies', element: <CookiePolicyPage /> },
  { path: '/500', element: <ErrorPage /> },
  { path: '*', element: <NotFoundPage /> },
])

export { router }
