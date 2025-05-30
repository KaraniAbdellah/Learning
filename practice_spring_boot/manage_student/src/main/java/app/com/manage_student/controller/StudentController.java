package app.com.manage_student.controller;


import app.com.manage_student.model.Student;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController // make this class controller
@RequestMapping("/api/student")

public class StudentController {

    @GetMapping("getStudents")
    public ResponseEntity<List<Student>> getStudents() {
        System.out.println("Request Come to Get Student End Point");
        List<Student> students = new ArrayList<>();
        students.add(new Student(1, "a@gmail.com", "ahmed", "10202"));
        return ResponseEntity.ok(students);
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


