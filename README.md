# Zach Yeo — personal website

An editorial portfolio for selected software projects, professional experience,
and links to Zach’s photography work.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
npm audit --omit=dev
```

## Structure

- `src/app/page.tsx` — homepage
- `src/app/work/[slug]/page.tsx` — project case studies
- `src/app/data/projects.ts` — project content
- `src/app/globals.css` — visual system and responsive layouts

The production site is hosted at [zachyeo.com](https://zachyeo.com). Photography
lives separately at [photos.zachyeo.com](https://photos.zachyeo.com).
