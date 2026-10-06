# Deploy Portfolio

Connect **DevMiguelSilva/portfolio** to the existing Vercel project **portfolio**. Leave Root Directory empty; keep production branch `main`, existing domains and environment scopes, and all other deployment settings.

`vercel.json` supplies Vite, `npm run build`, output `dist`, and the SPA rewrite. Run `npm ci`, `npm run build`, and `npm run lint` from repository root.

Keep existing public environment overrides only if they point to working domains. Empty demo overrides use `https://applytrack.miguelcode.dev` and `https://fittrack.miguelcode.dev`. Production overrides `VITE_JOB_TRACKER_URL` and `VITE_FIT_TRACKER_URL` use those same addresses; preserve their Config type and Production-only scope. `.env.example` uses empty overrides to avoid replacing working defaults with placeholders.

## Custom domains

Vercel serves `https://miguelcode.dev/` from Production. `www.miguelcode.dev` has a Vercel 308 permanent redirect to `miguelcode.dev`, preserving path and query. The canonical link in `index.html` points to the apex.

Cloudflare manages registration and DNS only. Keep Cloudflare nameservers, use DNS-only records with automatic TTL, and use the exact current records recommended in Vercel Settings → Domains. Cloudflare flattens the recommended apex CNAME. Vercel issues HTTPS certificates. Preserve unrelated DNS/email records and all existing Vercel domains.

Verify a branch preview before production: desktop/mobile layout, navigation, social links, both live demos, and links to the new source repositories. Keep the previous production deployment available for Vercel rollback. Existing production domain: `portfolio-iota-inky-3qcsrle7ay.vercel.app`.

Relevant history is preserved here. The original repository is retained as `DevMiguelSilva/portfolio-monorepo-archive`.
