FROM baleyko/deno:latest

WORKDIR /app/test

LABEL maintainer="raultlopez@correo.ugr.es"

COPY deno.json deno.lock velociraptor.ts ./

RUN apt-get update && apt-get install unzip -y && deno upgrade && deno task install_vr && deno cache --unstable https://deno.land/std@0.207.0/assert/mod.ts

RUN deno cache --lock=deno.lock --reload --lock-write deno.json

ENV PATH="/root/.deno/bin/bin:$PATH"

ENTRYPOINT ["vr", "run", "test"]