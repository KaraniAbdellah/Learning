-- Join
CREATE TABLE students (
    student_id NUMBER PRIMARY KEY,
    name VARCHAR2(50)
);
INSERT INTO students VALUES (1, 'Alice');
INSERT INTO students VALUES (2, 'Bob');
INSERT INTO students VALUES (3, 'Charlie');

CREATE TABLE grades (
    grade_id NUMBER PRIMARY KEY,
    student_id NUMBER,
    course VARCHAR2(50),
    grade CHAR(1),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);
INSERT INTO grades VALUES (1, 1, 'Math', 'A');
INSERT INTO grades VALUES (2, 2, 'Math', 'B');
INSERT INTO grades VALUES (3, 1, 'Science', 'B');
INSERT INTO grades VALUES (4, 1, 'Science', 'C');




----------------------------
SELECT * FROM students;
SELECT * FROM grades;

-- Inner Join
SELECT * FROM students INNER JOIN grades ON students.student_id = grades.student_id;
SELECT * FROM students INNER JOIN grades using(student_id);


-- Extern Join [Full Join, Left join, Right join]
SELECT * FROM students FULL JOIN grades USING(student_id);
SELECT * FROM students LEFT JOIN grades USING(student_id);
SELECT * FROM students RIGHT JOIN grades USING(student_id);

-- Auto-Join & Cross Join
SELECT * FROM students st1 FULL JOIN students st2 ON st1.student_id = st2.student_id;
SELECT * FROM students CROSS JOIN grades;
