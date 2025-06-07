#! /usr/bin/env sh
set -e

REACT_APP_FRONTEND_PORT=${FRONTEND_PORT:-80}
REACT_APP_LOGGING_ENABLED=${REACT_APP_LOGGING_ENABLED:-true}

# Create the .env file
env_content="REACT_APP_LOGGING_ENABLED=${REACT_APP_LOGGING_ENABLED}"
printf "$env_content" > /usr/share/nginx/html/.env

# Create the env-config.js file with window._env_
echo "window._env_ = {" > /usr/share/nginx/html/env-config.js
awk -F '=' '{ print $1 ": \"" (ENVIRON[$1] ? ENVIRON[$1] : $2) "\"," }' /usr/share/nginx/html/.env >> /usr/share/nginx/html/env-config.js
echo "};" >> /usr/share/nginx/html/env-config.js

# Configure Nginx server
content_server='pid /tmp/nginx.pid;\n'
content_server=$content_server'server {\n'
content_server=$content_server"    listen ${REACT_APP_FRONTEND_PORT};\n"
content_server=$content_server'    location / {\n'
content_server=$content_server'        root /usr/share/nginx/html;\n'
content_server=$content_server'        index index.html index.htm;\n'
content_server=$content_server'        try_files $uri $uri/ /index.html;\n'
content_server=$content_server'    }\n'
content_server=$content_server'}\n'
printf "$content_server" > /etc/nginx/conf.d/nginx.conf

# Update index.html to include env-config.js
sed -i.bak 's~<body[^>]*>~&<script src="env-config.js"></script>~' /usr/share/nginx/html/index.html

# Execute the provided command
exec "$@"
