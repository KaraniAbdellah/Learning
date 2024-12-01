
-- select * from employees;
-- select * from employees as emp1 left join employees as emp2 on emp1.referal_id = emp2.id;


-- create view worker_names as select first_name from employees;
-- select * from worker_names union all select first_name from employees inner join employees on employees.first_name;

-- select * from worker_names;
-- select * from employees;
-- select * from worker_names as w inner join employees as e on e.first_name = w.first_name;
select first_name
from worker_names
union
select e1.first_name
from employees e1
inner join employees as e2 on e2.first_name = e1.first_name;

