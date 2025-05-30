package app.com.manage_student;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class ManageStudentApplication {
	public static void main(String[] args) {
		SpringApplication.run(ManageStudentApplication.class, args);
	}
}
