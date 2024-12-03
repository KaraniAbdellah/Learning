-- INDEX(BTree Data Strucutre)
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


