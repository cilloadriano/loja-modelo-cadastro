FROM flyway/flyway:8-alpine

ADD --chown=flyway:flyway src/sql/*.sql /flyway/sql/

ENTRYPOINT ["flyway"]
CMD ["-?"]
