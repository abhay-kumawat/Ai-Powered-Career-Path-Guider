# Database Management for Microservices

Since we are using a **shared database** (Neon PostgreSQL) for multiple microservices but managing them with separate Prisma schemas, we face a "schema conflict" issue where one service might try to drop tables belonging to another service during `db push` or `migrate`.

## The Solution: Unified Schema

We have created a `unified-schema.prisma` file in the root directory. This file contains **ALL** models from all microservices.

**When you need to update the database structure:**
1. **DO NOT** run `npx prisma db push` from inside individual service directories (e.g., `apps/api/auth-service`).
2. **INSTEAD**, use the unified schema in the root directory.

### How to Apply Database Changes
1. Update detailed models in the respective service's `prisma/schema.prisma` (for client generation).
2. Copy those changes to `unified-schema.prisma` in the root.
3. Run the following command from the root:
   ```bash
   npx prisma@5.10.2 db push --schema=./unified-schema.prisma
   ```

### How to Generate Clients
After updating the database or when setting up the project:
1. Run `./generate-clients.sh` from the root.
   This script runs `prisma generate` for each service, ensuring they have the latest client types.

## Current State
- The database is fully synced with `unified-schema.prisma`.
- All services (`auth`, `user`, `career`, `ai`) have their clients generated in `node_modules/@internal/prisma-*-client`.
- Foreign Keys across services (e.g., `UserProfile` -> `User`) are **logical only** (no SQL Foreign Key constraint) to allow verifying services independently. FKs within a service boundary (e.g., `User` -> `RefreshToken`) are real SQL constraints.
