FROM node:16.14.0-alpine AS builder

# Create app directory
WORKDIR /usr/src/app
# RUN mkdir -p /var/log/server

# Bundle app source
COPY . .

# Install app dependencies & Build
RUN npm i --production
RUN npm run build

FROM nginx:alpine

WORKDIR /var/www/html

COPY --from=server /usr/src/app/build .

CMD ["nginx", "-g", "daemon off;"]