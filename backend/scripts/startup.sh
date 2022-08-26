#!/bin/sh

java -jar \
    ${ADDITIONAL_OPTS} \
    -Dspring.profiles.active=${PROFILE} \
    backend-0.0.1-SNAPSHOT.jar 