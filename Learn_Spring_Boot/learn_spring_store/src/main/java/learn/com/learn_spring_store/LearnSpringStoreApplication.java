package learn.com.learn_spring_store;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = {"controllers"})

public class LearnSpringStoreApplication {
	public static void main(String[] args) {
		SpringApplication.run(LearnSpringStoreApplication.class, args);
		System.out.println("Hello World");
	}
}

