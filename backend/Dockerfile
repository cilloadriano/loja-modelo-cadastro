FROM amazoncorretto:11

ARG PROFILE
ARG ADDITIONAL_OPTS


ENV PROFILE=${PROFILE}
ENV ADDITIONAL_OPTS=${ADDITIONAL_OPTS}

WORKDIR /opt/spring_boot

COPY target/backend-*.jar .
COPY scripts/startup.sh .

RUN chmod 755 startup.sh

EXPOSE 5005
EXPOSE 8080

CMD ["/bin/sh", "-c", "/opt/spring_boot/startup.sh"]
