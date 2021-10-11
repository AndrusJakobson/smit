FROM node:lts

WORKDIR /opt/app

COPY package*.json /tmp/
RUN cd /tmp && npm install --no-package-lock
RUN cp -a /tmp/node_modules /opt/app/

CMD ["npm", "run", "dev"]
