-- Auto Increment
/*
	in each row we are going to increment the column value
*/

create table transactions(
	transactions_id int primary key auto_increment,
    transactions_name text
);

insert into transactions(transactions_name) values ("XXX");
select * from transactions;

