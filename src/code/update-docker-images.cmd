cd microfrontend-1
docker build -t jorianroelofsen13/microfrontend-1-image:latest .

cd ../microfrontend-2
docker build -t jorianroelofsen13/microfrontend-2-image:latest .

cd ../microfrontend-3
docker build -t jorianroelofsen13/microfrontend-3-image:latest .

docker image push jorianroelofsen13/microfrontend-1-image:latest

docker image push jorianroelofsen13/microfrontend-2-image:latest

docker image push jorianroelofsen13/microfrontend-3-image:latest
