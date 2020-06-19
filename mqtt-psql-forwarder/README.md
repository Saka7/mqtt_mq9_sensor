# MQTT to PSQL forwarder

## Build and run

### Set-up .env

```sh
cp .env.example .env

# Fill values
```

### Build mqtt to timescale forwarder

```sh
docker-compose build
```

### Start docker-compose

```sh
docker-compose up -d
```

