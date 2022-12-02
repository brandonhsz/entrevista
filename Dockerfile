FROM node:latest
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn install
COPY . .
RUN yarn start:build
CMD [ "node", "dist/index.js" ]