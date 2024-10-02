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

# Temporarily switch to root user to copy files, set permissions, and make the directory writable
USER root

COPY --from=build /var/www/clientapp_frontend/build/ /usr/share/nginx/html
COPY --from=build /var/www/clientapp_frontend/nginx_entrypoint.sh ./nginx_entrypoint.sh

# Remove the default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Set the correct permissions so the non-root user can write to the directory
RUN chmod -R 775 /usr/share/nginx/html && chown -R appuser:appgroup /usr/share/nginx/html

# Ensure the entrypoint script is executable
RUN chmod +x ./nginx_entrypoint.sh

# Switch back to non-root user
USER appuser

EXPOSE $FRONTEND_PORT

# Use JSON syntax for ENTRYPOINT (recommended)
ENTRYPOINT ["/bin/sh", "-x", "./nginx_entrypoint.sh", "&&", "nginx", "-g", "daemon off;"]