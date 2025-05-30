package app.com.manage_student.services;

import app.com.manage_student.repositry.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl {
    @Autowired
    private StudentRepo s_repo; //
}
