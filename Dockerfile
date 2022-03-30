FROM node:lts-alpine

RUN npm i -g @angular/cli
RUN apk add git
RUN npm i -g firebase-tools

EXPOSE 4200
EXPOSE 9876