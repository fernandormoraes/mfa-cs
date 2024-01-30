FROM node:18

RUN mkdir -p /usr/app/main
WORKDIR /usr/app/main

RUN corepack enable

copy package.json .

RUN pnpm install --force

COPY . .

ENTRYPOINT ["./.docker/entrypoint.dev.sh"]
