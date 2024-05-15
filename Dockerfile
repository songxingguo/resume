FROM nginx:latest
LABEL maintainer "xg.song@qq.com"
ADD . /usr/share/nginx/html
EXPOSE 1234