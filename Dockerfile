FROM nginx:latest
LABEL maintainer "xg.song@qq.com"
ADD ./dist /usr/share/nginx/html
ADD ./nginx /etc/nginx/conf.d/
WORKDIR /usr/share/nginx/html/
RUN chown -R daemon:daemon * && chmod -R 755 *
EXPOSE 80