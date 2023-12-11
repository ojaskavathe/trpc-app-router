This is a Next.js Template for using [tRPC](https://trpc.io/) with Next 13's App Router.

It's a simple CRUD app using a Postgres Database (through [Prisma](https://www.prisma.io/)) running in a Docker container. It uses tRPC's [Fetch Adapter](https://trpc.io/docs/server/adapters/nextjs#route-handlers) with Next's [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) to host tRPC. It also handles requests with tRPC's [React Query Wrapper](https://trpc.io/docs/client/react).

Note that the [.env](/.env) file holds the database URL.

## Setup

First, run the database server:

```bash
docker compose up -d
```

This installs the [PostgreSQL Image](https://hub.docker.com/_/postgres) and spins up a container with a volume.

Next, set up the database by running migrations, and start the development server: 

```bash
npx prisma migrate dev
npm run dev
```

Alternatively, run migrations and start the server using:

```bash
npm run dev:migrate
```

This starts a server listening at [http://localhost:3000](http://localhost:3000).

## Why?

As of creating this repo, tRPC's [Next.js adapter](https://trpc.io/docs/server/adapters/nextjs) only works with the Pages Router. I wanted a simple template to refer to whenever I used tRPC with Next.js projects that use the App Router.