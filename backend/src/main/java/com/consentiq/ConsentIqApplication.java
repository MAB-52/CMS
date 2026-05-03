package com.consentiq;

import com.consentiq.config.ConsentMailProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(ConsentMailProperties.class)
public class ConsentIqApplication {

    public static void main(String[] args) {
        SpringApplication.run(ConsentIqApplication.class, args);
        System.out.println("Running");
    }
}
