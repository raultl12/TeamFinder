FROM baleyko/deno:latest

WORKDIR /app

LABEL maintainer="raultlopez@correo.ugr.es"

LABEL version="1.0"

RUN mkdir -p /app/test

COPY deno.json deno.lock ./

RUN apt-get update && apt-get install unzip -y && deno upgrade && deno task install_vr && deno cache --unstable https://deno.land/std@0.207.0/assert/mod.ts

RUN deno cache --lock=deno.lock --reload deno.json

ENV PATH="/root/.deno/bin/bin:$PATH"

WORKDIR /app/test

ENTRYPOINT ["vr", "run", "test"]