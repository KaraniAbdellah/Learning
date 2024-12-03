
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




-- Constraint: Primary Keys
/*
	Primay Key = Not NULL + Unique
    in table we can have just one column
*/

create table transactions (
	transaction_id int primary key,
    amount float default 0
);
alter table transactions
add constraint primary key(email);




-- Constraint: Auto Increment
/*
	in each row we are going to increment the column value
*/

create table transactions(
	transactions_id int primary key auto_increment,
    transactions_name text
);

insert into transactions(transactions_name) values ("XXX");
select * from transactions;





-- FOREIGN KEYS
/*
	FOREIGN KEYS: is like primary key but in another table
		--> we can link between two tables
        --> we can access to table 2 by table 1
	
    case: if there is not client_id = 1 --> you can not insert
		in commands a client_id = 1. (must be exit in clients table)
	
    you can delete || update parent table (clients)
*/

create table clients(
	client_id int primary key auto_increment,
    client_name varchar(30)
);
insert into clients(client_name) values ("ali");
create table commands(
	command_id int primary key auto_increment,
    command_quantity int,
    client_id int,
    foreign key(client_id) references clients (client_id)
);

alter table commands
drop foreign key commands_ibfk_1; -- drop a foreign key
alter table commands
add constraint fk_client_id foreign key 
(client_id) references clients(client_id);

insert into commands(command_quantity, client_id) values(10, 2);
delete from clients where client_id = 2; -- error
select * from clients;
select * from commands;





-- JOINS
/*
	Inner Join: Shows only matching rows from both tables.
	Left Join: Shows all rows from the left table and matches from the right. If no match, shows empty (null).
	Right Join: Shows all rows from the right table and matches from the left. If no match, shows empty (null).
		--> "between the tables must exit a commun clomun (foreign key)"
	
    in the exemple: 
		left table is commands
		right table in clients
	
    inner join: get just the matches column (client_id)
    left join: like join but if there data in commands we will get it and others will be null
    right join: like join but if there date in clients we will get it and others will be null
*/

select * from commands inner join clients on commands.client_id = clients.client_id;
-- right table: clients
-- left table: commands
select * from commands left join clients on commands.client_id = clients.client_id;
-- right table: commandss
-- left table: clients
select * from commands right join clients on commands.client_id = clients.client_id;
select * from commands;
select * from clients;





-- Functions
/*
	used for do a task when we could:
		check out: https://www.w3schools.com/mysql/mysql_ref_functions.asp
	
    some functions:
		count(cloumName): calculate how many rows in column
*/

select count(client_id) from clients where first_name = "abdellah"; -- 2
select count(client_id) as count from clients where first_name = "abdellah"; -- count = 2
select max(client_id) from clients; -- 5
select min(client_id) from clients; -- 1
select avg(client_id) from clients; -- 3.2500
select sum(client_id) from clients; -- 13
select concat(first_name, " ", last_name) from clients; -- concate first_name & last_name




-- AND OR NOT BTEWEEN IN
/*
	AND: all conditions must true
    OR: just one condition must be true
    NOT: condition must be false
	BETWEEN: Checks if a value is within a range 
	IN: Checks if a value matches any value in a list
*/

-- alter table clients
-- add column email varchar(100);
-- update clients set email = "a@g.c" where email is null;
select * from clients where first_name = "abdellah" and client_id = 3;
select * from clients where client_id is not null or email = "a@g.c";
select * from clients where not brithday = "1111-11-11";
select * from clients where client_id between 1 and 3;
select * from clients where email in ("a@g.c", null);





-- Wild Cards (% _)
/*
	used to substitue one or more characters in a string 
    %: reprensente any number of character
    _: one random letter
    
    "replaces = with LIKE operator"
*/

select * from employees where first_name like "a%"; -- begin with a & any nbr of char
select * from employees where first_name like "a%e";
select * from employees where last_name like "_a%";
select * from employees where last_name like "____"; -- last_name with 4 digit





-- Order By
/*
	used to sort or order table by specific column
    ASC: ascendent order
    DESC: descendent order
*/
select * from employees order by last_name DESC;
select * from employees order by last_name ASC, first_name ASC; 




-- LIMIT CLAUSE
/*
	used to limit the number of records
    used to display a large data on pages (pagination)
    
    3, 1: skip the first row and get the next three rows.
    2, 3:  skip the first two rows and get the next three rows.
    x, y: skip x rows and get next y rows.
*/

select * from employees limit 1; -- get just the first employees
select * from employees order by first_name asc limit 2; 
select * from employees limit 2, 3;





-- UNION
/*
	- combine the result of two or more select statments
    - must be a commun columun between the two tables
    - must have same number of columns
    - UNION doesn't allowed duplicated
*/

create table income(
	amount double,
	income_name varchar(25) not null
);
insert into income values
	(1000, "orders"),
    (12332, "services"),
    (23000, "merchandise");

create table expenses (
	amount double,
	expenses_name varchar(25) not null
);
insert into expenses values
	(-1000, "taxs")	,
    (-12332, "repairs"),
    (-23000, "wages");

select * from expenses union select * from income;
select * from expenses union all select * from income; -- union with duplicated




-- SELF JOINS
/*
	- join the same table 
*/
select emp1.first_name, emp1.last_name,
		emp2.first_name, emp2.last_name
from employees as emp1 
inner join employees as emp2 
on emp1.referal_id = emp2.id;




-- VIEWS
/*
	- a virtual table in DB
    - filieds of view are filieds from one or more table
    - views aceept all previos operations
    - any changes of reel table will be reflect to virtual table
*/

create view clients as select first_name, last_name from employees; -- create virtual table
insert into employees values (8, "ahmed", "ali", 10);
select * from clients;
drop view clients; -- drop view





-- INDEXES(BTree Data Strucutre)
/*
	work with principe of B-trees (not BST)
	indexes for quiclky access to data
    for primary and foreign key has index by default
		names is "PRIMARY"
	do not do the index in column that modifier a lot time
*/

select  * from employees;
create index index_emp on employees(id, first_name); -- create index for column (id, first_name)
show indexes from employees; -- show indexes for column
drop index index_emp on employees; -- drop index
select * from employees where first_name = "abdellah"; -- fast search 







 















