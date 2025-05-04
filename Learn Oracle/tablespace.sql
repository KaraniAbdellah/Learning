-- Each DB contain tablespaces
-- Each tablespaces contain DataFiles
-- Each DataFiles contain segement (Object Schema: table, index, ..)
-- Each segement contain extent and extent contain blocs


-- Select Al DataFiles That We Have
SELECT file_name FROM dba_data_files; -- /opt/oracle/oradata/XE/XEPDB1/system01.dbf

-- Create Table Space
CREATE TABLESPACE app_data 
DATAFILE '/opt/oracle/oradata/XE/XEPDB1/app_data.dbf' 
SIZE 20M AUTOEXTEND ON NEXT 10M MAXSIZE 30M;


-- See The Tables Spaces
SELECT tablespace_name FROM dba_tablespaces;
SELECT tablespace_name FROM dba_tablespaces WHERE tablespace_name = 'APP_DATA';





