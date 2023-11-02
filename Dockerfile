FROM node:20.9.0

COPY ./src /src
COPY ./next.config.js /
COPY ./next-env.d.ts /
COPY ./package.json /
COPY ./tsconfig.json /
COPY ./yarn.lock /
WORKDIR /
RUN yarn install
RUN yarn build

EXPOSE 3000
CMD  yarn start