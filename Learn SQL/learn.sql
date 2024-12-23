
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

select employees.first_name, students.name from employees, students; 
select employees.first_name, students.name from employees join students; 



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





-- | Nested queries - Sub queries | - |Any , All |
/*
	Nested queries || Sub queries: is querie inside another querie
	nested query (inside query) runs first After the outer query
    
    ALL is used to compare a value with all results from the inner query
    ANY is for comparing with any one result
*/

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    last_name VARCHAR(100)
);
INSERT INTO students (name, last_name) VALUES
('John', 'Doe'),
('Jane', 'Smith'),
('Michael', 'Johnson');

select * from employees where id = (select max(id) from employees);
select * from employees where id > (select avg(id) from employees);

-- get the ids bigger then all students id
select * from employees where id > all (select id from students);

-- get the ids bigger then any students id
select * from employees where id > any (select id from students);





-- Group BY
/*
	GROUP BY in SQL groups rows with the same values in specified columns.
	It's used to apply aggregate functions like COUNT() or SUM() to each group.
	
    inseated of using WHERE use HAVING
*/

create table transactions(
	transaction_id int primary key auto_increment, 
    amount float,
    customer_id int, 
    order_date date
);

select * from transactions order by order_date asc;
select sum(amount), order_date from transactions group by order_date;
select count(amount), order_date 
from transactions
group by order_date
having count(amount) > 2;




-- ROLLUP
/*
	ROLLUP: extension of GROUP BY
    used to add extra rows
        
    WITH ROLLUP
*/
select * from transactions;
select sum(amount), order_date from transactions 
group by order_date with rollup; -- add row for sum of amount rows

select count(amount), order_date from transactions 
group by order_date with rollup; 





-- On Delete
/*
	On delete Set Null: When Foriegn Key Deleted --> repelace it by NULL
	On delete Set Cascade: When Foriegn Key Deleted --> delete row
    
    we are going to delete form customers
		- will replace foreign key by null in transactions
        - delete the rows from cusomters
*/

-- create tables
create table customers (
	customer_id int primary key, 
    first_name varchar(20),
    last_name varchar(20)
);
create table transactions(
	tran_id int primary key auto_increment,
    customer_id int, 
    amount float,
	foreign key(customer_id) references customers (customer_id)
    on delete set null -- if we delete foreign key will replaced by null
);

insert into customers(customer_id, first_name, last_name) values(3, "toto", "mohamed");
insert into transactions(customer_id, amount) values(3, 303);
delete from customers where customer_id = 2; -- can not delete ---> this is forein key

-- add clause ON DELETE SET NULL 
alter table transactions add constraint fk_customer_id
foreign key(customer_id) references customers (customer_id)
on delete set null;

-- drop foriegn key
alter table transactions drop foreign key fk_customer_id;

-- delete from cusomters
delete from customers where customer_id = 3; -- foreign will replace by null in cusomters
delete from transactions where customer_id = 3; -- no problem here

select * from customers;
select * from transactions;





-- STORED PROCEDURES
/*
	you can save query if you are using query a lot of time
*/

-- Example without argument
delimiter $$
create procedure get_customers()
begin 
	select * from transactions;
end $$
delimiter ;
drop procedure get_customers;
call get_customers();

-- Example with argument
delimiter $$
create procedure get_transaction(in number_column int, in id int)
begin 
	select * from transactions where customer_id = id limit number_column ;
end $$
delimiter ;
call get_transaction(2, 2);







-- Triggers
/*
	Trigger = When an event happens, do something
    use trigger: check data, handles errors, auditing tables
*/

-- create trigger that update tran_id
create trigger before_tran_id_update
before update on  transactions -- before (update, delete, insert, ...)
for each row
set new.amount = new.tran_id * 2;
show triggers;
update transactions set tran_id = 4 where tran_id = 2; -- amount has been change


-- create trigger that update tran_id in insertion new row
create trigger update_amount
before insert on transactions
for each row
set new.tran_id = new.amount + 2;
insert into transactions values(1, 1, 9); -- must see tran_id changed
select * from transactions;
drop trigger before_tran_id_update;


-- create table "expenses"
create table expenses(
	expenses_id int primary key auto_increment,
    expenses_name varchar(20),
    expenses_total decimal(10, 2) -- 10 degits & .2
);
insert into expenses values
	(1, "salaries", 0),
	(2, "supplies", 0),
    (3, "taxes", 0)
;


-- create trigger that update expenses_total when I delete amount
create trigger after_amount_delete 
after delete on transactions
for each row 
update expenses
set expenses_total = expenses_total - old.amount
where expenses_total = 0;

delete from transactions where amount = 102; -- expenses_total must change
select * from expenses;
select * from transactions;


-- create trigger that if change amount expenses wil be also change
create trigger update_after_delete
after update on transactions
for each row
update expenses
set expenses_total = 10 where new.amount != old.amount;

update transactions set amount = 10 where amount = 8; -- all expenses_total = 10 
select * from transactions;
select * from expenses;


















 















