FROM eclipse-temurin:21-jre
WORKDIR /app
COPY komga/build/libs/komga-*.jar /app/komga.jar
EXPOSE 25600
ENTRYPOINT ["java", "-jar", "/app/komga.jar"]
