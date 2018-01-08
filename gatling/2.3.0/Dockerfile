FROM java:8u111
MAINTAINER ugurarpaci
ADD gatling-2.3.0.tar.gz /opt/app/java/gatling/

ENV GATLING_HOME /opt/app/java/gatling
ENV PATH="$PATH:/opt/app/java/gatling/bin"
ADD gatling.conf /opt/app/java/gatling/conf/gatling.conf

ENTRYPOINT ["gatling.sh"]
