FROM node:20

# Create app directory
RUN mkdir -p /usr/app/dashboard
WORKDIR /usr/app/dashboard

copy package.json .

RUN npm install 

COPY . .

ENTRYPOINT ["./.docker/entrypoint.sh"]
