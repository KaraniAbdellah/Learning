package com.demo.demo.controllers;

import com.demo.demo.model.Student;
import com.demo.demo.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService student_service;

    @GetMapping("getStudent")
    public ResponseEntity<List<Student>> getStudents() {
        List<Student> students = student_service.getStudents();
        return new ResponseEntity<>(students, HttpStatusCode.valueOf(200));
    }

    @GetMapping("getStudent/{id}")
    public Student getStudentById(@RequestParam int id) {
        return this.student_service.getStudentById(id);
    }

    @PostMapping("createStudent")
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student createStudent = student_service.createStudent(student);
        return new ResponseEntity<Student>(createStudent, HttpStatusCode.valueOf(200));
    }



}





