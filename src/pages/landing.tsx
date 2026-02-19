import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Calendar, FileText, Wallet, Bot } from 'lucide-react'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="text-hero font-bold tracking-tight text-white md:text-hero-lg animate-fade-in-up">
            Your unified
            <span className="text-primary"> command center</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Projects, content, research, calendar, and finance in one searchable workspace—powered by modular AI agents you control.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" asChild>
              <Link to="/auth/signup">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/auth/login">Sign in</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#self-host" className="inline-flex items-center gap-2">
                Self-host Guide <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature grid - bento style */}
      <section className="px-4 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">One workspace, every domain</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-primary/30">
              <Github className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-white">GitHub-first projects</h3>
              <p className="mt-2 text-sm text-muted-foreground">Repos, issues, and roadmaps with AI PM actions and issue creation.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-primary/30">
              <FileText className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold text-white">Content pipeline</h3>
              <p className="mt-2 text-sm text-muted-foreground">Ideas → drafts → schedule → publish with repurpose and calendar sync.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-primary/30">
              <Calendar className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-white">Calendar & travel</h3>
              <p className="mt-2 text-sm text-muted-foreground">Calendar, tasks, trip board, and AI personal planning.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-primary/30">
              <Wallet className="h-10 w-10 text-chart-4 mb-4" />
              <h3 className="text-lg font-semibold text-white">Finance cockpit</h3>
              <p className="mt-2 text-sm text-muted-foreground">Ledger, CSV import, budget & runway, AI summaries and anomalies.</p>
            </div>
            <div className="md:col-span-2 rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-primary/30">
              <Bot className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-white">Modular AI agents</h3>
              <p className="mt-2 text-sm text-muted-foreground">Domain agents with memory, permissioned skills, and human-in-the-loop approvals. Build custom agents and manage the skill registry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-4 py-24 md:px-8 lg:px-12 border-t border-border scroll-mt-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Simple pricing</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-primary/30">
              <h3 className="text-lg font-semibold text-white">Cloud</h3>
              <p className="mt-2 text-sm text-muted-foreground">Managed hosting, always up to date.</p>
              <p className="mt-4 text-2xl font-bold text-primary">Free tier</p>
              <p className="text-sm text-muted-foreground">Get started with core features.</p>
              <Button className="mt-6 w-full" asChild>
                <Link to="/auth/signup">Get Started</Link>
              </Button>
            </div>
            <div className="rounded-2xl border-2 border-primary/50 bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover">
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Self-host</span>
              <h3 className="text-lg font-semibold text-white mt-1">Your infrastructure</h3>
              <p className="mt-2 text-sm text-muted-foreground">Full control, your data, your rules.</p>
              <p className="mt-4 text-2xl font-bold text-white">Open source</p>
              <p className="text-sm text-muted-foreground">Docker, backups, no vendor lock-in.</p>
              <Button variant="secondary" className="mt-6 w-full" asChild>
                <a href="#self-host" className="inline-flex items-center justify-center gap-2">
                  Self-host Guide <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-24 md:px-8 lg:px-12 border-t border-border bg-card/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Built for makers</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <blockquote className="rounded-xl border border-border bg-background p-6">
              <p className="text-foreground text-sm leading-relaxed">
                &quot;Finally one place for repos, content, and calendar. The PM agent creating issues from my specs is a game-changer.&quot;
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">— Solo founder, dev tools</footer>
            </blockquote>
            <blockquote className="rounded-xl border border-border bg-background p-6">
              <p className="text-foreground text-sm leading-relaxed">
                &quot;Self-hosted and audit logs on every action. Exactly what we needed for client work and compliance.&quot;
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">— Small agency, 5 people</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Self-host */}
      <section id="self-host" className="px-4 py-16 md:px-8 lg:px-12 border-t border-border scroll-mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-white">Self-host Atlas</h2>
          <p className="mt-2 text-sm text-muted-foreground">Run Atlas on your own infrastructure with Docker. Full docs and backup guides in Help.</p>
          <Button variant="outline" size="sm" className="mt-4" asChild>
            <Link to="/dashboard/help">Docs &amp; setup</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 md:px-8 lg:px-12 border-t border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">Ready to unify your workflow?</h2>
          <p className="mt-4 text-muted-foreground">Self-hostable. Secure. Your data, your control.</p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link to="/auth/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 md:px-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">Atlas — Command Center</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground">Cookies</Link>
            <Link to="/dashboard/help" className="text-sm text-muted-foreground hover:text-foreground">Help</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
