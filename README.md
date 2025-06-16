# VYO Consulting

_Statically generated site: Next.js with Sanity CMS, based on https://github.com/arnaudrenaud/sanity-nextjs-ssg._

## Getting Started

Copy `.env.example` to `.env` and set variables:

- Project ID must already exist
- Dataset must already exist (when a project is created, a dataset named `production` is also created)
- Studio host will be created if it does not already exist

Install dependencies:

```
npm install
```

Deploy schema to dataset:

```
./deploy-sanity-schema.sh
```

Start development server:

```
npm run dev
```

## Apply schema changes

After each change:

```
npm run typegen
./deploy-sanity-schema.sh
```

## Production

Build site:

```
npm run build
```

Build will be in directory `out`.
