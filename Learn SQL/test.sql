-- UNION
/*
	combine the result of two or more select statments
*/

/*
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
select * from income;
select * from expenses;
*/

-- continues lessons & start revesing

select * from income union select * from expenses;











