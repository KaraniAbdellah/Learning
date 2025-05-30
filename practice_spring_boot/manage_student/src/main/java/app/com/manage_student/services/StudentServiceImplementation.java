package app.com.manage_student.services;

import app.com.manage_student.model.Student;
import app.com.manage_student.repositry.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;

public class StudentServiceImplementation implements  StudentServiceInterface {

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

    @Override
    public Student createStudent(Student student) {
        return new Student(1, "1@gmail.com", "abdellah", "19993");
    }



}
