-- | Nested queries - Sub queries | - |Any , All |
/*
	Nested queries || Sub queries: is querie inside another querie
	nested query (inside query) runs first After the outer query
*/
/*
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    last_name VARCHAR(100)
);
INSERT INTO students (name, last_name) VALUES
('John', 'Doe'),
('Jane', 'Smith'),
('Michael', 'Johnson');
*/


-- select * from employees where id = (select max(id) from employees);
-- select * from employees where id > (select avg(id) from employees);

select * from students;
select * from employees;
select students.name from students join employees where employees.id = students.id;


