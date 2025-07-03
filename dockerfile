# Stage 1: Build
FROM node:20.10.0 AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./  # or yarn.lock if using Yarn

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build Next.js app
RUN npm run build

# Stage 2: Production image
FROM node:20.10.0

# Set working directory
WORKDIR /app

# Copy only the build output and dependencies from builder
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/public /app/public
COPY --from=builder /app/package.json /app/package.json

# Expose the port Next.js runs on
EXPOSE 3000

# Run the Next.js server in production mode
CMD ["npm", "start"]