# Define phony targets (targets that don't represent files)
.PHONY: up down clean-docker install start build test clean

# Target: up
# Description: Pull latest images and start Docker containers in detached mode
up:
	docker-compose -f docker-compose.yaml pull
	docker-compose -f docker-compose.yaml build --no-cache
	docker-compose -f docker-compose.yaml up -d

# Target: down
# Description: Stop and remove Docker containers
down:
	docker-compose -f docker-compose.yaml down

# Makefile for cleaning up Docker resources
# Description: Clean up unused Docker resources
clean-docker:
	docker system prune -a
	docker volume prune
	docker network prune

# Target: install
# Description: Install dependencies
install:
	yarn install

# Clean all node_modules, yarn.lock, package-lock.json, and .vite files, then refresh dependencies
clean_refresh:
	yarn cache clean
	find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
	find . -name "build" -type d -prune -exec rm -rf '{}' +
	find . -name "dist" -type d -prune -exec rm -rf '{}' +
	find . -name "yarn.lock" -type f -exec rm -f '{}' +
	find . -name "package-lock.json" -type f -exec rm -f '{}' +
	find . -name ".vite" -type d -prune -exec rm -rf '{}' +
	yarn install --force

# Target: start
# Description: Start the Vite development server
start:
	yarn dev

# Target: build
# Description: Build the production-ready Vite app
build:
	yarn build

# Target: test
# Description: Run tests
test:
	yarn test