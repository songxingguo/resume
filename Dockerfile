FROM node:20.12.1
COPY ./dist /project/resume
WORKDIR /project/resume
EXPOSE 3000