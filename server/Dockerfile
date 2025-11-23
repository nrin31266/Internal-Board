# ========= Stage 1: Build (Java 21) =========
FROM maven:3.9.9-eclipse-temurin-21 AS builder

WORKDIR /app

# Copy pom trước để cache dependency
COPY pom.xml .
RUN mvn -q -e -DskipTests dependency:go-offline

# Copy source và build
COPY src ./src
RUN mvn -q -DskipTests clean package


# ========= Stage 2: Run (Java 21 JRE) =========
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copy jar từ stage build
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
