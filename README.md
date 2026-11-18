# User Management

An Angular 22 standalone SPA for user management — covering login, registration, profile management, and role-based permissions. Rendered server-side via Angular SSR + Express.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 22 |
| Rendering | Angular SSR (`@angular/ssr` + Express 5) |
| Language | TypeScript 6 |
| Component style | Standalone components (no NgModules) |
| Reactive layer | RxJS 7.8 |
| Styling | CSS |
| Testing | Vitest |
| Package manager | npm 11 |

---

## Prerequisites

| Tool | Required Version |
|---|---|
| **Node.js** | `^22.x` |
| **npm** | `^11.x` |
| **Angular CLI** | `^22.x` |

Install Angular CLI globally if not already present:

```bash
npm install -g @angular/cli@22
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd user-management
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Set the REST API base URL and any other environment-specific values in:

```
src/environments/environment.ts           # development
src/environments/environment.production.ts # production
```

### 4. Start the development server

```bash
npm start
```

The app is available at `http://localhost:4200/` and reloads automatically on file changes.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the dev server (`ng serve`) |
| `npm run build` | Production build (SSR, output to `dist/`) |
| `npm run watch` | Development build in watch mode |
| `npm test` | Run unit tests with Vitest |
| `npm run serve:ssr:user-management` | Run the built SSR server (`dist/.../server.mjs`) |

> Build output goes to `dist/user-management/`.

---

## Project Structure

```
src/
├── app/                  # Standalone components, routes, and services
├── environments/         # Per-environment configuration
├── main.ts               # Browser bootstrap
├── main.server.ts        # SSR bootstrap
├── server.ts             # Express SSR entry point
└── styles.css            # Global styles
```
