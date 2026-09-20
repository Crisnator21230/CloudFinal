FROM nginx:alpine

# Copiar la landing estática
COPY static/ /usr/share/nginx/html/

# Configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Puerto utilizado por Cloud Run
EXPOSE 8080

# Ejecutar Nginx en foreground
CMD ["nginx", "-g", "daemon off;"]