FROM node:10-alpine as builder

COPY package.json package-lock.json ./

RUN npm install && mkdir /frontend && mv ./node_modules ./frontend

WORKDIR /frontend

COPY . .

RUN npm run ng build -- --prod


FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY ./nginx/mime.types /etc/nginx/mime.types

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /frontend/dist /usr/share/nginx/html

EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]