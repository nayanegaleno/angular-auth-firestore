FROM node:lts-alpine

RUN apk add git
RUN npm install -g @angular/cli firebase-tools

EXPOSE 4200
EXPOSE 9876