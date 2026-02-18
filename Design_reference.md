# Modern Design Best Practices

## Philosophy

Create unique, memorable experiences while maintaining consistency through modern design principles. Every project should feel distinct yet professional, innovative yet intuitive.

---

## Landing Pages & Marketing Sites

### Hero Sections
**Go beyond static backgrounds:**
- Animated gradients with subtle movement
- Particle systems or geometric shapes floating
- Interactive canvas backgrounds (Three.js, WebGL)
- Video backgrounds with proper fallbacks
- Parallax scrolling effects
- Gradient mesh animations
- Morphing blob animations


### Layout Patterns
**Use modern grid systems:**
- Bento grids (asymmetric card layouts)
- Masonry layouts for varied content
- Feature sections with diagonal cuts or curves
- Overlapping elements with proper z-index
- Split-screen designs with scroll-triggered reveals

**Avoid:** Traditional 3-column equal grids

### Scroll Animations
**Engage users as they scroll:**
- Fade-in and slide-up animations for sections
- Scroll-triggered parallax effects
- Progress indicators for long pages
- Sticky elements that transform on scroll
- Horizontal scroll sections for portfolios
- Text reveal animations (word by word, letter by letter)
- Number counters animating into view

**Avoid:** Static pages with no scroll interaction

### Call-to-Action Areas
**Make CTAs impossible to miss:**
- Gradient buttons with hover effects
- Floating action buttons with micro-interactions
- Animated borders or glowing effects
- Scale/lift on hover
- Interactive elements that respond to mouse position
- Pulsing indicators for primary actions

---

## Dashboard Applications

### Layout Structure
**Always use collapsible side navigation:**
- Sidebar that can collapse to icons only
- Smooth transition animations between states
- Persistent navigation state (remember user preference)
- Mobile: drawer that slides in/out
- Desktop: sidebar with expand/collapse toggle
- Icons visible even when collapsed

**Structure:**
```
/dashboard (layout wrapper with sidebar)
  /dashboard/overview
  /dashboard/analytics
  /dashboard/settings
  /dashboard/users
  /dashboard/projects
```

All dashboard pages should be nested inside the dashboard layout, not separate routes.

### Data Tables
**Modern table design:**
- Sticky headers on scroll
- Row hover states with subtle elevation
- Sortable columns with clear indicators
- Pagination with items-per-page control
- Search/filter with instant feedback
- Selection checkboxes with bulk actions
- Responsive: cards on mobile, table on desktop
- Loading skeletons, not spinners
- Empty states with illustrations or helpful text

**Use modern table libraries:**
- TanStack Table (React Table v8)
- AG Grid for complex data
- Data Grid from MUI (if using MUI)

### Charts & Visualizations
**Use the latest charting libraries:**
- Recharts (for React, simple charts)
- Chart.js v4 (versatile, well-maintained)
- Apache ECharts (advanced, interactive)
- D3.js (custom, complex visualizations)
- Tremor (for dashboards, built on Recharts)

**Chart best practices:**
- Animated transitions when data changes
- Interactive tooltips with detailed info
- Responsive sizing
- Color scheme matching design system
- Legend placement that doesn't obstruct data
- Loading states while fetching data

### Dashboard Cards
**Metric cards should stand out:**
- Gradient backgrounds or colored accents
- Trend indicators (↑ ↓ with color coding)
- Sparkline charts for historical data
- Hover effects revealing more detail
- Icon representing the metric
- Comparison to previous period

---

## Color & Visual Design

### Color Palettes
**Create depth with gradients:**
- Primary gradient (not just solid primary color)
- Subtle background gradients
- Gradient text for headings
- Gradient borders on cards
- Elevated surfaces for depth

**Color usage:**
- 60-30-10 rule (dominant, secondary, accent)
- Consistent semantic colors (success, warning, error)
- Accessible contrast ratios (WCAG AA minimum)

