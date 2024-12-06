-- On Delete
/*
	On delete Set Null: When Foriegn Key Deleted --> repelace it by NULL
	On delete Set Cascade: When Foriegn Key Deleted --> delete row
*/

/*
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
);
*/

