# Vite React + TypeScript — Campaign Dashboard

A small React + TypeScript + Vite project providing a dashboard and email-campaign features (upload, map fields, contact details, lists). Uses Material UI for UI, Chart.js / Recharts for charts, and PapaParse for CSV import.

## Key Features

- Dashboard with charts and stats
- Email lists management and CSV upload flow (map fields, preview contacts)
- Mock data for local development
- Themed layout with a topbar and sidebar components

## Tech Stack

- React 19, TypeScript
- Vite (dev server, build)
- @mui/material, @mui/icons-material
- chart.js, react-chartjs-2, recharts
- papaparse for CSV parsing
- ESLint + TypeScript for linting

## Project Structure (highlight)

- [src/main.tsx](src/main.tsx) — app entry
- [src/App.tsx](src/App.tsx) — routes / top-level UI
- [src/layout/DashboardLayout.tsx](src/layout/DashboardLayout.tsx) — layout wrapper
- [src/components/Topbar.tsx](src/components/Topbar.tsx) — header
- [src/components/Sidebar.tsx](src/components/Sidebar.tsx) — navigation
- [src/features/dashboard/Dashboard.tsx](src/features/dashboard/Dashboard.tsx) — dashboard page
- [src/features/campaign/list/EmailLists.tsx](src/features/campaign/list/EmailLists.tsx) — lists overview
- [src/features/campaign/uploadlist/UploadEmailList.tsx](src/features/campaign/uploadlist/UploadEmailList.tsx) — CSV upload flow
- [src/data/mockData.ts](src/data/mockData.ts) — seeded/mock data
- [src/theme/theme.ts](src/theme/theme.ts) — MUI theme

## Setup

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

5. Run linter

```bash
npm run lint
```

## Development Notes

- CSV import: the upload flow uses papaparse to parse CSVs and shows mapping screens in the upload feature folder.
- Charts live under features/dashboard and use chart.js and recharts.
- To change global styling, edit src/theme/theme.ts.
- Mock data for local dev is in src/data/mockData.ts.

## Where to look for common tasks

- Add routes or pages in App.tsx.
- New UI components: place in src/components or feature-local components folders.
- Add unit tests close to changed files (project currently contains no test runner config).
