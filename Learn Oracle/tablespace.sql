-- Each DB contain tablespaces
-- Each tablespaces contain DataFiles
-- Each DataFiles contain segement (Object Schema: table, index, ..)
-- Each segement contain extent and extent contain blocs

-- Select All DataFiles That We Have
SELECT file_name FROM dba_data_files; -- /opt/oracle/oradata/XE/XEPDB1/system01.dbf

-- Create Table Space
CREATE TABLESPACE app_data 
DATAFILE '/opt/oracle/oradata/XE/XEPDB1/app_data.dbf' 
SIZE 20M AUTOEXTEND ON NEXT 10M MAXSIZE 30M;

-- See The Tables Spaces
SELECT tablespace_name FROM dba_tablespaces;
SELECT tablespace_name FROM dba_tablespaces WHERE tablespace_name = 'APP_DATA';

--===========================
-- 1. Create a Tablespace ITB_TRAN (initial file size is 10M and it can grow by 10M once the space is used), to store the primary key index.

CREATE TABLESPACE ITB_TRAN DATAFILE 
'/opt/oracle/oradata/XE/XEPDB1/ITB_TRAN.dbf'
SIZE 10M AUTOEXTEND ON NEXT 10M
EXTENT MANAGEMENT LOCAL AUTOALLOCATE 
SEGMENT SPACE MANAGEMENT AUTO;

SELECT tablespace_name FROM dba_tablespaces WHERE tablespace_name = 'ITB_TRAN';

--===========================
-- 2. Create a Tablespace DTB_TRAN (initial file size is 10M and it can grow by 10M once the space is used), to store the schema of the Categories table.

CREATE TABLESPACE DTB_TRAN 
DATAFILE '/opt/oracle/oradata/XE/XEPDB1/DTB_TRAN.dbf'
SIZE 10M AUTOEXTEND ON NEXT 10M
EXTENT MANAGEMENT LOCAL AUTOALLOCATE
SEGMENT SPACE MANAGEMENT AUTO;

SELECT tablespace_name FROM dba_tablespaces WHERE tablespace_name = 'DTB_TRAN';

--===========================
-- 3. Below, complete the creation code for the CATEGORIES table using the created tablespaces.

CREATE TABLE CATEGORIES (
	CODE_CATEGORIE NUMBER(6) NOT NULL,
	NOM_CATEGORIE VARCHAR2(25) NOT NULL,
	DESCRIPTION VARCHAR2(100) NOT NULL,
	CONSTRAINT CATEGORIES_PK PRIMARY KEY (CODE_CATEGORIE)
	USING INDEX TABLESPACE ITB_TRAN
) TABLESPACE DTB_TRAN;

SELECT * FROM CATEGORIES;
--===========================

-- Add the following instructions when creating the table:
-- Primary key on the column no_commande and use it as index in the index Tablespace created in step 1.

CREATE TABLE COMMANDES (
	NO_COMMANDE NUMBER(6) NOT NULL,
	CODE_CLIENT CHAR(5) NOT NULL,
	NO_EMPLOYE NUMBER(6) NOT NULL,
	DATE_COMMANDE DATE NOT NULL,
	DATE_ENVOI DATE,
	PORT NUMBER(8,2),
	LIVREE NUMBER(1) DEFAULT 0 NOT NULL,
	ACQUITEE NUMBER(1) DEFAULT 0 NOT NULL,
	ANNULEE NUMBER(1) DEFAULT 0 NOT NULL
);

-- Add the following instructions when creating the table:
-- 1. Primary key on the column no_commande and use it as index in the index Tablespace created in step 1:

SELECT * FROM COMMANDES;
ALTER TABLE COMMANDES DROP CONSTRAINT CON_NO_COMMANDE;
ALTER TABLE COMMANDES ADD CONSTRAINT CON_NO_COMMANDE PRIMARY KEY (NO_COMMANDE) USING INDEX TABLESPACE ITB_TRAN;

-- 2. Create a column ANNEE to extract the year from DATE_COMMANDE:
ALTER TABLE COMMANDES ADD ANNEE GENERATED ALWAYS AS (EXTRACT(YEAR FROM DATE_COMMANDE));

-- 3. Create a column TRIMESTRE to extract the quarter from DATE_COMMANDE:
ALTER TABLE COMMANDES 
ADD TRIMESTRE GENERATED ALWAYS AS (TO_NUMBER(TO_CHAR(DATE_COMMANDE, 'Q'))) VIRTUAL;

-- 4. Create a column Mois to extract the month from DATE_COMMANDE:
ALTER TABLE COMMANDES ADD Mois GENERATED ALWAYS AS (EXTRACT(MONTH FROM DATE_COMMANDE));
SELECT * FROM COMMANDES;

-- 5. Save the table schema in Tablespace DTB_TRAN:
ALTER TABLE COMMANDES MOVE TABLESPACE DTB_TRAN;
SELECT tablespace_name FROM dba_tablespaces;









