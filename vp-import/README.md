# V&P Import — Website

Production-ready marketing site for **V&P Sattava Pvt. Ltd. (V&P Import)**,
built to drive WhatsApp enquiries rather than online checkout.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS (custom navy / gold / rust token system)
- Framer Motion for animation
- Lucide React for icons

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build
npm run start
```

## Editing content

Almost all copy — services, process steps, industries, FAQ, contact
details, and the WhatsApp number — lives in one file:

```
lib/constants.ts
```

Change the phone number, links, or any list there and it updates across
every page automatically.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata, schema.org
  page.tsx           Home
  about/page.tsx
  services/page.tsx
  process/page.tsx
  industries/page.tsx
  faq/page.tsx
  contact/page.tsx
  not-found.tsx       Custom 404
  sitemap.ts          Dynamic sitemap.xml
  robots.ts           Dynamic robots.txt
  globals.css

components/
  Navbar.tsx           Sticky, blur-on-scroll, mobile menu
  Footer.tsx
  WhatsAppButton.tsx    Floating + inline CTA, always → WhatsApp
  Hero.tsx
  GlowRoute.tsx         Animated China↔India route (SVG, no 3D)
  SectionHeading.tsx
  AnimatedCounter.tsx
  ServicesGrid.tsx
  ProcessTimeline.tsx
  WhyChooseUs.tsx
  Warehousing.tsx
  IndustriesGrid.tsx
  FAQAccordion.tsx
  ContactCTA.tsx

lib/
  constants.ts          Site content, nav, services, FAQ, WhatsApp helper
```

## Before deploying

- Add real `favicon.ico` and `og-image.jpg` (1200×630) to `/public`.
- Update `SITE.url` in `lib/constants.ts` to your live domain.
- Swap in real company photography where you'd like more than icon-driven
  visuals (e.g. a warehouse or team photo on the About page).

