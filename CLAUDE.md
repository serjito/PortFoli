# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Sergio Matamoro built with Next.js 13 (App Router), TypeScript, Tailwind CSS, and shadcn/ui components. Features bilingual support (English/Spanish), dark/light themes, and a contact form with email integration.

## Common Commands

```bash
npm run dev       # Start development server at localhost:3000
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Architecture

### Directory Structure
- `app/` - Next.js App Router pages and API routes
- `app/api/contact/route.ts` - Email API endpoint using Nodemailer + Brevo SMTP
- `components/` - Page sections (hero, about, projects, skills, contact, navbar, footer)
- `components/ui/` - shadcn/ui component library (47 pre-built components)
- `lib/language-context.tsx` - Internationalization context with EN/ES translations
- `lib/nodemailer.ts` - Email sending utility
- `lib/utils.ts` - Tailwind class merging utility (`cn()`)
- `hooks/use-toast.ts` - Toast notification hook

### Key Patterns

**Client Components**: All interactive components use `'use client'` directive.

**Internationalization**: Uses React Context for translations.
```typescript
const { t } = useLanguage();
// Usage: t('hero.greeting'), t('contact.form.name')
```

**Theme System**: Uses next-themes with CSS variables (HSL-based).
```typescript
const { theme } = useTheme(); // 'light' | 'dark' | 'system'
```

**Form Handling**: Zod schemas with react-hook-form and shadcn/ui form components.

**Animations**: Framer Motion with consistent fadeIn/staggerChildren patterns across sections.

**Path Alias**: `@/*` maps to project root for imports.

## Environment Variables

Required in `.env`:
- `EMAIL_TO` - Recipient email address for contact form
- `BREVO_KEY` - Brevo SMTP API key for sending emails

## Styling

- Tailwind CSS with CSS variables for theming
- Color semantics: `primary`, `secondary`, `muted`, `accent`, `destructive`
- Dark mode via class strategy
- Theme variables defined in `app/globals.css`
