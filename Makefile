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
	npm install

# Target: start
# Description: Start the development server
start:
	npm start

# Target: build
# Description: Build the production-ready app
build:
	npm run build

# Target: test
# Description: Run tests
test:
	npm test

# Target: clean
# Description: Clean generated files
clean:
	rm -rf node_modules
	rm -rf build