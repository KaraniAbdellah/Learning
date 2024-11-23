-- FOREIGN KEYS
/*
	FOREIGN KEYS: is like primary key but in another table
		--> we can link between two tables
        --> we can access to table 2 by table 1
	
    case: if there is not client_id = 1 --> you can not insert
		in commands a client_id = 1. (must be exit in clients table)
	
    you can delete || update parent table (clients)
*/

create table clients(
	client_id int primary key auto_increment,
    client_name varchar(30)
);
insert into clients(client_name) values ("ali");
create table commands(
	command_id int primary key auto_increment,
    command_quantity int,
    client_id int,
    foreign key(client_id) references clients (client_id)
);

alter table commands
drop foreign key commands_ibfk_1; -- drop a foreign key
alter table commands
add constraint fk_client_id foreign key 
(client_id) references clients(client_id);

insert into commands(command_quantity, client_id) values(10, 2);
delete from clients where client_id = 2; -- error
select * from clients;
select * from commands;

















