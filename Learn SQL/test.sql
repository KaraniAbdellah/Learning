-- we want to join two tables employees & compte
-- we use join with select & can be used with others
/*
create table employees (
	id_emp int primary key auto_increment,
    first_name varchar(25) default "John",
    last_name varchar(25) default "Deo"
);
create table compte (
	id_cmp int primary key auto_increment,
    amount int default 0,
    id_emp_cmt int,
    foreign key (id_emp_cmt) references employees (id_emp)
);
*/
/*
-- insert some rows in employees & compte table
insert into employees(first_name, last_name) values
	("abdellah", "karani"),
    ("aziza", "khoumri"),
    ("khadija", "elmardi"),
    ("Ali", "Amine");
    
insert into compte(amount, id_emp_cmt) values(400.2, 1);
select * from compte;
select * from employees;
*/

-- right table: employees
-- left table: compte

-- select * from employees inner join compte on compte.id_emp_cmt = employees.id_emp;
select * from employees right join compte on compte.id_emp_cmt = employees.id_emp;


select * from employees;
select * from compte;



