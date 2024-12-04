-- Group BY
/*
	GROUP BY in SQL groups rows with the same values in specified columns.
	It's used to apply aggregate functions like COUNT() or SUM() to each group.
	
    inseated of using WHERE use HAVING
*/

create table transactions(
	transaction_id int primary key auto_increment, 
    amount float,
    customer_id int, 
    order_date date
);

select * from transactions order by order_date asc;
select sum(amount), order_date from transactions group by order_date;
select count(amount), order_date 
from transactions
group by order_date
having count(amount) > 2;









