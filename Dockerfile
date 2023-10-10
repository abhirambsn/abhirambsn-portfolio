FROM node:latest as builder

ARG spaceid
ARG accesstoken
ENV VITE_CONTENTFUL_ACCESS_TOKEN=${accesstoken}
ENV VITE_CONTENTFUL_SPACE_ID=${spaceid}
WORKDIR /app
COPY ./app/package*.json ./
RUN npm install
COPY ./app .
RUN npm run build

FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
