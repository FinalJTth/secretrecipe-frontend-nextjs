FROM node:20.9.0-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN corepack prepare pnpm@latest --activate
ENV COREPACK_ENABLE_NETWORK="0"
COPY ./src /app/src
COPY ./public /app/public
COPY ./next.config.js /app/
COPY ./next-env.d.ts /app/
COPY ./package.json /app/
COPY ./tsconfig.json /app/
COPY ./pnpm-lock.yaml /app/
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
EXPOSE 8000
CMD [ "pnpm", "start" ]