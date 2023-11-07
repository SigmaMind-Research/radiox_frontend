# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the entire Vue.js application to the container
COPY . .

# Build the Vue.js application (this depends on how your Vue.js app is set up)
RUN npm run build

# Expose a port if your application requires it
# This is optional since we're using --host
# EXPOSE 8080

# Start the application with the --host option
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0"]
