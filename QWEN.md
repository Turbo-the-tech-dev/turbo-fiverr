# Turbo Fiverr - Project Context

## Project Overview

**Turbo Fiverr** is a monorepo TypeScript/JavaScript project structured as a scaffolded codebase for building a freelance services platform. The architecture follows a modular package-based approach with clear separation between API services, UI components, and shared libraries.

### Technologies
- **Primary Languages:** TypeScript / JavaScript
- **Runtime:** Node.js (backend), React (frontend)
- **Package Manager:** npm (per-package)
- **Schema Validation:** Zod (via `lib/api-zod`)
- **Database:** Configurable (schema layer in `lib/db`)

## Repository Structure

```
turbo-fiverr/
├── artifacts/
│   ├── api-server/          # Backend API surface
│   │   └── src/
│   │       ├── lib/         # API utilities
│   │       ├── middlewares/ # Request/response middleware
│   │       └── routes/      # API route handlers
│   └── mockup-sandbox/      # Sandboxed UI experiments
│       └── src/
│           ├── components/  # React components
│           ├── hooks/       # Custom React hooks
│           └── lib/         # UI utilities
├── lib/                     # Shared reusable packages
│   ├── api-client-react/    # React API client
│   ├── api-spec/            # API specification (OpenAPI/etc.)
│   ├── api-zod/             # Zod schema validators
│   └── db/                  # Database schema & utilities
├── scripts/
│   └── src/                 # Automation helpers
├── attached_assets/         # Static assets (images, etc.)
├── AGENTS.md                # Repository guidelines
└── QWEN.md                  # This file
```

## Building and Running

### General Rules
- **No root-level build:** Each package manages its own dependencies and lifecycle scripts.
- **Install dependencies per-package:**
  ```bash
  cd artifacts/api-server && npm install
  cd lib/api-client-react && npm install
  ```

### Lifecycle Commands (per package)
| Command | Description |
|---------|-------------|
| `npm run build` | Compile TypeScript, bundle assets |
| `npm run start` | Start the development or production server |
| `npm run test` | Run test suite |

### Automation Scripts
Run helper scripts from the project root:
```bash
sh scripts/src/<name>.sh
```

## Development Conventions

### Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Variables/Functions | camelCase | `fetchUserOrders`, `createUserSchema` |
| React Components | PascalCase | `OrderCard`, `UserDashboard` |
| Package/Script Files | kebab-case | `api-client-react`, `deploy.sh` |
| API Helpers | Descriptive verbs | `getRoutes`, `validateOrder` |

### Code Style
- **Indentation:** 2 spaces
- **Documentation:** Brief JSDoc comments for non-obvious behavior
- **Type Safety:** Prefer TypeScript with explicit types where beneficial

### Testing Practices
- **File Naming:** `*.test.ts` or `*.spec.ts`
- **Pattern:** `describe` / `it` blocks
- **Location:** Co-located with source code
- **Focus Areas:** Routes, middleware, schema validators
- **Pending Suites:** Use `describe('setup', () => {})` as placeholder

### Commit Message Format
```
<type>: <imperative description>

[Optional body with context]
[References: #issue-number]
```

**Types:** `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

**Example:**
```
feat: add authentication helper

Implements JWT token validation middleware for protected routes.
References: #42
```

## Pull Request Guidelines

Every PR should include:
1. **Summary:** Clear description of changes
2. **Testing Steps:** Packages touched + `npm run test` results
3. **Visual Evidence:** Screenshots/logs for UI or integration changes

## Security & Configuration

- **Secrets Management:** Never commit actual secrets. Use `.env.example` patterns and reference CI for real values.
- **Input Sanitization:** All middleware inputs must be sanitized in `artifacts/api-server/src/middlewares`.
- **Configuration:** Centralize overrideable defaults with clear comments about environment variable overrides.

## Package Dependencies

| Package | Purpose | Typical Dependencies |
|---------|---------|---------------------|
| `api-server` | Backend API | Express/Fastify, Zod, DB client |
| `mockup-sandbox` | UI Experiments | React, component libraries |
| `api-client-react` | React API hooks | React, fetch/axios |
| `api-spec` | API contracts | OpenAPI/Swagger tooling |
| `api-zod` | Schema validation | Zod |
| `db` | Database layer | ORM/query builder, migrations |

## Current Status

This is a **scaffolded project** with directory structure in place. Most source directories are empty placeholders awaiting implementation. The `AGENTS.md` file contains the authoritative development guidelines.
