# Asia Placements

Premium corporate recruitment website for Asia Placements, a trusted HR consultancy and recruitment agency based in Vasai, Maharashtra, India.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Backend:** Supabase
- **Notifications:** Sonner
- **Charts:** Recharts

## Features

- Responsive one-page corporate website
- Premium brand identity with SVG logo
- Smooth animations and micro-interactions
- Lead generation forms (Contact, Job Application, Callback)
- Resume upload functionality
- Floating CTAs and sticky navigation
- SEO optimized (meta tags, JSON-LD, sitemap, robots)
- Admin dashboard for managing submissions
- Glassmorphism design system
- Performance optimized (95+ Lighthouse)

## Sections

1. Sticky Navigation
2. Hero with floating shapes and animations
3. About Us
4. Services (9 recruitment services)
5. Industries We Serve (11 sectors)
6. Why Choose Asia Placements
7. Recruitment Process
8. For Job Seekers (with apply form)
9. For Employers (with contact form)
10. Testimonials
11. Frequently Asked Questions
12. Contact (with map)
13. Footer

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone <repo-url>
cd asia-placements
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `RESEND_API_KEY` - Resend API key for email (optional)
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)
- `NEXT_PUBLIC_CLARITY_ID` - Microsoft Clarity ID (optional)

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Supabase Setup

1. Create a Supabase project
2. Run the following SQL in the SQL editor:

```sql
-- Contacts table
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'general',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Applications table
CREATE TABLE applications (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position TEXT NOT NULL,
  experience TEXT NOT NULL,
  message TEXT,
  resume_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Storage bucket for resumes
INSERT INTO storage.buckets (id, name) VALUES ('resumes', 'resumes');
```

3. Enable Row Level Security (RLS) and set policies as needed for your admin access.

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

Set environment variables in Vercel dashboard.

### Docker

```bash
docker-compose up -d
```

### Render

1. Connect your GitHub repo
2. Use `render.yaml` or manual setup:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

## Brand Guidelines

### Colors

| Color | Hex |
|-------|-----|
| Primary Blue | `#2563EB` |
| Dark Navy | `#0F172A` |
| Accent Teal | `#14B8A6` |
| Background | `#FFFFFF` |
| Section BG | `#F8FAFC` |
| Primary Text | `#111827` |
| Secondary Text | `#6B7280` |
| Borders | `#E5E7EB` |

### Typography

- **Font:** Geist (via Next.js Google Fonts)
- **Headings:** Bold, tracking-tight
- **Body:** Regular weight, 16-18px base

### Logo

The logo icon combines an upward-right arrow (growth) with interconnected dots (people), representing the brand's mission of connecting talent with opportunity.

## Performance Targets

- Google Lighthouse: 95+ Performance, 100 SEO, 100 Accessibility, 100 Best Practices
- Load time under 2 seconds
- WebP image formats
- Code splitting and lazy loading
- Tree shaking enabled

## License

Private — All rights reserved.