### Typography
**Create hierarchy through contrast:**
- Large, bold headings (48-72px for heroes)
- Clear size differences between levels
- Variable font weights (300, 400, 600, 700)
- Letter spacing for small caps
- Line height 1.5-1.7 for body text
- Inter, Poppins, or DM Sans for modern feel

### Shadows & Depth
**Layer UI elements:**
- Multi-layer shadows for realistic depth
- Colored shadows matching element color
- Elevated states on hover
- Neumorphism for special elements (sparingly)

---

## Interactions & Micro-animations

### Button Interactions
**Every button should react:**
- Scale slightly on hover (1.02-1.05)
- Lift with shadow on hover
- Ripple effect on click
- Loading state with spinner or progress
- Disabled state clearly visible
- Success state with checkmark animation

### Card Interactions
**Make cards feel alive:**
- Lift on hover with increased shadow
- Subtle border glow on hover
- Tilt effect following mouse (3D transform)
- Smooth transitions (200-300ms)
- Click feedback for interactive cards

### Form Interactions
**Guide users through forms:**
- Input focus states with border color change
- Floating labels that animate up
- Real-time validation with inline messages
- Success checkmarks for valid inputs
- Error states with shake animation
- Password strength indicators
- Character count for text areas

### Page Transitions
**Smooth between views:**
- Fade + slide for page changes
- Skeleton loaders during data fetch
- Optimistic UI updates
- Stagger animations for lists
- Route transition animations

---

## Mobile Responsiveness

### Mobile-First Approach
**Design for mobile, enhance for desktop:**
- Touch targets minimum 44x44px
- Generous padding and spacing
- Sticky bottom navigation on mobile
- Collapsible sections for long content
- Swipeable cards and galleries
- Pull-to-refresh where appropriate

### Responsive Patterns
**Adapt layouts intelligently:**
- Hamburger menu → full nav bar
- Card grid → stack on mobile
- Sidebar → drawer
- Multi-column → single column
- Data tables → card list
- Hide/show elements based on viewport

---

## Loading & Empty States

### Loading States
**Never leave users wondering:**
- Skeleton screens matching content layout
- Progress bars for known durations
- Animated placeholders
- Spinners only for short waits (<3s)
- Stagger loading for multiple elements
- Shimmer effects on skeletons

### Empty States
**Make empty states helpful:**
- Illustrations or icons
- Helpful copy explaining why it's empty
- Clear CTA to add first item
- Examples or suggestions
- No "no data" text alone

---

## Unique Elements to Stand Out

### Distinctive Features
**Add personality:**
- Custom cursor effects on landing pages
- Animated page numbers or section indicators
- Unusual hover effects (magnification, distortion)
- Custom scrollbars
- Glassmorphism for overlays
- Animated SVG icons
- Typewriter effects for hero text
- Confetti or celebration animations for actions

### Interactive Elements
**Engage users:**
- Drag-and-drop interfaces
- Sliders and range controls
- Toggle switches with animations
- Progress steps with animations
- Expandable/collapsible sections
- Tabs with slide indicators
- Image comparison sliders
- Interactive demos or playgrounds

---

## Consistency Rules

### Maintain Consistency
**What should stay consistent:**
- Spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- Border radius values
- Animation timing (200ms, 300ms, 500ms)
- Color system (primary, secondary, accent, neutrals)
- Typography scale
- Icon style (outline vs filled)
- Button styles across the app
- Form element styles

### What Can Vary
**Project-specific customization:**
- Color palette (different colors, same system)
- Layout creativity (grids, asymmetry)
- Illustration style
- Animation personality
- Feature-specific interactions
- Hero section design
- Card styling variations
- Background patterns or textures

---

## Technical Excellence

### Performance
- Optimize images (WebP, lazy loading)
- Code splitting for faster loads
- Debounce search inputs
- Virtualize long lists
- Minimize re-renders
- Use proper memoization

### Accessibility
- Keyboard navigation throughout
- ARIA labels where needed
- Focus indicators visible
- Screen reader friendly
- Sufficient color contrast
- Respect reduced motion preferences

