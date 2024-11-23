/*
create table workers (
	first_name varchar(20) unique,
    last_name varchar(10) not null,
    id int default 10,
    salary float default 120,
    constraint salary_checker check (salary > 100)
);
*/

insert into workers(first_name, last_name, salary) values ("s", null, 12);

select * from workers;


