/*
create table clients (
	first_name varchar(25),
    last_name varchar(25),
    client_id int primary key auto_increment,
    brithday date default "1111-11-11"
);
*/
/*
create table commands(
	command_id int unique primary key auto_increment,
    command_name varchar(25) not null,
    client_id int,
    foreign key(client_id) references clients(client_id)
);
*/

-- insert into clients(first_name, last_name) values("ali", "moahmed");
-- select * from clients;

insert into commands(command_name, client_id) values("T-shirt", 2);
select * from commands;