---

## Key Principles

1. **Be Bold** - Don't be afraid to try unique layouts and interactions
2. **Be Consistent** - Use the same patterns for similar functions
3. **Be Responsive** - Design works beautifully on all devices
4. **Be Fast** - Animations are smooth, loading is quick
5. **Be Accessible** - Everyone can use what you build
6. **Be Modern** - Use current design trends and technologies
7. **Be Unique** - Each project should have its own personality
8. **Be Intuitive** - Users shouldn't need instructions


---

# Project-Specific Customizations

**IMPORTANT: This section contains the specific design requirements for THIS project. The guidelines above are universal best practices - these customizations below take precedence for project-specific decisions.**

## User Design Requirements

# Atlas — Development Blueprint

## Project Concept
Atlas is a self-hostable web application that serves as a unified personal and business command center for solo builders and small agencies. It consolidates projects (GitHub), content creation, research/knowledge, calendar & travel, and finance into a single searchable workspace powered by modular AI agents (one per domain). Each agent has its own instructions, memory, and permissioned "skills" (connectors + typed actions) and can be extended via an Agent Builder and Skill Registry. Human-in-the-loop approvals, immutable audit logs, and self-host-first architecture prioritize security and control.

AI App Description: Atlas uses an orchestrator agent runtime to route prompts to domain agents, execute skill actions (GitHub, Google Calendar, Web, Files, DB), persist outputs in Postgres, and surface results in a Next.js dashboard. Core AI flows include summarization, generation (content & research), planner workflows (project kickoff, trip planning), and finance analysis.

Vision: Replace fragmented tooling with a single system-of-record and agentic automation that can plan, act (with approvals), and report across the user's life and business while remaining self-hostable and secure.

## Problem Statement
- Core problems:
  - Fragmented context: projects, notes, calendar, and finances are scattered across disparate apps (GitHub, Notion, Google Calendar, spreadsheets).
  - Manual automation: cross-tool automation requires brittle glue (Zapier, scripts) and lacks contextual awareness.
  - Lack of secure, self-hostable agentic tooling for technical power users.
- Who experiences these problems:
  - Solo founders, indie makers, freelancers, and small agency operators managing code, content, clients, and finances.
- Why these problems matter:
  - Context switching reduces productivity, lost context increases risk (missed deadlines, billing errors), and insecure third-party tools threaten privacy/control.
- Current gaps without Atlas:
  - No unified searchable system-of-record with domain-specific AI agents, no integrated GitHub-first PM experience plus calendar/task/finance automation, and limited safe automation that supports human approval and auditability.

## Solution
- How Atlas addresses the problems:
  - Unified workspace aggregates repos, notes, calendar events, content, and transactions into one searchable hub with a global omnibox.
  - Domain-specific AI agents provide specialized assistance (PM, Personal, Social, Research, Finance) with memory and permissioned skills to act across integrations.
  - Extensible Agent Builder and Skill Registry let users create custom agents and add connectors/actions while enforcing guardrails and approvals.
  - Security and audit-first architecture: encrypted tokens, RBAC, append-only audit logs, and human-in-the-loop controls for destructive actions.
- Approach & methodology:
  - Phased MVP delivery: core auth, agent runtime, GitHub & Google Calendar skills, Projects/Content/Research/Personal/Finance modules.
  - Orchestrator microservice with job queue for agent execution; Supabase/Postgres for auth & DB; Next.js frontend.
  - Design-driven dark-mode UI system with component library and consistent visual language.
- Key differentiators:
  - Self-host friendly with Docker deployment and clear backups.
  - Per-agent memory & allowlisted skills—fine-grained control over what agents can do.
  - GitHub-first PM experience integrated with AI workflows.
- Value to users:
  - Reduced context switching, automated multi-domain workflows, centralized searchable history, and safer automation with audit trails.

## Requirements

### 1. Pages (UI Screens)
List of pages with purpose, key sections/components, and contribution.

