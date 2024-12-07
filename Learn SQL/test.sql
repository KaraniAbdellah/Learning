-- STORED PROCEDURES
/*
	you can save query if you are using query a lot of time
*/

-- Example without argument
delimiter $$
create procedure get_customers()
begin 
	select * from transactions;
end $$
delimiter ;
drop procedure get_customers;
call get_customers();

-- Example with argument
delimiter $$
create procedure get_transaction(in number_column int, in id int)
begin 
	select * from transactions where customer_id = id limit number_column ;
end $$
delimiter ;
call get_transaction(2, 2);










