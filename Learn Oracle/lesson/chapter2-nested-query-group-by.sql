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
-------------------------------------------------------------------------------------------------

-- Group By and Having
SELECT std_name, sum(std_money) FROM student GROUP BY std_name HAVING sum(STD_MONEY)= 100;

-- Nested Query
SELECT * FROM student WHERE std_id = (SELECT max(std_id) FROM student); -- Operators
SELECT * FROM student WHERE std_id NOT IN(SELECT student_id FROM students); -- NOT IN
SELECT NULL FROM student WHERE std_id > 2; -- Three student --> Thre NULL


-- Nested Query [ALL, ANY, EXITST]
SELECT name FROM students WHERE NOT EXISTS 
(SELECT NULL FROM grades WHERE grades.student_id = students.student_id); -- Find Student that does NOT have a note
	
SELECT * FROM students WHERE student_id > ANY(SELECT std_id FROM student);
SELECT * FROM students WHERE student_id > ALL(SELECT std_id FROM student WHERE std_id = 1);

