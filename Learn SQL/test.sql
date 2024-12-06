-- On Delete
/*
	On delete Set Null: When Foriegn Key Deleted --> repelace it by NULL
	On delete Set Cascade: When Foriegn Key Deleted --> delete row
    
    we are going to delete form customers
		- will replace foreign key by null in transactions
        - delete the rows from cusomters
*/

-- create tables
create table customers (
	customer_id int primary key, 
    first_name varchar(20),
    last_name varchar(20)
);
create table transactions(
	tran_id int primary key auto_increment,
    customer_id int, 
    amount float,
	foreign key(customer_id) references customers (customer_id)
    on delete set null -- if we delete foreign key will replaced by null
);

insert into customers(customer_id, first_name, last_name) values(3, "toto", "mohamed");
insert into transactions(customer_id, amount) values(3, 303);
delete from customers where customer_id = 2; -- can not delete ---> this is forein key

-- add clause ON DELETE SET NULL 
alter table transactions add constraint fk_customer_id
foreign key(customer_id) references customers (customer_id)
on delete set null;

-- drop foriegn key
alter table transactions drop foreign key fk_customer_id;

-- delete from cusomters
delete from customers where customer_id = 3; -- foreign will replace by null in cusomters
delete from transactions where customer_id = 3; -- no problem here

select * from customers;
select * from transactions;












