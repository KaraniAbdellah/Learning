-- start TDS


select * from employees;
select * from students;
select * from student_scores;

select * from employees join students join student_scores where id = 1;

select * from employees where referal_id > 10 or (last_name = "ahmed" and referal_id = 3);

