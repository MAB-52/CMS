package com.consentiq;

import com.consentiq.config.ConsentMailProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableConfigurationProperties(ConsentMailProperties.class)
@EnableScheduling
public class ConsentIqApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ConsentIqApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(ConsentIqApplication.class, args);
		System.out.println("Running");
	}
}
