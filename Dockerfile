# =========================================
# ETAPA 1 - BUILD DE REACT
# =========================================

FROM node:20-alpine AS build

WORKDIR /app

# Copiar dependencias
COPY react/package.json react/package-lock.json ./

# Instalar dependencias
RUN npm ci

# Copiar aplicación React
COPY react/ ./

# Crear build de producción
RUN npm run build


# =========================================
# ETAPA 2 - NGINX
# =========================================

FROM nginx:alpine

# Configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar build React
COPY --from=build /app/dist /usr/share/nginx/html

# Puerto utilizado por Cloud Run
EXPOSE 8080

# Ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]