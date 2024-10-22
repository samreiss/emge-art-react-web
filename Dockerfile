# syntax=docker/dockerfile:1

# build step
FROM --platform=$BUILDPLATFORM node:lts-alpine AS build
ARG TARGETPLATFORM
ARG BUILDPLATFORM
RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM" > /log
WORKDIR /var/www/clientapp_frontend 
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# release step - take the dist build from the previous build container and using it in a nginx container
FROM nginx:alpine-slim AS release
COPY --from=build /var/www/clientapp_frontend/build/ /usr/share/nginx/html
COPY --from=build /var/www/clientapp_frontend/nginx_entrypoint.sh ./nginx_entrypoint.sh
# remove the default nginx conf
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE $FRONTEND_PORT
ENTRYPOINT /bin/sh -x ./nginx_entrypoint.sh && nginx -g 'daemon off;'