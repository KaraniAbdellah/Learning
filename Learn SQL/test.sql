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





