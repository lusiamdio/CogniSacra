<!-- coderabbit-ai-generated:v1 -->

<!-- coderabbit-ai-generated-section:v1:3cfe9ea8347da455e222562da7acaadfe17c8010b5bee23e473a28bb69e51ae9 -->

# CogniSacra Academy

CogniSacra Academy is a React and TypeScript education platform prototype for learners, instructors, and institutions. It brings course discovery, learning experiences, course authoring, institutional management, and research interfaces into a single application.

> **Project status:** This repository contains a working frontend and a Supabase schema, alongside extensive demonstration and simulated functionality. It is not yet a production-ready learning management system. Review the capability and security sections before using real learner data, accepting payments, or issuing credentials.

## Contents

- [Platform overview](#platform-overview)
- [Current capabilities](#current-capabilities)
- [Architecture](#architecture)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Database setup](#database-setup)
- [Development and verification](#development-and-verification)
- [Security and privacy](#security-and-privacy)
- [Deployment considerations](#deployment-considerations)
- [Troubleshooting](#troubleshooting)
- [Repository structure](#repository-structure)
- [Production roadmap](#production-roadmap)
- [Contributing](#contributing)
- [License](#license)

## Platform overview

The application offers three role-oriented experiences:

| Experience | Interfaces in the repository |
| --- | --- |
| Learner | Course discovery and landing pages, lesson views, quizzes, projects, progress, profile, community, calendar, and job board |
| Instructor | Dashboard, course builder, analytics, profile and settings, integrations, and course design assistant |
| Institution | Dashboard, learners and staff, accreditation roster, course management, institutional profile, settings, analytics, and library |

Shared interfaces include a virtual classroom, virtual library, AI tutor and tools, accessibility settings, and multilingual navigation. These interfaces vary in maturity; their presence does not imply that the corresponding backend service exists.

## Current capabilities

| Area | Current implementation | Important limitation |
| --- | --- | --- |
| Authentication | The active sign-in screen calls Supabase Auth for email/password registration and sign-in. It requires a session before entering the app and displays a confirmation notice when registration returns no session. | Configure Supabase Auth and email delivery. OAuth and password-reset screens exist elsewhere in the source but are not wired into the active sign-in screen. Confirmation and recovery flows need end-to-end verification. |
| Profiles and onboarding | Supabase profile reads and selected profile writes are implemented. Role selection and learner interests are available in the UI. | Some edits are cached in browser storage; writes are not a complete persistence layer. Users can select roles, so the selected role is not evidence of verified authority. |
| Courses and learning | Sample courses, lessons, enrollment, progress, course builder, and analytics views are implemented. | The main application initializes course data from `constants.ts`; enrollment, progress, and course edits primarily change client state. They are not a durable enrollment or publishing workflow. |
| Institution and accreditation | Institutional dashboards, profiles, and roster interfaces are available. | The accreditation service uses sample records and browser storage. Code issuance and redemption are simulations, not verified membership or authorization. |
| AI | Tutor, architect, quiz, translation, image, and research interfaces are present. | `services/geminiService.ts` disables provider calls until a secure server integration is implemented. AI-backed features cannot currently make live model requests. |
| Classroom, library, community, careers | Navigation and interactive screens are present, including classroom materials, library tools, community, and job applications. | Many interactions use sample data, local state, or simulated actions. The repository does not provide a complete conferencing, library, community, or recruiting backend. |
| Payments and credentials | Subscription, payment, certificate, and verification interfaces are present. | Payment processing, trusted credential issuance, and blockchain verification are not established by these screens or by the schema alone. |
| Administration | Admin components and an API client are present. | These views are not connected to the main `App.tsx` navigation. The separate backend they expect is not included in this repository. |

Some older onboarding and admin components use `services/authService.ts`, a separate backend client with local fallback behavior. The active sign-in screen uses `services/supabaseClient.ts` instead. Do not treat the older fallback or client-side role selection as a security boundary.

## Architecture

```text
Browser
  └─ React application (Vite, App.tsx)
       ├─ Views and local state / sample data
       ├─ Browser localStorage for selected prototype data
       ├─ Supabase Auth and selected profile queries ──> Supabase project
       └─ AI service interface ──> disabled pending trusted server integration

Supabase SQL
  ├─ schema.sql: tables, triggers, row-level policies and hardening
  ├─ migrations/: hardening for an existing baseline schema
  └─ seed.sql: demonstration data
```

- **Frontend:** React 19, TypeScript, Vite, Motion, Lucide, and custom components.
- **Styling:** Tailwind's browser CDN and configuration in `index.html`, plus `styles.css`. Fonts and some imagery also load from external services.
- **Data and identity:** Supabase JavaScript client, Supabase Auth, and PostgreSQL schema with row-level security (RLS).
- **Internationalization:** i18next and a language context provide dictionaries for English, Portuguese, Spanish, French, Arabic, and Swahili. Coverage is partial; unavailable translations can fall back to the original text. Arabic sets document direction to RTL.
- **Navigation:** `App.tsx` maintains view and onboarding state in React; there is no configured URL router in this repository.

## Getting started

### Prerequisites

- Node.js 20.19+ or 22.12+ and npm. The repository has an npm lockfile; use `npm ci` for a reproducible install.
- A Supabase project with email/password authentication enabled for sign-in and sign-up.
- Access to the project's SQL editor or another authorized PostgreSQL connection to set up the schema.

### Install and run

```bash
git clone https://github.com/lusiamdio/CogniSacra.git
cd CogniSacra
npm ci
cp .env.example .env.local
# Edit .env.local with the Supabase project URL and public anonymous key.
npm run dev
```

Open `http://localhost:3000/`. Vite is configured to listen on port 3000 and bind to `0.0.0.0`; limit network exposure appropriately on shared machines. `.env.local` matches the repository's ignored `*.local` pattern. Avoid committing environment files or credentials.

Set up the database as described below before testing profile and onboarding flows. Without valid Supabase configuration, the sign-in screen reports that authentication is not configured. If email confirmation is enabled, follow the confirmation message before signing in. Test with a dedicated project and synthetic accounts.

## Configuration

| Variable | Used by | Description |
| --- | --- | --- |
| `VITE_SUPABASE_URL` | Active Supabase client | Project URL. Required for authentication and profile operations. |
| `VITE_SUPABASE_ANON_KEY` | Active Supabase client | Public anonymous project key. RLS and server-side authorization must protect data. |
| `VITE_BACKEND_URL` | Legacy auth and admin clients | Optional base URL for a separate backend, defaulting to a hard-coded Railway endpoint in those services. That backend is not included here. |

Vite exposes `VITE_` variables to the browser. Never put a Supabase service role key, Gemini API key, or other secret in a frontend variable. The application currently has no supported configuration that enables Gemini calls safely. Previous versions embedded `GEMINI_API_KEY` in browser bundles; rotate any key used with those builds.

## Database setup

The SQL targets a Supabase environment with the `auth` schema and Supabase roles available. Use a dedicated project or an isolated test database; review SQL and take an appropriate backup before applying changes to an existing environment.

### New installation

1. Create a Supabase project and configure email/password authentication and confirmation settings.
2. Review and execute [`supabase/schema.sql`](supabase/schema.sql) with an appropriately privileged database account. It creates the application tables, auth provisioning trigger, indexes, RLS policies, and the hardening policy changes at the end of the file.
3. Optionally review and execute [`supabase/seed.sql`](supabase/seed.sql) in a **development project only**. It includes illustrative courses, achievements, and accreditation codes; these are not real credentials.
4. Set the frontend's public Supabase URL and anonymous key and test with synthetic accounts.

The schema creates named policies and should not be assumed safe to rerun unchanged against an existing installation. Fresh installations using the current complete `schema.sql` already include the hardening changes; do not apply the same hardening migration a second time.

### Existing baseline installation

For an installation already using the earlier baseline schema, review and apply [`supabase/migrations/20261101000000_security_hardening.sql`](supabase/migrations/20261101000000_security_hardening.sql) once. It restricts full profile and accreditation rows, limits draft course content visibility, and removes client policies for issuing certificates and achievements. Existing public-profile and accreditation-verification consumers need purpose-built, restricted server interfaces. The migration is not a complete authorization system.

### Data model

The schema defines profiles and role-specific data, user settings, courses, modules, lessons, course enrollments, lesson progress, certificates, accreditations, achievements, mentorship sessions, community posts, and comments. An auth trigger provisions a profile and role-specific record for new users. SQL tables and policies do not imply that every frontend workflow reads or writes them.

## Development and verification

Run these commands from the repository root:

```bash
npm run dev        # development server
npm run build      # production frontend build in dist/
npm run preview    # serve the built frontend locally
npx tsc --noEmit   # TypeScript check
npm audit          # dependency advisory check
```

The build does not run TypeScript checking automatically. There is currently no repository-wide unit or end-to-end test script. [`supabase/tests/security.sql`](supabase/tests/security.sql) exercises selected RLS behaviors with synthetic users and rolls its changes back. Run it only against an isolated schema installation using a privileged test account, with the Supabase auth objects and roles available; it temporarily grants table access within its transaction. It does not replace integration tests against the actual deployment.

Before merging changes, check the affected flows, type-check and build, and add focused tests where appropriate. For database changes, test both fresh installation and migration paths and verify policies using accounts with different roles.

## Security and privacy

- **Authorization is incomplete.** Profile roles are selectable by users and accreditation is simulated in local storage. Implement trusted role assignment, institutional membership verification, and server-side authorization before relying on role-specific access.
- **RLS is necessary but not sufficient.** Review all policies, table grants, public fields, and ownership transitions for the deployed schema. Public certificate verification and paid-content access need a deliberate data and authorization design.
- **Sensitive operations need trusted services.** Credential issuance, accreditation redemption, payments, and AI requests require server-side validation and appropriate access controls. The current client cannot establish these guarantees.
- **Browser data is not a source of truth.** Some profile, institution, and accreditation data is stored locally or held in React state. It can be modified or lost and should not contain sensitive production records.
- **External assets and runtime dependencies** include the Tailwind CDN, fonts, and remote images. Evaluate availability, privacy, CSP, and supply-chain requirements before deployment.
- **Operational controls remain to be built**, including appropriate rate limits, input validation, audit logging, monitoring, backups, incident handling, and security testing. Configure HTTPS and security headers at the deployment layer.

## Deployment considerations

`npm run build` produces static frontend assets in `dist/`. No deployment configuration or production backend is supplied in this repository. A deployment must provide the frontend build environment variables, a configured Supabase project, approved origins and redirects, database policies, and suitable static hosting. Validate configuration and end-to-end flows in a staging environment before release.

Do not deploy this prototype for real payments, privileged institutional access, or credential issuance until their backend workflows and authorization have been implemented and independently tested. Protect and rotate server-side secrets outside the frontend build. Establish migrations, backups, observability, and recovery procedures for the target environment.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| “Authentication is not configured” | Set both Supabase variables in `.env.local` and restart Vite. Placeholder values in `.env.example` are not usable credentials. |
| Sign-up asks for email confirmation | Follow the email link and sign in. Check the Supabase project's confirmation and redirect settings. |
| Sign-in or profile requests fail | Check the browser network console, Supabase project URL and anonymous key, authentication settings, schema installation, and RLS policies. Do not disable RLS to work around errors. |
| AI features fail or return original text | Provider calls are intentionally disabled; static translations may still be available. A secure server integration is required. |
| Changes disappear after reload | Many course, progress, and institutional actions are prototype state rather than durable database writes. |
| Styling or fonts are missing | Check access to the external Tailwind CDN and font hosts, as well as browser network errors. |

## Repository structure

```text
App.tsx                    Application state, navigation, and view composition
components/                Role views, onboarding, shared UI, classroom and library
constants.ts               Sample courses, profiles, and other initial data
contexts/                  Language context
hooks/                     Translation hook
services/                  Supabase, AI, accreditation, legacy auth and admin clients
supabase/schema.sql        Schema, triggers, and RLS policies
supabase/migrations/       Database upgrade SQL
supabase/seed.sql          Demonstration seed data
supabase/tests/            Selected RLS regression checks
translations.ts, i18n.ts   Translation dictionaries and i18next setup
index.html, styles.css     Page shell, CDN styling configuration, and custom CSS
```

## Production roadmap

1. Establish trusted identity, role assignment, institutional membership, and complete server-side authorization.
2. Connect course authoring, enrollment, progress, settings, and community workflows to durable data services with validated permissions.
3. Build an authenticated, rate-limited AI gateway with server-held credentials and clear usage controls.
4. Implement real payment, conferencing, storage, and credential services only where required, with verification and audit trails.
5. Add automated unit, integration, accessibility, and end-to-end coverage, including recovery and email-confirmation flows.
6. Prepare deployment automation, security headers, monitoring, backup and recovery, and a documented operational ownership model.

## Contributing

Create a focused branch, explain the intended change and its user impact, and include relevant verification in the pull request. Preserve existing contracts and avoid committing secrets, real user data, or generated build output. For changes to the database, document migration and rollback considerations and test authorization boundaries.

## License

A license file is not present in this repository. Confirm licensing with the project owner before redistributing or reusing the code.


<!-- /coderabbit-ai-generated:v1 -->