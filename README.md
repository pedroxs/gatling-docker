# gatling-docker
Run [Gatling](http://gatling.io/) over [Docker](https://www.docker.com/) with [InfluxDB](https://www.influxdata.com/) and [Grafana](https://grafana.com/)
No pre-configuration is necessary. As soon as you run the cluster, you will end up a configured benchmark environment.

### pre-reqs
To run this demo you need:
- docker
- docker-compose

### How to run
From root directory execute the following:

```
docker-compose up -d
```

Or, in order to see the distributed effect of the gatling tester, you can scale your tester node as follow:

```
docker-compose up --scale gatling-runner=4 -d
```

After a few seconds access Grafana site at http://localhost:3000/dashboard/db/sample-service
or replace the ip with the correct one.

Default user and password are: `admin/admin`

You should be presented with a screen that looks like this:

![graphic](docs/Sample_Graphic.png)

### How to stop
Destroy the whole stack: `docker-compose down`
Stop and erase all containers and volumes: `docker-compose down -v`

### Mess around

The Gatling script being run is located at [./gatling/simulations/sample/SampleService.scala](gatling/simulations/sample/SampleService.scala)

It tests a service written in Node.js locate at [./sample-service/hello-http.js](sample-service/hello-http.js), very simple and responds with random errors so there is no need to stress to much the system to get a nice graph.

Data from Gatling is stored on InfluxDB using the graphite protocol. Grafana is used to present this data in fancy graphics on real time.

[./docker-compose.yml](docker-compose.yml) has a description on how to start and link all of this together.
