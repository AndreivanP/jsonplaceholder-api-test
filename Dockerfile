FROM node:latest

ENV WORKDIR=/runner/

WORKDIR ${WORKDIR}

COPY . ${WORKDIR}/

RUN npm install