# 🌑 turbo-fiverr - Imperial Workspace Context

## 🌌 Project Overview
**turbo-fiverr** is a high-performance TypeScript-based monorepo managed with **npm workspaces**. It is designed as a modular system for building and testing API services and frontend components, following the "paved way" philosophy of the Imperial Workspace.

### 🏗️ Architecture & Modules
- **artifacts/**: Deployable applications and experiments.
    - `api-server`: Express.js backend for handling API requests.
    - `mockup-sandbox`: Vite-powered React environment for UI prototyping.
- **lib/**: Shared internal packages.
    - `api-client-react`: React-specific hooks and components for API interaction.
    - `api-spec`: Centralized API definitions and specifications.
    - `api-zod`: Zod schemas for runtime validation and type inference.
    - `db`: Database schema definitions and utility functions.
- **scripts/**: Automation helpers for deployment and system tasks.

---

## 🛠️ Building and Running

### Root Commands (Monorepo-wide)
- **Install:** `npm install` (Installs all workspace dependencies).
- **Build All:** `npm run build`
- **Test All:** `npm run test` (Runs `tsc --noEmit` across all packages).
- **Lint:** `npm run lint`
- **Format:** `npm run format`

### Package-Specific Commands
- **API Server:**
    - `npm run dev:api-server` (Starts Express with `ts-node`).
    - `npm run build:api-server` (Compiles to `dist/`).
- **Mockup Sandbox:**
    - `npm run dev:mockup-sandbox` (Starts Vite dev server).
    - `npm run build:mockup-sandbox` (Builds for production).
- **Individual Packages:**
    - Navigate to `lib/<package>` and use `npm run build` or `npm run test`.

---

## 🎯 Development Conventions

### General Principles
- **TypeScript First:** All logic must be strictly typed. Use `tsc --noEmit` for validation.
- **Workspaces:** Respect the boundaries between `lib/` and `artifacts/`. Shared logic should live in `lib/`.
- **Atomic Changes:** One logical change per commit, following the Imperial imperative style.

### Coding Style
- **Formatting:** 2-space indentation, managed by Prettier and ESLint.
- **Naming:**
    - `camelCase` for variables and functions.
    - `PascalCase` for React components.
    - `kebab-case` for package directories and filenames.
- **Testing:** Place `*.test.ts` or `*.spec.ts` files alongside the source code.

---

## 🤖 AI Agent Guidelines
1. **Context Awareness:** Always check `AGENTS.md` and `QWEN.md` for additional specialized instructions.
2. **Modular Edits:** When modifying a package, ensure you are in the correct workspace directory if running local scripts.
3. **Validation:** After any code change, run `npm run test` or `tsc --noEmit` within the affected package to ensure type integrity.
4. **Security:** Never commit actual `.env` files. Use example templates and document required variables.

---
*"Everything is proceeding as I have foreseen."*
— **Turbo-the-tech-dev © 2026**
