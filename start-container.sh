#! /bin/sh -e

# docker network create battle-network

CONTAINER_NAME=battle-api

docker stop $CONTAINER_NAME || true
docker rm $CONTAINER_NAME || true

docker run \
       --restart always \
       --name $CONTAINER_NAME \
       --network battle-network \
       -v "$PWD":/opt/app \
       -w /opt/app \
       -p 10010:10010 \
       -d \
       -e NODE_ENV=production \
       node:8.1.2 \
       npm start

docker logs -f $CONTAINER_NAME
