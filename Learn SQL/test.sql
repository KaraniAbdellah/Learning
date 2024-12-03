-- | Nested queries - Sub queries | - |Any , All |
/*
	Nested queries || Sub queries: is querie inside another querie
	nested query (inside query) runs first
*/

select * from employees where id = (select max(id) from employees);


