FROM node:20

# Create app directory
RUN mkdir -p /usr/app/container
WORKDIR /usr/app/container

copy package.json .

RUN npm install 

COPY . .

ENTRYPOINT ["./.docker/entrypoint.sh"]
