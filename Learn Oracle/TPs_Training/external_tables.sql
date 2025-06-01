CREATE OR REPLACE DIRECTORY my_dir AS '/opt/oracle/external_files';
-- GRANT READ, WRITE ON DIRECTORY my_dir TO SYSTEM; // if your are using ABDELLAH Schema
-- run: docker exec -it oracle-xe bash
-- cp filies to external_files
--------------------- OR ---------------------
-- docker cp /path/to/file.data oracle-xe:/opt/oracle/external_files/


-- why we use /opt/oracle --> this path that oracle database run


CREATE TABLE IMP_CATEGORIES  (
   CODE_CATEGORIE       NUMBER(6)     ,
   NOM_CATEGORIE        VARCHAR2(25)  ,
   DESCRIPTION          VARCHAR2(100) )
ORGANIZATION EXTERNAL 
	( TYPE ORACLE_DATAPUMP DEFAULT 
	DIRECTORY my_dir LOCATION ( 'CATEGORIES.DAT'));


SELECT * FROM IMP_CATEGORIES;



