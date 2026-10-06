# Deploy Portfolio

Connect **DevMiguelSilva/portfolio** to the existing Vercel project **portfolio**. Leave Root Directory empty; keep production branch `main`, existing domains and environment scopes, and all other deployment settings.

`vercel.json` supplies Vite, `npm run build`, output `dist`, and the SPA rewrite. Run `npm ci`, `npm run build`, and `npm run lint` from repository root.

Keep existing public environment overrides only if they point to working domains. Empty demo overrides use `applytrack-board.vercel.app` and `fit-tracker-jet-ten.vercel.app`. `.env.example` uses empty overrides to avoid replacing working defaults with placeholders.

Verify a branch preview before production: desktop/mobile layout, navigation, social links, both live demos, and links to the new source repositories. Keep the previous production deployment available for Vercel rollback. Existing production domain: `portfolio-iota-inky-3qcsrle7ay.vercel.app`.

Relevant history is preserved here. The original repository is retained as `DevMiguelSilva/portfolio-monorepo-archive`.
