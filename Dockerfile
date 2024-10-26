# syntax=docker/dockerfile:1

# Build step
FROM --platform=$BUILDPLATFORM node:lts-alpine AS build
ARG TARGETPLATFORM
ARG BUILDPLATFORM
RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM" > /log

# Install build tools, including make
RUN apk add --no-cache make bash

# Set the working directory
WORKDIR /var/www/clientapp_frontend

COPY package.json .

# Install dependencies with clean refresh
RUN make clean_refresh

COPY . .

# Build the ReactJS app using the Makefile command
RUN make build

# Release step
FROM nginx:alpine-slim AS release

# Create a non-root user and group
RUN addgroup -S nginxgroup && adduser -S nginxuser -G nginxgroup

# Copy built files from build step
COPY --from=build /var/www/clientapp_frontend/dist/ /usr/share/nginx/html
COPY --from=build /var/www/clientapp_frontend/nginx_entrypoint.sh ./nginx_entrypoint.sh

# Set permissions to allow non-root user to access the necessary files
RUN chown -R nginxuser:nginxgroup /usr/share/nginx/html && \
    chown -R nginxuser:nginxgroup /etc/nginx/conf.d && \
    chown nginxuser:nginxgroup ./nginx_entrypoint.sh && \
    chmod +x ./nginx_entrypoint.sh

# Pre-create the cache and run directories and set permissions
RUN mkdir -p /var/cache/nginx/client_temp && \
    mkdir -p /tmp/nginx && \
    chown -R nginxuser:nginxgroup /var/cache/nginx && \
    chown -R nginxuser:nginxgroup /tmp/nginx

# Remove the default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Update the Nginx configuration to use /tmp/nginx.pid instead of /var/run/nginx.pid
RUN sed -i 's|/var/run/nginx.pid|/tmp/nginx/nginx.pid|' /etc/nginx/nginx.conf

# Switch to the non-root user
USER nginxuser

# Expose the port for the frontend
EXPOSE $FRONTEND_PORT

# Run the existing entrypoint script without modification
ENTRYPOINT ["/bin/sh", "-x", "./nginx_entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]