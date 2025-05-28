package app.com.manage_student.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import javax.annotation.processing.Generated;

public class Student {
    @student_id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int student_id;
    private String student_name;
    private String student_email;
    private String student_password; // must be encrypted
}
