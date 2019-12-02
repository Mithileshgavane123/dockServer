FROM node:alpine

WORKDIR /app

COPY . .

EXPOSE 7777

CMD node server.js