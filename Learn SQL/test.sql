-- SELF JOINS
/*
	- join the same table 
*/
select emp1.first_name, emp1.last_name,
		emp2.first_name, emp2.last_name
from employees as emp1 
inner join 
employees as emp2 
on emp1.referal_id = emp2.id;












