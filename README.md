# Mayur Rishi — Portfolio

One-page portfolio built with Next.js 15, Tailwind CSS 4 and Framer Motion.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

| Path | What |
| --- | --- |
| `src/app/globals.css` | Design tokens (colours, fonts) and motion keyframes |
| `src/data/*.ts` | All copy: site info, skills, experience, projects, socials |
| `src/components/sections/` | One component per page section |
| `src/components/ui/` | Shared pieces (Pill, Chip, Reveal, PhotoFrame…) |
| `src/components/art/` | Animated SVG artwork for each project |
| `src/lib/contact.ts` | Contact form submit — **not wired up yet** |

## To do

- Add the profile photo: drop it in `public/` and set `photoSrc` in `src/data/site.ts`.
- Wire the contact form: implement `sendMessage` in `src/lib/contact.ts`.
- Set `email` in `src/data/site.ts` to show an email row in Contact.
