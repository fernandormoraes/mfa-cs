# A Microfrontend application using ModernJS and Garfish

A Microfrontends example application using ModernJS framework and Garfish

## Running application

Using compose file:

    docker compose -f docker-compose.dev.yml

Manually running each application:

    pnpm install
    pnpm run dev

## Creating a new microfrontend

Following official documentation of modernjs (https://modernjs.dev/en/guides/topic-detail/micro-frontend/c02-development.html)

    mkdir newApp
    cd newApp
    npx @modern-js/create@latest # Select Web App
    pnpm run new # Select Enable Feature -> Micro Front-end Feature

New microfrontend has to be added to docker-compose file.



