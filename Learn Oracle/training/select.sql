-- Select [basics]
SELECT * FROM student;
SELECT DISTINCT std_id FROM student;
SELECT ALL std_id FROM student;
SELECT std_money, std_money * 10 AS bonus  FROM student;
UPDATE student SET std_id = 5 WHERE std_id = 1 AND std_name = 'kawtar';
SELECT * FROM student ORDER BY std_id DESC  NULLS FIRST;


-- Select [fetch, ties]
SELECT * FROM student FETCH FIRST 3 ROWS ONLY;
SELECT * FROM student ORDER BY std_id DESC FETCH FIRST 3 ROWS WITH TIES;


-- Select with [||, where, in]
SELECT 'your name is: ' || std_name FROM student;
SELECT std_name FROM student WHERE std_name like 'k%'; -- use LIKE instead OF =
SELECT * FROM student WHERE std_name IN ('abdellah', 'ahmed');
SELECT * FROM student WHERE std_id BETWEEN 1 AND 2;
SELECT count(DISTINCT std_money) FROM student; -- we count std_money WITHOUT duplication

