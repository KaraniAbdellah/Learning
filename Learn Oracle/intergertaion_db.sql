-- SELECT & Alias
CREATE TABLE student(
	std_std NUMBER,
	std_name varchar(25) UNIQUE,
	std_email varchar(255) UNIQUE
);

INSERT INTO student VALUES (1, 'abdellah', 'a@gmail.com');
INSERT INTO student VALUES (2, 'ahmed', 'a.h@gmail.com');
INSERT INTO student VALUES (3, 'hasan', 'h@gmail.com');
INSERT INTO student VALUES (4, 'mariem', 'm@gmail.com');
INSERT INTO student VALUES (1, 'kawtar', 'k@gmail.com');
ALTER TABLE student RENAME FROM std_std TO std_id;

SELECT ALL * FROM student;
SELECT UNIQUE(std_std) std_std, std_name FROM student; -- do NOT allow duplicates in colone 'std_std'
SELECT DISTINCT * FROM student; -- do NOT allow diplicates IN ALL COLUMN
SELECT std_email AS student_email FROM student; -- RENAME COLUMN IN display

------------------

-- Expression & NULL Value
ALTER TABLE student ADD (std_money number);
UPDATE student SET std_money = 10 WHERE std_money = null;

SELECT std_money*10, STD_MONEY*10 AS bonus FROM student;
SELECT * FROM student;

--------------

-- Ordonnancement [we can use clause order by] && FETCH
-- Fetch first and fetch next work in same way
SELECT * FROM student ORDER BY std_std DESC NULLS first;
SELECT * FROM student FETCH FIRST 10 ROWS ONLY;
SELECT * FROM student ORDER BY std_std FETCH NEXT 10 ROWS WITH TIES;
