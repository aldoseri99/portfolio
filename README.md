# Ali Aldoseri — Portfolio

A responsive one-page portfolio built with React, Vite, and plain CSS. Fonts are bundled locally. No backend is required.

## Development

Use Node.js 22.12+ or a compatible supported release.

```sh
npm ci
npm run dev
```

## Project structure

```text
public/             Favicon and downloadable CV
src/
  components/       Navigation, footer, and reusable UI
  sections/         Hero, About, Skills, Projects, Education, Contact
  data/             Profile, projects, and skills
  App.jsx           Page composition and scroll reveals
  main.jsx          Application entry and fonts
  index.css         Theme, layout, and responsive styles
tests/              Browser and accessibility checks
```

Root configuration files support Vite, ESLint, and Playwright. Dependencies and generated output are ignored by Git, as is local assistant tooling.

## Customize

- **CV:** Replace `public/Ali_Aldoseri_CV.pdf`.
- **Contact details:** Edit `src/data/profile.js`.
- **Projects and skills:** Edit `src/data/projects.js` and `src/data/skills.js`.
- **Project images:** Add screenshots or GIFs to `public/projects/` and set each project's `image` and `imageAlt`. Abstract illustrations appear when no image is supplied. For subdirectory deployments, prefix image URLs with `import.meta.env.BASE_URL`.
- **Education and page copy:** Edit `src/sections/`.
- **Styling:** Edit `src/index.css`.
- **Metadata:** Edit `index.html`. Add canonical and Open Graph URLs when the deployment domain is known.

## Validation

```sh
npm run lint
npx playwright install chromium
npm test
```

Browser tests build the site automatically and check responsive layouts, keyboard navigation, CV downloads, reduced motion, and accessibility.

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static host. Configure Vite's `base` for a subdirectory deployment. Navigation uses section anchors, so route rewrites are unnecessary.