- Login / Signup
  - Purpose: Authenticate users, workspace creation, OAuth connections.
  - Components: Auth form (email/password), OAuth buttons (GitHub, Google), workspace name creation, 2FA toggle CTA, footer links.
  - Contribution: Gate access; first-time onboarding and integration prompts for core connectors.

- Password Reset
  - Purpose: Secure password recovery flow.
  - Components: Request form (email), reset form with token (new password, confirm), success/error states.
  - Contribution: Account recovery, security compliance.

- Email Verification
  - Purpose: Confirm user email post-signup.
  - Components: Status banner, resend verification with rate limit, guidance text.
  - Contribution: Prevents fraudulent accounts; required for OAuth flows.

- Landing Page (Public)
  - Purpose: Marketing, SEO, and conversion for signups/self-host.
  - Components: Hero, feature grid, pricing cards, CTAs (Get Started, Self-host Guide), testimonials, footer.
  - Contribution: Drive adoption and explain value proposition.

- Dashboard / Command Center
  - Purpose: Primary workspace home showing daily summary and agent prompts.
  - Components: Global search omnibox, Today panel, GitHub summary card, Content pipeline card, Finance snapshot, Agent activity feed, Quick actions toolbar, Audit link.
  - Contribution: Single-pane daily decision-making and entry point for actions.

- Projects (GitHub)
  - Purpose: Repo explorer and project management mapped to GitHub.
  - Components: Repo selector, activity feed, issue list/detail, create-issue modal, roadmap/milestones, task board (Kanban), AI PM actions.
  - Contribution: GitHub-first PM workflows and issue creation (MVP write op).

- Content Pipeline
  - Purpose: Manage content lifecycle (ideas → drafts → schedule → publish).
  - Components: Ideas list, Draft editor (WYSIWYG/Markdown), content calendar, asset manager, repurpose tool, scheduler.
  - Contribution: Central place for content creation, repurposing, and scheduling.

- Research & Knowledge Base
  - Purpose: Save clips, notes, summaries, and decisions with citations.
  - Components: Notes list, rich editor, web clipper integration, summarize button, compare view.
  - Contribution: Persistent searchable research and decision history.

- Personal / Calendar & Travel
  - Purpose: Manage calendar, tasks, travel planning.
  - Components: Calendar view (day/week/month), tasks & routines, trip board, AI personal actions.
  - Contribution: Personal scheduling integrated with agent planning and trip itineraries.

- Finance Cockpit
  - Purpose: Manual ledger and basic finance analysis.
  - Components: Transactions ledger (CSV import), invoices panel, budget & runway chart, AI finance tools.
  - Contribution: Track income/expenses and generate summaries/anomalies.

- Agent Builder / Skills Registry
  - Purpose: Create custom agents and manage skills.
  - Components: Agent creation form, skill registry list, memory viewer, approval policy settings, test console.
  - Contribution: Extensibility for custom automation and secure skill installation.

- Settings / Preferences
  - Purpose: Account & workspace settings and integrations.
  - Components: Profile, integrations manager, security (2FA), billing & plan, export & backup, self-host docs.
  - Contribution: Admin and user control; self-host configuration.

- About & Help (Docs Hub)
  - Purpose: Onboarding, docs, and support.
  - Components: Searchable docs, FAQ, contact form, changelog.
  - Contribution: Reduce friction for self-host/install and user issues.

- Admin Dashboard
  - Purpose: Workspace admin controls and governance.
  - Components: User management, usage analytics, skill approval queue, audit logs viewer, system settings.
  - Contribution: Enforce RBAC, skill governance, audits.

- Create / Add Content (Modal/Page)
  - Purpose: Quick capture for content ideas or drafts.
  - Components: Quick capture form, editor modal, asset attach, schedule CTA.
  - Contribution: Speed of capture to prevent lost ideas.

- Edit / Manage Content
  - Purpose: Edit drafts, view version history, manage scheduling.
  - Components: Content list with filters, editor with version diffs, schedule controls, performance notes.
  - Contribution: Content lifecycle management.

