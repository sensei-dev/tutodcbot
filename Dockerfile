FROM node:15.13.0-alpine3.13

WORKDIR /usr/src/tutodcbot

RUN apk update --no-cache \
        && apk upgrade --no-cache

COPY package.json ./
RUN npm install

COPY . .
CMD ["node", "index.js"]
