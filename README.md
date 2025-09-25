This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Security Configuration

The newsletter API now requires a few environment variables. Add them to `.env.local`:

```bash
NEWSLETTER_ALLOWED_ORIGINS="https://www.jonathananguelov.com,https://jonathananguelov.com"
NEWSLETTER_SIGNING_SECRET="change-me"
NEWSLETTER_RATE_LIMIT_PER_MINUTE=2000
NEWSLETTER_RATE_LIMIT_BURST=2000
NEWSLETTER_EMAIL_COOLDOWN_MS=30000
NEWSLETTER_TOKEN_TTL_MS=60000
OFFSTONE_API_URL="https://offstone.fr/api/newsletter-jonathan"
OFFSTONE_API_KEY="optional-secret"
HCAPTCHA_SECRET="optional-hcaptcha-secret"
```

- `NEWSLETTER_ALLOWED_ORIGINS` controls which origins can submit forms. Leave empty to allow all (local development).
- `NEWSLETTER_SIGNING_SECRET` must stay private. Rotate it if exposed.
- `OFFSTONE_API_KEY` is optional. If set, the proxy adds it as `X-API-Key` when calling Offstone.
- `HCAPTCHA_SECRET` enables the fallback captcha path when traffic exceeds the rate-limit bucket.

The client fetches a short-lived token from `/api/newsletter/token` before posting the form. If you invalidate sessions or suspect replay attempts, rotate `NEWSLETTER_SIGNING_SECRET`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