- Privacy Policy / Terms / Cookie Policy
  - Purpose: Legal docs accessible publicly and in settings.
  - Components: Text sections, opt-out controls, accept CTA.
  - Contribution: Compliance and trust.

- 404 / 500 Error Pages
  - Purpose: Friendly error handling and reporting.
  - Components: CTAs to dashboard or help, report issue button, retry CTA.
  - Contribution: UX resilience and feedback.

- Loading / Success States (Reusable)
  - Purpose: Async UX patterns for operations.
  - Components: Skeletons, toasts, modals.
  - Contribution: Clear async feedback and reliability cues.

### 2. Features
Core features with technical details and implementation notes.

- User Authentication
  - Implementation: Supabase/Auth or custom JWT with refresh tokens, httpOnly secure cookies, bcrypt/argon2 password hashing, rate limiting, email verification and secure password reset tokens, optional TOTP 2FA.
  - Contribution: Secure access and session management.

- User Profile Management
  - Implementation: Users table with workspace relations; avatar upload to S3-compatible storage; re-auth for sensitive ops; audit logs on changes.
  - Contribution: Personalization and workspace membership control.

- Global Search & Filters
  - Implementation: Postgres full-text indexes for repos/notes/events/transactions; debounced frontend queries; access control filtering; optional vector search for embeddings later.
  - Contribution: Fast cross-domain discovery and context retrieval.

- Agent Runtime & Execution
  - Implementation: Stateless orchestrator service (Edge/Edge Functions or Node microservice) with job queue (Redis/RabbitMQ), agent definitions in DB, skill adapters, idempotency keys, retries, timeouts, circuit breakers, human-in-the-loop approval queue, append-only audit logging.
  - Contribution: Safe, scalable execution of agent plans and skill calls.

- Skills Framework
  - Implementation: Skill manifest schema (id, version, actions, scopes, UI config), connector OAuth or API key storage encrypted, typed action interface with validation, registry DB with admin approval workflow, optional skill signing.
  - Contribution: Extensible, permissioned plugin system for agent capabilities.

- GitHub Integration
  - Implementation: GitHub OAuth App, token storage encrypted, API clients with ETag/conditional requests, webhooks for sync, scoped permissions per-skill, idempotent issue creation.
  - Contribution: GitHub-first project management and issue operations.

- Google Calendar Integration
  - Implementation: Google OAuth (calendar scopes), event create/update with idempotency, timezone handling, watch API for changes, mapping for calendar selection.
  - Contribution: Calendar read/write for scheduling, trips, and focus blocks.

- Content Editor & Pipeline
  - Implementation: Markdown/WYSIWYG editor with autosave to drafts table, version history diffs, asset attachments to object storage, AI generation endpoints with prompt safety and rate limiting, calendar scheduling as event creation.
  - Contribution: Streamlined content creation and repurposing.

- Research Notes & KB
  - Implementation: Notes table with attachments and metadata, web clipper endpoint storing snapshots, AI summarization pipeline storing citations, tags and cross-links, full-text indexes, optional embeddings phase 2.
  - Contribution: Persistent, searchable research and citation-aware summaries.

- Tasks & Routines
  - Implementation: Tasks table with recurrence rules (RRULE), reminders via job queue, calendar sync for focus blocks, optimistic UI updates.
  - Contribution: Lightweight task management integrated with calendar.

- Finance Ledger & Reports
  - Implementation: Transactions table normalized, CSV import parser with preview, budget/runway calculations, AI analysis endpoints for summaries/anomalies, export endpoints, sensitive data encrypted at rest.
  - Contribution: Finance visibility and AI-assisted reporting.

- Audit Logs & Approvals
  - Implementation: Append-only audit log storage (immutable entries) with indexing, retention policies, approval queue UI, RBAC enforcement before execution.
  - Contribution: Accountability and safety for agent actions.

- Data Import & Export
  - Implementation: CSV import endpoints with schema validation, workspace export bundle (JSON/CSV + attachments), access controls and throttling.
  - Contribution: Interoperability and backup.

