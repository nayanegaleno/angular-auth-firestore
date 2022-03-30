FROM node:lts-alpine

WORKDIR /app

RUN npm i -g @angular/cli
RUN apk add git
RUN npm i -g firebase-tools

VOLUME [ "/teste" ]

EXPOSE 4200
EXPOSE 9876