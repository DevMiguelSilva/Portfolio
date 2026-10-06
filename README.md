# Miguel Silva — Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. Sections: Hero, About, Projects, Skills, and Contact.

## Local development

Run `npm ci` and `npm run dev` from this repository root. `npm run build` generates `dist`; `npm run lint` checks the code.

The site works with its default public links. Optionally copy `.env.example` to `.env.local`; leave demo overrides empty to use current defaults. `VITE_JOB_TRACKER_URL` and `VITE_FIT_TRACKER_URL` override demo links, while `VITE_GITHUB_URL` and `VITE_LINKEDIN_URL` override social links. Never commit private configuration.

## Editing

- `src/App.tsx`: page sections and project cards.
- `src/data/portfolio.ts`: project content, skills, stats, and socials.
- `src/config/links.ts`: demo URL defaults and overrides.
- `src/index.css` and `tailwind.config.js`: shared styling.

## Projects

- [ApplyTrack source](https://github.com/DevMiguelSilva/applytrack) · [Live app](https://applytrack-board.vercel.app)
- [FitTrack source](https://github.com/DevMiguelSilva/fittrack) · [Live app](https://fit-tracker-jet-ten.vercel.app)

The product apps are independent repositories and deployments. This site only links to them.

## Deployment

Use the existing Vercel project `portfolio` with `DevMiguelSilva/portfolio`, Root Directory empty, and production branch `main`. See [DEPLOY.md](DEPLOY.md).
