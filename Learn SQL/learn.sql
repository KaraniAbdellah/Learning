
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
Alter table employees -- for change something
Add phone_number varchar(20); -- add new column (phone_number)
rename column phone_number to email; -- rename column

modify column email varchar(100); -- change the type of email column
modify email text after age; -- change the position
modify email int first; -- make email first column

drop column email; -- drop email column
select * from employees;






















