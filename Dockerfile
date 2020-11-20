ARG ARCH=
FROM --platform=$BUILDPLATFORM golang:1.15.5-alpine3.12 AS build

RUN apk add --update --no-cache python2 npm make cmake g++ && npm install yarn -g

WORKDIR /build
ADD package.json yarn.lock ./
RUN yarn install --frozen-lockfile --ignore-platform --ignore-engines --quiet

ADD . .
RUN yarn build

FROM alpine
COPY --from=build /build/build /data
