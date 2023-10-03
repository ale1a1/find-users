FROM node:18.18.0-alpine3.18

RUN mkdir -p /opt/find-users
WORKDIR /opt/find-users

COPY  ./server/package.json .

RUN yarn install --frozen-lockfile --production

COPY ./server .

EXPOSE 3001

ENTRYPOINT [ "yarn" ]
CMD ["start:prod"]