- Notifications & Alerts
  - Implementation: Notification table, in-app toasts and inbox, transactional email via SendGrid/SMTP, webhook subscriptions, user preferences.
  - Contribution: User awareness for approvals, errors, and agent outputs.

- Admin Tools & RBAC
  - Implementation: Roles & permissions model enforced at API layer, invite token flows, admin-only skill approvals and retention configuration.
  - Contribution: Governance and multi-user safety.

- Performance & Reliability
  - Implementation: Redis cache for heavy queries, Prometheus/Grafana monitoring, Sentry error reporting, retry/idempotency strategies, scheduled backups.
  - Contribution: Production-grade reliability for self-host deployments.

### 3. User Journeys
Step-by-step flows for each user type.

- New User Onboard (Solo founder)
  1. Visit landing page → Click Get Started.
  2. Signup via email or OAuth (GitHub + Google recommended).
  3. Create workspace name on first-time signup.
  4. Prompt to connect GitHub and Google Calendar (OAuth flows).
  5. Guided onboarding: run "Summarize my repos" and "What should I do today?" via dashboard.
  6. Approve any agent suggested actions that write to external services.
  7. Save initial notes and import CSV for finance (optional).
  8. Finish tour; return to dashboard for daily workflow.

- Daily Command Center Flow (Active user)
  1. Open Dashboard → global search visible.
  2. Dashboard shows GitHub summary, calendar events, content tasks, finance alerts, agent suggestions.
  3. User asks: "What should I do today?" → Personal agent proposes agenda.
  4. User approves/edits suggestions → selected actions create tasks/events/issues via skill calls (approval required for writes).
  5. All actions recorded in audit log; notifications shown for pending/complete actions.

- Project Kickoff (PM agent)
  1. From Projects page, select repo or create project.
  2. Click "New project: X" → open PM agent action "Create roadmap".
  3. PM agent proposes roadmap/epics; user reviews and approves.
  4. Agent creates milestones and GitHub issues via github.create_issue (MVP) with idempotency.
  5. Result saved to knowledge base and weekly update template created.

- Content Batch Day (Social agent)
  1. Open Content Pipeline → pick idea or upload build log.
  2. Use Repurpose tool to generate platform-specific drafts (AI).
  3. Review drafts, attach assets, schedule tentative calendar blocks.
  4. For publishing, user triggers scheduling/export; agent suggests best times based on calendar availability.

- Trip Planning (Personal agent)
  1. Open Trip Board → click "Plan trip".
  2. Enter constraints; Personal agent returns itinerary draft.
  3. User approves; agent creates calendar events and packing list cards; stores itinerary in notes.

- Finance Review (Finance agent)
  1. Import CSV transactions to ledger.
  2. Open Finance Cockpit → click "Monthly summary".
  3. Finance agent analyzes transactions, flags anomalies, outputs report saved to KB.
  4. User reviews and exports report (CSV/PDF).

- Create Custom Agent (Power user)
  1. Open Agent Builder → create agent name + instruction profile + tone.
  2. Select allowed skills from Skill Registry, set memory scope and approval policy.
  3. Use Test Console to run simulated prompts, review logs, and adjust.
  4. Save agent and optionally install for workspace use.

- Admin Governance (Workspace admin)
  1. Open Admin Dashboard → review skill approval queue and audit logs.
  2. Approve or reject third-party skills.
  3. Manage users and roles; set retention & backup policy.
  4. Review usage analytics and tune rate limits.

## UI Guide
---

## Visual Style

### Color Palette:
- Dominant dark mode background: #18181B (main workspace), #232326 (secondary panels), and #1C1C1E (cards and modals)
- Primary accent: #FF9900 (orange, used sparingly for highlights, status, or brand)
- Secondary accents: #22D3EE (cyan/aqua for positive/active states), #A78BFA (purple for section or status markers), #F472B6 (pink for warnings or highlights), #F59E42 (yellow for secondary highlights)
- Neutral text: #FFFFFF (main headings), #E5E7EB (body text), #A1A1AA (secondary/subdued text)
- UI dividers and borders: #27272A (subtle lines), #3F3F46 (card outlines)
- Button and interactive states: gradients or solid fills using accent colors, with subtle glows or shadows for emphasis

