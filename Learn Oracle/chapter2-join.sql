-- Create Employees Table
CREATE TABLE employees (
    emp_id NUMBER PRIMARY KEY,
    emp_name VARCHAR2(50),
    department_id NUMBER
);
INSERT INTO employees (emp_id, emp_name, department_id) VALUES (1, 'John Smith', 101);
INSERT INTO employees (emp_id, emp_name, department_id) VALUES (2, 'Sarah Brown', 102);
INSERT INTO employees (emp_id, emp_name, department_id) VALUES (3, 'Michael Green', 101);
SELECT * FROM employees;

-- Create Department Table
CREATE TABLE departments (
    department_id NUMBER PRIMARY KEY,
    department_name VARCHAR2(50)
);
INSERT INTO departments (department_id, department_name) VALUES (101, 'HR');
INSERT INTO departments (department_id, department_name) VALUES (102, 'IT');
INSERT INTO departments (department_id, department_name) VALUES (103, 'Finance');

-- Inner Join
SELECT * FROM employees INNER JOIN departments ON employees.department_id = departments.department_id;
SELECT * FROM employees;
SELECT * FROM departments;

















