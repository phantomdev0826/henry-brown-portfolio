# Use an official Node.js runtime as the base image
FROM node:20.10.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock
COPY package.json package-lock.json* yarn.lock* ./

# Install dependencies
RUN npm install  # or 'yarn install'

# Copy the rest of your source code
COPY . .

# Build command (if needed)
# RUN npm run build

# Expose port if your app runs on a specific port
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]