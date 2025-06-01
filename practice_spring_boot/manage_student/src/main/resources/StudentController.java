package app.com.manage_student.controller;


import app.com.manage_student.model.Student;
import app.com.manage_student.services.StudentServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController // make this class controller
@RequestMapping("/api/student")

public class StudentController {

    @Autowired
    private StudentServiceImplementation std_imp_service;

    @GetMapping("getStudents")
    public List<Student> getStudents() {
        // Get Student from Services
        return this.std_imp_service.getStudent();
    }

    @GetMapping("getStudent/{id}")
    public Student getStudentById(@PathVariable int id) {
        return new Student(id,"a@gmail.com", "ahmed", "10202");
    }

    @PostMapping("postStudent")
    @ResponseStatus(HttpStatus.CREATED) // When the method runs successfully, the response will return HTTP status 201 Created.
    public ResponseEntity<Student> postStudent(@RequestBody Student student) {
        System.out.println("The Student Id is: " + student.getStudent_id());
        return new ResponseEntity<>(student , HttpStatus.CREATED);
    }

    @PutMapping("updateStudent/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable int id) {
        Student updatedStudent = new Student(id, "a@gmail.com", "abdellah", "102993");
        return new ResponseEntity<>(updatedStudent, HttpStatus.valueOf(200));
    }

    @DeleteMapping("deleteStudent/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable int id, @RequestBody Student student) {
        System.out.println("The Student Received is:" + student.getStudent_id());
        return ResponseEntity.ok(student);
    }
}


