# Statically generated site: Next.js with Sanity CMS

## Getting Started

Set `studioHost` in `sanity.cli.ts`.

Set environment variables:

- `SANITY_STUDIO_SANITY_PROJECT_ID`
- `SANITY_STUDIO_SANITY_DATASET`

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

## Apply schema changes

Initially and after each change:

```
npm run typegen
npx sanity deploy
```

## Production

Build site:

```
npm run build
```

Build will be in directory `out`.
