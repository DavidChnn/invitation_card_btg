# Menggunakan Nginx sebagai web server
FROM nginx:latest

# Salin file proyek ke dalam direktori default Nginx
COPY . /usr/share/nginx/html

# Ekspos port 80 untuk akses web
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]