# RUN APP

### Using docker:

BUILD IMAGE:

```bash
docker build -t augustodelg-appclima .
```

RUN CONTAINER:
```bash
docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true augustodelg-appclima
```
