# IBMH - Iglesia Bautista Misionera Hurlingham

This is a [Next.js](https://nextjs.org/) project configured for Static Site Generation (SSG) to be deployed on Vercel.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About/Beliefs page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── sermones/
│       └── page.tsx        # Sermons page (placeholder)
├── components/             # Reusable React components
│   ├── Accordion.tsx
│   ├── BannerContact.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── FormContact.tsx
│   ├── GoogleMap.tsx
│   ├── InfoMeeting.tsx
│   └── Navbar.tsx
├── data/                   # Static data files
│   └── beliefs.ts          # Church beliefs/doctrines
└── lib/                    # Utility functions
    └── validation.ts       # Form validation
```

## Building for Production

To build the site for production (static export):

```bash
npm run build
```

This will generate a static export in the `out` directory, ready to be deployed to Vercel or any static hosting service.

## Deployment on Vercel

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import the project on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The site is configured for SSG with `output: 'export'` in `next.config.js`.

## Future Enhancements

- [ ] Integrate YouTube API for sermon videos
- [ ] Add Firestore for dynamic sermon content
- [ ] Implement contact form backend (API routes or external service)
- [ ] Add sermon filtering and search
- [ ] Add sermon detail pages with YouTube embeds

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Vercel (Static Site Generation)
