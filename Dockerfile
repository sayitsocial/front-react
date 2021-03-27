ARG ARCH=
FROM --platform=$BUILDPLATFORM alpine:latest as build

RUN apk add --update --no-cache python2 npm make cmake g++ && npm install yarn -g

WORKDIR /build
ADD package.json yarn.lock ./
RUN yarn install --frozen-lockfile --ignore-platform --ignore-engines --quiet


ADD . .
RUN yarn build

FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/build /usr/share/nginx/html
