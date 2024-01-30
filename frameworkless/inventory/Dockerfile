FROM node:20

# Create app directory
RUN mkdir -p /usr/app/inventory
WORKDIR /usr/app/inventory

copy package.json .

RUN npm install 

COPY . .

ENTRYPOINT ["./.docker/entrypoint.sh"]
