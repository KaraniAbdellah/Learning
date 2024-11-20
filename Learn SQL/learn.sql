
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





-- INSERT ROWS
/*
	insert into employee (columnNameToInsertData)
		values(), (), ..., ();
*/
insert into employee 
values  ("ahmed", "38383", 1030, "ahmed@gmail.com"),
		("abdellah", "229393", 122, "abdellah@gmail.com"),
		("omar", "103303", 122, "omar@gmail.com");

insert into employee(first_name, id)
values ("Ahmed", 110); -- insert just in (first_name, id)
insert into test
values(current_date(), current_time(), now());




-- Select
/*
	select: select the column
    Where: put condition in selecting
*/

select * from worker; -- select all column
select first_name, id from worker; -- select just first_name & id columns
select * from worker where first_name = "omar"; -- select column thae has name "omar"
select * from worker where id > 1;
select * from worker where id != 1;
select * from worker where id is NULL; -- use "is" not = 




-- Update & Delete
update worker set first_name = "abdellah" where email is null;
update worker set first_name = "abdellah", id = 100 where email is null;
update worker set first_name = "Aya"; -- all first_name column take "Aya"
update employee set last_name = "khaled" where first_name = "ahmed" or id = 2; 
update employee set last_name = "khaled" where first_name = "ahmed" and id = 2; 

delete from worker; -- delete all rows
delete from worker where id = 10; -- delete row that have id = 10
select * from worker;




-- Autocommit, commit, rollback
/*
	ROLLBACK only undoes changes not saved with COMMIT.
    set autocommit = off; -- all transaction will not save auto
		we need to change it manual
*/
set autocommit = off; -- all changes will no save automaticelly
commit; -- create a save point
rollback; -- back to save point

-- Example
delete from employee;
commit;
rollback;
select * from employee;




-- Contraint: Unique 
/*
	like cle primaire: exit just one in table
*/
create table products (
	id int,
	product_name varchar(20) Unique,
    price decimal(4, 2)
);
insert into products values (10, "phone", 10);
insert into products values (10, "phone", 10); -- error duplicate same entry 
select * from products;
-- another method
alter table products 
add constraint unique (price); -- make price a unique attribute
select * from products;




-- Contraint: Not NULL
/*
	make an attribute not null
*/
create table products(
	product_name varchar(25),
    product_id int not null
);
select * from products;
alter table products
modify product_id int not null;
insert into products(product_name) values("phone");
insert into products values("phone", null); -- column can not be null





-- Contraint: Check
/*
	use to limit what 
*/

create table clients(
	client_name varchar(25),
    client_id int,
    brithday date,
    constraint id_cheker check (client_id > 100)
);
alter table clients
add constraint id_checker check (client > 100);
insert into clients values ("abdellah", 1, "2005-01-18"); -- error client_id must be > 100
select * from clients;
-- delete check 
alter table clients
drop check id_cheker;
insert into clients values ("ahmed", 10, "2005-01-18"); -- correct




-- Constraint: Default
/*
	make a column take a default value
*/

create table products(
	product_id int,
    product_name text,
    product_price float default 0.00
);

alter table products
alter product_id set default 0;
insert into products(product_id, product_name)
values (1, "phone"); -- 1 phone 0

 















