# ========= Stage 1: Build =========
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package.json để cache npm install
COPY package*.json ./
RUN npm install

# Copy toàn bộ source và build
COPY . .
RUN npm run build


# ========= Stage 2: Serve =========
FROM nginx:1.27-alpine

# Copy build output sang Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: nếu bạn cần config SPA (React Router) thì dùng nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Enable SPA + API proxy
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
