FROM node:18-alpine as builder

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn run build

CMD ["yarn", "run", "start"]
