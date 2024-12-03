-- | Nested queries - Sub queries | - |Any , All |
/*
	Nested queries || Sub queries: is querie inside another querie
	nested query (inside query) runs first After the outer query
    
    ALL is used to compare a value with all results from the inner query
    ANY is for comparing with any one result
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

select * from employees;
select * from students;


-- select * from employees where id = (select max(id) from employees);
-- select * from employees where id > (select avg(id) from employees);

-- get the ids biger then all students id
select * from employees where id > all (select id from students);









