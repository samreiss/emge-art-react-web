[![Build](https://github.com/samreiss/emge-art-react-web/actions/workflows/build-on-all-platforms.yml/badge.svg)](https://github.com/samreiss/emge-art-react-web/actions/workflows/build-on-all-platforms.yml)
[![Docker Hub](https://github.com/samreiss/emge-art-react-web/actions/workflows/docker_hub.yml/badge.svg)](https://github.com/samreiss/emge-art-react-web/actions/workflows/docker_hub.yml)
![Last Deployment](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/samreiss/emge-art-react-web/main/last_successful_deployment.json&label=Last%20Deployment&color=brightgreen)

# Emge Art React Web

This project is a website built for Mrs. Nicole Reiss, an art teacher at Emge Elementary in O'Fallon, Missouri. The website serves as a platform for Mrs. Reiss to showcase her work, share information about her teaching philosophy, and provide resources for her students and the school community.

## About Mrs. Nicole Reiss

Mrs. Nicole Reiss has been teaching at Emge Elementary since the 2003-2004 school year. She instructs students in Kindergarten through 5th grade, focusing on art as a process and introducing art history, various artists, and styles to her students. Mrs. Reiss holds a Bachelor of Science in Art Education from the University of Missouri - Columbia and a Master of Arts in Art Education from Maryville University of Saint Louis.

## Features

- Learn about Mrs. Nicole Reiss's teaching philosophy and approach to elementary art education.
- Explore different artists and art styles covered in Mrs. Reiss's curriculum.
- View student artwork and projects created under Mrs. Reiss's guidance.
- Access resources for students, including art project ideas and inspiration.
- Information about Emge Elementary's Art Club, sponsored by Mrs. Reiss, for 4th and 5th-grade students.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `yarn install` to install dependencies.
4. Start the development server by running `yarn dev`.
5. Open [http://localhost:5173](http://localhost:5173) in your web browser to view the website. (Note: Port 5173 is the default for Vite)

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser. (Note: Port 5173 is the default for Vite)

### `yarn build`

Builds the app for production to the `dist` folder.

## Vite

This project uses Vite as the build tool. Vite is a fast and modern build tool that leverages native ES modules and provides a lightning-fast development server. It is designed to improve the development experience with features like hot module replacement (HMR) and optimized builds.

### Key Features of Vite

- **Instant Server Start**: Vite starts the development server instantly, even for large projects.
- **Lightning-Fast HMR**: Hot Module Replacement (HMR) updates modules in the browser instantly without a full reload.
- **Optimized Builds**: Vite uses Rollup for production builds, ensuring optimized and efficient output.

## Dockerfile Details

This application has been dockerized, meaning it has been packaged into a Docker container for easy deployment and portability. The Dockerfile includes two main steps:

### Build Step

In this step, the Node.js image is used to build the frontend application. The necessary dependencies are installed, and the application is built using yarn. The resulting build artifacts are stored in the `/var/www/clientapp_frontend/dist/` directory.

### Release Step with NGINX and Alpine Linux

In the release step, the NGINX image based on Alpine Linux is utilized to efficiently serve the frontend application. Alpine Linux is a lightweight Linux distribution, making it suitable for containerized environments due to its small size and efficient resource usage. NGINX, a high-performance web server, is configured to serve the built frontend artifacts. The NGINX configuration is tailored to suit the requirements of the frontend application, and the default NGINX configuration is removed to avoid conflicts.

## Docker Deployment

To deploy this application using Docker, follow these steps:

1. Ensure you have Docker installed on your system.

2. Create a `docker-compose.yaml` file with the following content:

   ```yaml
   version: '3.8'

   services:
     # React Application
     web:
       container_name: emge-art-react-web
       image: samreiss/emge-art-react-web:latest
       ports:
         - "3010:80"
       environment:
         - REACT_APP_LOGGING_ENABLED=true
       restart: always
   ```

Note: You can change the port number 3010 to any desired port. The application can be accessed via localhost:<chosen_port>.

If you prefer using the pre-built Docker Compose, then use the provided `docker-compose.yaml` file to build and run the Docker containers. Ensure you have Docker installed on your system and then run:

```bash
docker-compose -f docker-compose.yaml up -d
```

This command will start the Docker containers defined in the docker-compose.yaml file. The application will be accessible at [http://localhost:3010](http://localhost:3010) by default, or at the port you specified in the docker-compose.yaml file.

## Docker Hub

You can find the Docker image for this project on Docker Hub: [https://hub.docker.com/r/samreiss/emge-art-react-web](https://hub.docker.com/r/samreiss/emge-art-react-web)