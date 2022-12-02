FROM node:latest
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn install
RUN yarn start:build
COPY . .
CMD [ "yarn", "start:server"]