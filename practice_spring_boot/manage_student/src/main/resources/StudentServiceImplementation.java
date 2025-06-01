package app.com.manage_student.services;

import app.com.manage_student.model.Student;
import app.com.manage_student.repositry.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class StudentServiceImplementation {

    // Old Method
    /*
        StudentRepo student_repo;
        public StudentServiceImplementation( StudentRepo student_repo) {
            this.student_repo = student_repo;
        }
    */

    // New Method
    @Autowired // Dependency Injection
    StudentRepo student_repo;

    public List<Student> getStudent() {
        return this.student_repo.findAll();
    }
}







