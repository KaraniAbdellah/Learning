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










