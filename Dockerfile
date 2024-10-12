# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
# COPY package*.json ./
COPY backend/package*.json ./backend/
COPY client/package*.json ./client/


# Copy source files
COPY . .


# Build the backend
WORKDIR /app/backend
RUN npm install && npm run build

# Build the client
WORKDIR /app/client
RUN npm install && npm run build

# Runtime stage
FROM node:20-alpine

WORKDIR /app

# Copy built artifacts and necessary files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/backend/package*.json ./backend/
COPY --from=builder /app/backend/dist ./backend/dist
COPY --from=builder /app/client/dist ./client/dist

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 3000
WORKDIR /app/backend
# Start the application
CMD ["npm", "start"]