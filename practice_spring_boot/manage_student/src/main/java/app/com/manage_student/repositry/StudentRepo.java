package app.com.manage_student.repositry;

import app.com.manage_student.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

// This Interface Implement Entity with type of primary key
public interface StudentRepo extends JpaRepository<Student, Integer> {
    // JpaRepository has all methods like [insert, findById, ....]
}

