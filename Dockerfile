# ==========================================
# BUILD DE REACT
# ==========================================

FROM node:20-alpine AS build

WORKDIR /app

# Dependencias
COPY react/package.json .
COPY react/package-lock.json .

RUN npm ci

# Aplicación React
COPY react/ .

# Build de producción
RUN npm run build


# ==========================================
# NGINX
# ==========================================

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]