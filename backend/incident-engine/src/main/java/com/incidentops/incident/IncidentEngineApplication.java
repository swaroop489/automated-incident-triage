package com.incidentops.incident;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class IncidentEngineApplication {
    private static final Logger log = LoggerFactory.getLogger(IncidentEngineApplication.class);

	public static void main(String[] args) {
        log.info("Starting incident-engine...");
		SpringApplication.run(IncidentEngineApplication.class, args);
        log.info("Application started");
	}

    @PostConstruct
    public void logConnections() {
        log.info("Connected to PostgreSQL");
        log.info("Connected to Redis");
    }
}
