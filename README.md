# Portal Info Monorepo

**Turborepo monorepo for news app Portal Info**

 Express Server, Next JS Client, React+Vite CMS, and shared packages (API, DB, DTO, Eslint, tsconfig, Utilities, and UI Components).

## Overview

- **API**: Express + Prisma PostgreSQL with user, article, and comment modules in [apps/server](apps/server). Main routing at [apps/server/src/routes](apps/server/src/routes) with Zod validation and JWT auth from server utilities.
- **Front-end**: Next.js 14 (App Router) in [apps/web/client](apps/web/client) with custom components (carousel, categories, ad banner) and TanStack Query.
- **CMS**: Vite React boilerplate in [apps/web/cms](apps/web/cms) for future content management.
- **Shared packages**: Prisma schema at [packages/db/prisma/schema.prisma](packages/db/prisma/schema.prisma); DTO & Zod schemas in [packages/dto](packages/dto); TanStack Query-based API hooks in [packages/api](packages/api); axios/Tailwind utilities in [packages/utils/web](packages/utils/web); server utilities (JWT, logger, bcrypt, Winston) in [packages/utils/server](packages/utils/server); UI library in [packages/ui](packages/ui) and [packages/ui-2](packages/ui-2).

## Prerequisites

- Node.js >= 18
- pnpm 9
- PostgreSQL for Prisma

## Quick Setup

1. Install dependencies
   ```sh
   pnpm install
   ```
2. Set up environment variables.
	- Server/API (`apps/server/.env`):
     ```
     PORT=4000
     ```
	- Server Utils (`packages/utils/server/.env`):
     ```
     JWT_ACCESS_SECRET=JWT_ACCESS_SECRET_VALUE
	 JWT_REFRESH_SECRET=JWT_REFRESH_SECRET_VALUE
	 JWT_ACCESS_EXPIRES_IN=1
	 JWT_REFRESH_EXPIRES_IN=86400s
     ```
	- DB (`packages/db/.env`):
     ```
     DATABASE_URL=postgresql://user:pass@localhost:5432/portal_info
     ```
	- Next.js Client (`apps/web/client/.env`):
     ```
     NEXT_PUBLIC_PID=PID_VALUE
	 NEXT_PUBLIC_BASE_API_URL=http://localhost:4000/api
	 NEXT_PUBLIC_CROSS_ORIGIN=anonymous
	 NEXT_PUBLIC_SITE_URL=http://localhost:3000
     ```
3. Generate Prisma client & sync database
   ```sh
   npx prisma generate dev
   ```
4. Start development
   ```sh
   pnpm dev          # run all via Turbo
   # or
   pnpm dev:server   # Server only + related dependencies
   pnpm dev:client   # Client only + related dependencies
   ```
