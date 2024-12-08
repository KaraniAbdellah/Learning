-- Triggers
/*
	Trigger = When an event happens, do something
    use trigger: check data, handles errors, auditing tables
    
    in this example i am using trigger if
	update "tran_id" i would update also the "amount"
		--> "tran_id & amount are columns"
*/

-- create trigger
/*
create trigger before_tran_id_update
before update on  transactions -- before (update, delete, insert, ...)
for each row
set new.amount = new.tran_id * 2;
show triggers;
*/

update transactions set tran_id = 4 where tran_id = 2; -- amount = 8
select * from transactions;

/*
create trigger update_amount
before insert on transactions
for each row
set new.tran_id = new.amount + 2;
*/








