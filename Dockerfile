FROM node:10.16.3
RUN npm i -g @nestjs/cli
RUN mkdir -p /api-patients
WORKDIR /api-patients
EXPOSE 3000
