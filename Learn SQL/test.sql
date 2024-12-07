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
*/


select * from transactions;










