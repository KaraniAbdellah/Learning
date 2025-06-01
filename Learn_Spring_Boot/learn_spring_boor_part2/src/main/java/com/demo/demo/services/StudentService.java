package com.demo.demo.services;

import com.demo.demo.model.Student;
import com.demo.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
public class StudentService {

    @Autowired
    StudentRepository student_repo;

    public List<Student> getStudents() {
        return this.student_repo.findAll();
    }

    public Student getStudentById(int id) {
        Optional<Student> student = this.student_repo.findById(id);
        return student.orElse(null);
    }

    public Student createStudent(Student student) {
        return this.student_repo.save(student);
    }

}
