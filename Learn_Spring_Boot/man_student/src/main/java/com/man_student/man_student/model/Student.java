package com.man_student.man_student.model;


import jakarta.persistence.*;

@Entity
@Table

public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="student_id")
    private int student_id;
    @Column(name="student_name")
    private String student_name;
    @Column(name="student_email")
    private String student_email;
    @Column(name="student_password")
    private String student_password;

    public Student(int student_id, String student_name, String student_email, String student_password) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.student_email = student_email;
        this.student_password = student_password;
    }

    public Student() {}

    public int getStudent_id() {
        return student_id;
    }

    public void setStudent_id(int student_id) {
        this.student_id = student_id;
    }

    public String getStudent_name() {
        return student_name;
    }

    public void setStudent_name(String student_name) {
        this.student_name = student_name;
    }

    public String getStudent_email() {
        return student_email;
    }

    public void setStudent_email(String student_email) {
        this.student_email = student_email;
    }

    public String getStudent_password() {
        return student_password;
    }

    public void setStudent_password(String student_password) {
        this.student_password = student_password;
    }
}
