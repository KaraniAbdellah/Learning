-- Wild Cards (% _)
/*
	used to substitue one or more characters in a string 
    %: reprensente any number of character
    _: one random letter
    
    "replaces = with LIKE operator"
*/

select * from employees where first_name like "a%"; -- begin with a & any nbr of char
select * from employees where first_name like "a%e";
select * from employees where last_name like "_a%";
select * from employees where last_name like "____"; -- last_name with 4 digit

