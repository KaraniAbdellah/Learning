-- JOINS
/*
	Inner Join: Shows only matching rows from both tables.
	Left Join: Shows all rows from the left table and matches from the right. If no match, shows empty (null).
	Right Join: Shows all rows from the right table and matches from the left. If no match, shows empty (null).
		--> "between the tables must exit a commun clomun (foreign key)"
	
    in the exemple: 
		left table is commands
		right table in clients
	
    inner join: get just the matches column (client_id)
    left join: like join but if there data in commands we will get it and others will be null
    right join: like join but if there date in clients we will get it and others will be null
*/


select * from commands inner join clients on commands.client_id = clients.client_id;
select * from commands left join clients on commands.client_id = clients.client_id;
select * from commands right join clients on commands.client_id = clients.client_id;
select * from commands;
select * from clients;



