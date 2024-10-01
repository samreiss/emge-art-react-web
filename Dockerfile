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

# release step - take the dist build from the previous build container and using it in a nginx container
FROM nginx:alpine-slim AS release
# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# Copy the built files from the build container
COPY --from=build /var/www/clientapp_frontend/build/ /usr/share/nginx/html
COPY --from=build /var/www/clientapp_frontend/nginx_entrypoint.sh ./nginx_entrypoint.sh
# remove the default nginx conf
RUN rm /etc/nginx/conf.d/default.conf
# Give the non-root user write permissions to /etc/nginx/conf.d
RUN chown -R appuser:appgroup /etc/nginx/conf.d
# Set permissions for the non-root user on necessary directories
RUN chown -R appuser:appgroup /usr/share/nginx/html
# Expose the frontend port
EXPOSE $FRONTEND_PORT
# Switch to non-root user
USER appuser
# Set up write permissions for the /usr/share/nginx/html directory
RUN chmod -R 775 /usr/share/nginx/html
# Use the custom entrypoint and start nginx
ENTRYPOINT /bin/sh -x ./nginx_entrypoint.sh && nginx -g 'daemon off;'
