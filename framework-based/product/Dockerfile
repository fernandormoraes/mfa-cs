FROM node:18

# Create app directory
RUN mkdir -p /usr/app/product
WORKDIR /usr/app/product

RUN corepack enable

copy package.json .

RUN pnpm install --force

COPY . .

ENTRYPOINT ["./.docker/entrypoint.dev.sh"]
