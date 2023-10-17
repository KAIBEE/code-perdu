FROM node:lts as builder-frontend
WORKDIR /usr/src/app
COPY front ./
RUN npm install && npm run build

FROM node:lts as builder-backend
WORKDIR /usr/src/app
COPY back ./
RUN npm install pm2@latest -g && npm install && npm run build

FROM nginx:alpine
RUN apk add --no-cache nodejs && mkdir -p /etc/nginx/logs && chown -R nginx: /var/cache/nginx /etc/nginx/
COPY --chown=nginx:nginx --from=builder-frontend /usr/src/app/dist /usr/share/nginx/html
COPY --chown=nginx:nginx --from=builder-backend /usr/src/app/dist /api
COPY --chown=nginx:nginx --from=builder-backend /usr/src/app/node_modules /api/node_modules
COPY --chown=nginx:nginx entrypoint.sh /entrypoint.sh
COPY --chown=nginx:nginx nginx.conf /etc/nginx/nginx.conf
ENV NODE_ENV production
# Pour éviter de faire des réécriture nginx complexe, on dit que le back réponds sur /api en root path
ENV API_PREFIX=/api
ENV MAIL_USER=codeperdu@kaibee.fr
ENV MAIL_PASSWORD=LostCode2023!?


USER nginx
EXPOSE 80
ENTRYPOINT ["sh", "/entrypoint.sh"]