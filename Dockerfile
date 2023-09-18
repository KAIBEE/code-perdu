FROM node:lts as builder-frontend
WORKDIR /usr/src/app
COPY front ./
RUN npm install && npm run build

FROM node:lts as builder-backend
WORKDIR /usr/src/app
COPY back ./
RUN npm install && npm run build

FROM nginx:alpine
RUN apk add --no-cache nodejs && mkdir -p /etc/nginx/logs && chown -R nginx: /var/cache/nginx /etc/nginx/
COPY --chown=nginx:nginx --from=builder-frontend /usr/src/app/dist /usr/share/nginx/html
COPY --chown=nginx:nginx --from=builder-backend /usr/src/app/dist /api
COPY --chown=nginx:nginx --from=builder-backend /usr/src/app/node_modules /api/node_modules
COPY --chown=nginx:nginx entrypoint.sh /entrypoint.sh
COPY --chown=nginx:nginx nginx.conf /etc/nginx/nginx.conf
ENV API_PREFIX=/api

USER nginx
ENTRYPOINT ["sh", "/entrypoint.sh"]