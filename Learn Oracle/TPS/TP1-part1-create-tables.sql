-- 1. Create a table
CREATE TABLE joueur (
    name varchar2(100),
    weight NUMBER,
);


-- 2. Display information about the table
select table_name, iot_name, iot_type, external,
partitioned, temporary, cluster_name
from user_tables;


-- Create Table Bricks && display in user_tables
CREATE TABLE Bricks (
    color varchar2(100),
    forme varchar2(100)
);
INSERT INTO Bricks values('Red', 'Form1');
SELECT * FROM Bricks;
select table_name from user_tables where table_name = 'BRICKS';


-- 3. Organization of tables [heap, ...] --> Default Is Heap
create table jouet_heap (
    name varchar2(100)
) organization heap;

select table_name, iot_name, iot_type, external,
partitioned, temporary, cluster_name
from user_tables
where table_name = 'JOUET_HEAP';



-- 4. Tables organized by index
create table jouet_iot (
    id integer primary key,
    name varchar2(100)
) organization index;
select table_name, iot_name, iot_type, external,
    partitioned, temporary, cluster_name
    from user_tables where table_name = 'JOUET_IOT';



-- 5. External tables [Wen Need File CSV that have Data]
---- Create Local directory
CREATE OR REPLACE DIRECTORY toy_dir AS '/home/abdellah/snap/dbeaver-ce/366';
---- Create An External Table
create table toys_ext (
    name varchar2(100)
) organization external (
    default directory toy_dir
    location ('EMPLOYEES_202505031238.csv')
);
SELECT * FROM toys_ext;


-- 6. Temporary tables  
-- Global temporary tables
CREATE GLOBAL TEMPORARY TABLE person (
    id NUMBER PRIMARY KEY,
    name varchar2(200)
) ON COMMIT DELETE ROWS;
SELECT * FROM person;

-- Private temporary tables
CREATE private TEMPORARY TABLE ora$ptt_etab (
    id NUMBER
);
