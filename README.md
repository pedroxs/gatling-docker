# gatling-docker
Run [Gatling](http://gatling.io/) over [Docker](https://www.docker.com/) with [InfluxDB](https://www.influxdata.com/) and [Grafana](https://grafana.com/)

### pre-reqs
To run this demo you need:
- docker
- docker-machine
- docker-compose

### How to run
From root directory execute the following:

```
eval $(docker-machine env default)
docker-compose up -d
```

Check your docker-machine ip `docker-machine ip default` which usually is 192.168.99.100
After a few seconds access Grafana site at http://192.168.99.100:3000/dashboard/db/sample-service
or replace the ip with the correct one.

Default user and password are: `admin/admin`

You should be presented with a screen that looks like this:

![graphic](docs/Sample_Graphic.png)

### How to stop
Just stop and keep containers: `docker-compose stop`

Stop and erase all containers and volumes: `docker-compose down -v`

### Mess around

The Gatling script being run is located at [./gatling/simulations/sample/SampleService.scala](gatling/simulations/sample/SampleService.scala)

It tests a service written in Node.js locate at [./sample-service/hello-http.js](sample-service/hello-http.js), very simple and responds with random errors so there is no need to stress to much the system to get a nice graph.

Data from Gatling is stored on InfluxDB using the graphite protocol. Grafana is used to present this data in fancy graphics on real time.

[./docker-compose.yml](docker-compose.yml) has a description on how to start and link all of this together.

### TODO

- [ ] Save Grafana configuration  as files (currently I save the DB binary)
- [ ] Find out how to create templates for graphite protocol
- [ ] Bump all versions to latest stable releases
