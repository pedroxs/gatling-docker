FROM influxdb:1.2.0-alpine
MAINTAINER ugurarpaci
ADD influxdb.conf /etc/influxdb/influxdb.conf
ENTRYPOINT ["/entrypoint.sh"]
CMD ["influxd"]
