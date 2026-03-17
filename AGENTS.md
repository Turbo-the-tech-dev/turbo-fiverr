# Repository Guidelines

## Project Structure & Module Organization
- `artifacts/api-server` now ships its own `package.json`, `tsconfig`, and Express entry point under `src/` (keep `lib`, `middlewares`, and `routes` focused on helpers, logging, and HTTP endpoints).
- `artifacts/mockup-sandbox` is a Vite-powered React experiment; keep `index.html`, `src/main.tsx`, `App.tsx`, and styles aligned with `vite.config.ts` and `vitest.config.ts` when modifying UI panels.
- `lib/` holds standalone packages (`api-client-react`, `api-spec`, `api-zod`, `db`) with self-contained `package.json`/`tsconfig.json` files and entry points tailored to their domain.
- `scripts/src/` still contains automation helpers; give each script a descriptive name (for example, `scripts/src/deploy.sh`) and document expected arguments inline.

## Build, Test, and Development Commands
- Install dependencies inside the package you edit before running scripts (e.g., `cd artifacts/api-server && npm install`, `cd artifacts/mockup-sandbox && npm install`, `cd lib/api-zod && npm install`).
- Each package exposes the usual lifecycle scripts (`npm run build`, `npm run test`) plus targeted commands when relevant (`npm run start` for the API server, `npm run dev`/`npm run preview` for the mockup sandbox).
- Execute automation helpers directly (for example, `sh scripts/src/<task>.sh`) so each script targets its own environment without affecting other packages.

## Coding Style & Naming Conventions
- Favor TypeScript/JavaScript idioms: 2-space indentation, camelCase for variables, PascalCase for React components, and kebab-case for package or script filenames.
- Name API helpers descriptively (e.g., `createUserSchema`, `fetchOrderRoutes`) and document non-obvious behaviors with brief JSDoc comments.

## Testing Guidelines
- `npm run test` runs `tsc --noEmit` inside each package, so keep `*.test.ts`/`*.spec.ts` files next to the code you guard and let the compiler catch regressions.
- The mockup sandbox exposes `vitest run`, so add UI tests under `src/` before the sandbox grows more complex.
- Keep validation logic with the responsible modules (`routes`, `middlewares`, `schema`) and add a simple `describe('setup', () => {})` stub when expanding the suite.

## Commit & Pull Request Guidelines
- Use imperative commit messages like `feat: add authentication helper` and reference issues when applicable.
- Every PR needs a summary, testing steps (e.g., packages touched plus `npm run test`), and screenshots/logs when UI or integration behavior changes.

## Security & Configuration Tips
- Keep secrets out of Git by listing only example env files in `lib/` or `artifacts/` and referring to actual values in CI.
- Sanitize middleware inputs in `artifacts/api-server/src/middlewares` and centralize overrideable defaults with clear comments about environment overrides.
