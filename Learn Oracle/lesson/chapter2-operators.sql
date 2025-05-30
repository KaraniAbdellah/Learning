-- Operators[UNION, UNION ALL, MINUS, INTERSECT]
SELECT * FROM students;
SELECT * FROM grades;
SELECT student_id FROM students UNION SELECT student_id FROM grades;
SELECT student_id FROM students UNION ALL SELECT student_id FROM grades;
SELECT student_id FROM students MINUS SELECT student_id FROM grades;
SELECT student_id FROM students INTERSECT SELECT student_id FROM grades;

