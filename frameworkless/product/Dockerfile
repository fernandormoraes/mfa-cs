FROM node:20

# Create app directory
RUN mkdir -p /usr/app/product
WORKDIR /usr/app/product

copy package.json .

RUN npm install 

COPY . .

ENTRYPOINT ["./.docker/entrypoint.sh"]
