FROM grafana/grafana:4.6.3
MAINTAINER ugurarpaci
ADD grafana.ini /etc/grafana/grafana.ini
ADD gatling-dashboard.json /var/lib/grafana/dashboards/gatling-dashboard.json
ADD influxdatasource.json  /etc/grafana/datasources/influxdatasource.json
ADD run.sh /run.sh

# Workaround until Grafana 5 - Cannot import datasource as a file !!!
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
ENTRYPOINT ["/bin/bash"]
CMD ["/docker-entrypoint.sh"]
