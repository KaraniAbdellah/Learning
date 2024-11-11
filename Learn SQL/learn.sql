
-- Introduction
/*
    SQL: Structured Query Language
    SQL used for relational database
    SQL used for (CREATE, Retrieve, Update, Delete)
    SQL is a language based on requests (requêtes)
    
    MYSQL: Database Management System (DMS)
    MYSQL is not asenstive key
*/



-- CREATE DB & USE IT & DROP & ALTER
/*
	USE my_db;
		for use it || click to DB and choose "set as a default shema"
	ALTER DATABASE my_db READ ONLY = 1;
		for make database read ony (no modification)
	ALTER:
		used for changes or updates the structure of a database or table
*/
CREATE DATABASE my_db; -- create a DB
USE my_db; -- use DB
DROP DATABASE my_db; -- remove DB
ALTER DATABASE my_db READ ONLY = 1; -- 0 for allow changes like (DROP DB)



-- Create TABLES
/*
	Data Types: int, date, varchar(nbrChar), text, time, ...
    for each changes in table must say:
		Alter table table_name;
*/
create table employees(
	employee_id int,
    first_name varchar(20),
    last_name varchar(20),
    hire_date date
); -- create a table just with columns

SELECT * FROM employees; -- select a table
RENAME table employees to workers; -- rename a table
DROP table employees; -- remove a table



-- Modification(add, rename, drop) Tables
/*
	rename, add, modify
*/

alter table employee -- for make changes
add email varchar(40); -- add new column
rename column email to phone_number; -- rename column name
modify column phone_number text; -- change column type
modify first_name text after id; -- change the position
modify phone_number text first;
drop column last_name; -- drop column
select * from employee;




















