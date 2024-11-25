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



