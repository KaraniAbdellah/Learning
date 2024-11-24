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



