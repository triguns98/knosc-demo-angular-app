# syntax=docker/dockerfile:1
FROM node:12.7-alpine AS build

WORKDIR /app

COPY . .

RUN npm i && npm run build


FROM nginx:mainline-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist/front-end .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
