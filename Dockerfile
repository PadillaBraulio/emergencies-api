FROM node:8-jessie

ENV DATABASE_URL postgres://postgres:postgres@postgres:5432/dev_emergencies

ENV REDIS_HOST redis

WORKDIR /opt/emergencies
ADD . /opt/emergencies

RUN npm install && \
    npm install -g db-migrate
EXPOSE 3000

CMD npm start
