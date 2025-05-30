
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

-- Group By and Having
SELECT std_name, sum(std_money) FROM student GROUP BY std_name HAVING sum(STD_MONEY)= 100;


-- More On Grouping [GROUPING SETS, ROLLUP, PIVOT, UNPIVOT]
SELECT * FROM grades;
SELECT STUDENT_ID, course FROM grades GROUP BY (student_id, course);
SELECT student_id, course FROM grades GROUP BY GROUPING SETS ((student_id, course));
SELECT std_money FROM student GROUP BY ROLLUP (std_money);




