# Makefile for React app

# Define phony targets (targets that don't represent files)
.PHONY: install start build test clean

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