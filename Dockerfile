# syntax=docker/dockerfile:1

# build step
FROM --platform=$BUILDPLATFORM node:22-alpine AS build
ARG TARGETPLATFORM
ARG BUILDPLATFORM
RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM" > /log
WORKDIR /var/www/clientapp_frontend 
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# release step - take the dist build from the previous build container and use it in an nginx container
FROM nginx:alpine-slim AS release

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set the user to non-root
USER appuser

COPY --from=build /var/www/clientapp_frontend/build/ /usr/share/nginx/html
COPY --from=build /var/www/clientapp_frontend/nginx_entrypoint.sh ./nginx_entrypoint.sh

# remove the default nginx conf
RUN rm /etc/nginx/conf.d/default.conf

EXPOSE $FRONTEND_PORT

# Ensure the non-root user can execute the entrypoint script
RUN chmod +x ./nginx_entrypoint.sh

# Set the ENTRYPOINT
ENTRYPOINT /bin/sh -x ./nginx_entrypoint.sh && nginx -g 'daemon off;'
