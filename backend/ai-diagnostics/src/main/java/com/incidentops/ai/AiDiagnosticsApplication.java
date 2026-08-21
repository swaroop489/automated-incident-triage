package com.incidentops.ai;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class AiDiagnosticsApplication {
    private static final Logger log = LoggerFactory.getLogger(AiDiagnosticsApplication.class);

	public static void main(String[] args) {
        log.info("Starting ai-diagnostics...");
		SpringApplication.run(AiDiagnosticsApplication.class, args);
        log.info("Application started");
	}

    @PostConstruct
    public void logConnections() {
        log.info("Connected to PostgreSQL");
    }
}
