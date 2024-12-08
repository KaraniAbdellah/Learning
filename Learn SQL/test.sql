-- Triggers
/*
	Trigger = When an event happens, do something
    use trigger: check data, handles errors, auditing tables
    
    in this example i am using trigger if
	update "tran_id" i would update also the "amount"
		--> "tran_id & amount are columns"
*/

-- create trigger that update tran_id
/*
create trigger before_tran_id_update
before update on  transactions -- before (update, delete, insert, ...)
for each row
set new.amount = new.tran_id * 2;
show triggers;
update transactions set tran_id = 4 where tran_id = 2; -- amount has been change
*/


-- create trigger that update tran_id in insertion new row
/*
create trigger update_amount
before insert on transactions
for each row
set new.tran_id = new.amount + 2;
insert into transactions values(1, 1, 9); -- must see tran_id changed
select * from transactions;
drop trigger before_tran_id_update;
*/

-- create table "expenses"
/*
create table expenses(
	expenses_id int primary key auto_increment,
    expenses_name varchar(20),
    expenses_total decimal(10, 2) -- 10 degits & .2
);
insert into expenses values
	(1, "salaries", 0),
	(2, "supplies", 0),
    (3, "taxes", 0)
;
*/

-- create trigger that update expenses_total when I delete amount
/*
create trigger after_amount_delete 
after delete on transactions
for each row 
update expenses
set expenses_total = expenses_total - old.amount
where expenses_total = 0;

delete from transactions where amount = 102; -- expenses_total must change
select * from expenses;
select * from transactions;
*/















