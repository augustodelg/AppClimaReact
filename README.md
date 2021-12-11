## RUN APP

Using docker:
`docker build -t augustodelg-appclima` .

`docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true ps-container:dev`
