FROM nginx:latest
LABEL maintainer "xg.song@qq.com"
ADD . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html/
RUN chown -R daemon:daemon * && chmod -R 755 *
EXPOSE 80