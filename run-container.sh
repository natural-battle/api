#! /bin/sh -e

NETWORK_NAME=battle-network
CONTAINER_NAME=battle-api

# docker network create $NETWORK_NAME

docker stop $CONTAINER_NAME || true
docker rm $CONTAINER_NAME || true

docker run \
       --restart always \
       --name $CONTAINER_NAME \
       --network $NETWORK_NAME \
       -v "$PWD":/opt/app \
       -w /opt/app \
       -p 10010:10010 \
       -d \
       -e NODE_ENV=production \
       node:8.4.0 \
       npm start

docker logs -f $CONTAINER_NAME
