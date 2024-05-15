FROM node:20.12.1
COPY ./dist /project/resume
WORKDIR /project/resume
RUN npm install --registry=http://registry.npmmirror.com
EXPOSE 3000