package com.man_student.man_student;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class ManStudentApplication {
	public static void main(String[] args) {
		SpringApplication.run(ManStudentApplication.class, args);
		System.out.println("Application Running");
	}
}



