FROM node:10.16.3
RUN npm i -g @nestjs/cli
WORKDIR /app
EXPOSE 3000
