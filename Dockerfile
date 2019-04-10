FROM node:8
RUN mkdir /opt/app-root/
WORKDIR /opt/app-root/
COPY . .
RUN rm -rf node_modules
RUN npm install -d
RUN npm install --save-dev babel-core babel-preset-env

CMD ["npm","run","dev"]
