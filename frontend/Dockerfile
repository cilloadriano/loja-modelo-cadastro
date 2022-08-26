FROM nginx:stable-alpine


WORKDIR /usr/share/nginx/html

COPY dist/products/ .
COPY default.conf /etc/nginx/conf.d/

EXPOSE 80


