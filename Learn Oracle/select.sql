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

-- With Ties Clause
CREATE TABLE myTable (
	ID NUMBER GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
	NAME Varchar2(20) NOT NULL,
	SALARY NUMBER NOT NULL
);
INSERT INTO mytable(NAME, SALARY) VALUES('Dhoni', 1600);
INSERT INTO mytable(NAME, SALARY) VALUES('Geeks', 1600);
INSERT INTO mytable(NAME, SALARY) VALUES('Ahmed', 1600);
INSERT INTO mytable(NAME, SALARY) VALUES('Waston', 1600);
INSERT INTO mytable(NAME, SALARY) VALUES('RR', 1600);
SELECT * FROM Mytable ORDER BY NAME ASC
FETCH NEXT 3 ROWS WITH Ties;

------------------

-- Concatenation [We Use || for conctinate columns, calculs, functions ... ]:
SELECT 'Votre Nom est ' || NAME FROM myTable;

------------------

-- Restriction (WHERE)
SELECT * FROM myTable WHERE ID = 1;
SELECT * FROM myTable WHERE ID <= 1;
SELECT * FROM myTable WHERE ID >= 1 AND NAME = 'RR';
SELECT * FROM myTable WHERE NOT ID = 1;
SELECT * FROM myTable WHERE NAME IN 'RR';
SELECT * FROM myTable WHERE ID BETWEEN 1 AND 3; -- 1 AND 3 included
SELECT * FROM myTable WHERE NAME IN ('Dhoni', 'RR'); -- NAME can be 'Dhoni' OR 'RR'
SELECT * FROM myTable WHERE NAME LIKE ('R_');
SELECT * FROM myTable WHERE NAME LIKE ('%D%', '_R');

------------------

-- Group Function
SELECT avg(salary), avg(salary) AS Salary_Averge FROM myTable;
SELECT avg(salary) AS Salary_Averge FROM myTable;
SELECT max(salary) AS Salary_Max FROM myTable;
SELECT min(salary) AS Salary_Min FROM myTable;
SELECT NAME, sum(salary) AS Salary_Sum FROM myTable GROUP BY NAME; -- IN This CASE We Should put GROUP BY
SELECT COUNT(*), count(DISTINCT NAME) FROM myTable;