### Typography & Layout:
- Font family: Modern grotesk/sans-serif (e.g., Inter, SF Pro)
- Weights: Regular (400) body, Medium (500) UI, Bold (700) headings
- Hierarchy: Headings 24–32px; subheadings 18–20px; body 14–16px; captions 12–13px
- Spacing: Main padding 24–32px; card padding 16–20px; 8–12px between elements; 8pt grid
- Alignment: Left-aligned text; central alignment for icons/modals; modular card/grid patterns

### Key Design Elements

#### Card Design:
- Deep gray backgrounds (#232326/#1C1C1E), rounded corners 8–16px, soft drop shadows (rgba(0,0,0,0.6)), subtle 1px borders (#27272A). Hover lifts with glow and accent border.

#### Navigation:
- Left persistent sidebar, active accent line (#FF9900 or #22D3EE), minimalist top bar, collapsible nested lists with chevrons and badges.

#### Data Visualization:
- Neon accent lines (#22D3EE, #A78BFA, #F472B6) with subtle glow on dark backgrounds. Node diagrams use rounded nodes with colored outlines.

#### Interactive Elements:
- Buttons: Rounded, large touch targets (40+px), accent fills, subtle inner shadows. Forms use floating labels and accent focus glows. Micro-interactions: 150–200ms transitions.

### Design Philosophy
- Modern, professional dark-mode aesthetic prioritizing clarity and minimalism. Modular design with emphasis on discoverability, reduced noise, and control for technical power users.

---

**Implementation Notes:**
Apply the design system consistently. All components, pages, and flows must adhere to color palette, typography, spacing, and interaction guidelines above.

## Instructions to AI Development Tool
1. Refer to Project Concept, Problem Statement, and Solution when implementing to preserve the "why".
2. Ensure all features/pages directly address the listed problems and MVP scope.
3. Verify each feature/page against non-functional requirements (security, auditability, self-hostability).
4. Adhere exactly to the UI Guide for colors, typography, spacing, and interactions.
5. Maintain consistent behavior across agents and skills: allowlists, approval flows, idempotency, audit logging, and RBAC.
6. Build incrementally by phases: Phase 1 (MVP) foundations first, then Phase 2 and Phase 3 expansions.

Project metadata and context above should be used to generate API contracts, DB schema, job queue designs, component library, CI/CD Docker compose, and deployment docs.

## Implementation Notes

When implementing this project:

1. **Follow Universal Guidelines**: Use the design best practices documented above as your foundation
2. **Apply Project Customizations**: Implement the specific design requirements stated in the "User Design Requirements" section
3. **Priority Order**: Project-specific requirements override universal guidelines when there's a conflict
4. **Color System**: Extract and implement color values as CSS custom properties in RGB format
5. **Typography**: Define font families, sizes, and weights based on specifications
6. **Spacing**: Establish consistent spacing scale following the design system
7. **Components**: Style all Shadcn components to match the design aesthetic
8. **Animations**: Use Motion library for transitions matching the design personality
9. **Responsive Design**: Ensure mobile-first responsive implementation

## Implementation Checklist

- [ ] Review universal design guidelines above
- [ ] Extract project-specific color palette and define CSS variables
- [ ] Configure Tailwind theme with custom colors
- [ ] Set up typography system (fonts, sizes, weights)
- [ ] Define spacing and sizing scales
- [ ] Create component variants matching design
- [ ] Implement responsive breakpoints
- [ ] Add animations and transitions
- [ ] Ensure accessibility standards
- [ ] Validate against user design requirements

---

**Remember: Always reference this file for design decisions. Do not use generic or placeholder designs.**
