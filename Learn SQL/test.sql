-- ROLLUP
/*
	ROLLUP: extension of GROUP BY
    used to add extra rows
    
    WITH ROLLUP
*/
select * from transactions;
select sum(amount), order_date from transactions 
group by order_date with rollup; -- add row for sum of amount rows

select count(amount), order_date from transactions 
group by order_date with rollup; 






