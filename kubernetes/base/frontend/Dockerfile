# 1. Build aşaması
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# 2. Serve aşaması
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build ./build
CMD ["serve", "-s", "build", "-l", "80"]
