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













