CREATE OR REPLACE DIRECTORY my_dir AS '/opt/oracle/external_files';
-- GRANT READ, WRITE ON DIRECTORY my_dir TO SYSTEM; // if your are using ABDELLAH Schema
-- run: docker exec -it oracle-xe bash
-- cp filies to external_files
--------------------- OR ---------------------
-- docker cp /path/to/file.data oracle-xe:/opt/oracle/external_files/



CREATE TABLE IMP_CATEGORIES  (
   CODE_CATEGORIE       NUMBER(6)     ,
   NOM_CATEGORIE        VARCHAR2(25)  ,
   DESCRIPTION          VARCHAR2(100) )
ORGANIZATION EXTERNAL 
	( TYPE ORACLE_DATAPUMP DEFAULT 
	DIRECTORY my_dir LOCATION ( 'CATEGORIES.DAT'));
SELECT * FROM IMP_CATEGORIES;



CREATE TABLE IMP_CLIENTS  (
   CODE_CLIENT          CHAR(5)       ,
   SOCIETE              NVARCHAR2(40) ,
   ADRESSE              NVARCHAR2(60) ,
   VILLE                VARCHAR2(30)  ,
   CODE_POSTAL          VARCHAR2(10)  ,
   PAYS                 VARCHAR2(15)  ,
   TELEPHONE            VARCHAR2(24)  ,
   FAX                  VARCHAR2(24))
ORGANIZATION EXTERNAL 
	( TYPE ORACLE_DATAPUMP DEFAULT 
	DIRECTORY my_dir LOCATION ( 'CLIENTS.DAT'));
SELECT * FROM IMP_CLIENTS;



CREATE TABLE IMP_COMMANDES  (
   NO_COMMANDE          NUMBER(6)     ,
   CODE_CLIENT          CHAR(5)       ,
   NO_EMPLOYE           NUMBER(6)     ,
   DATE_COMMANDE        DATE          ,
   DATE_ENVOI           DATE          ,
   PORT                 NUMBER(8,2)   ,
   LIVREE               NUMBER(1)     ,
   ACQUITEE             NUMBER(1)     ,
   ANNULEE              NUMBER(1)     ,
   ANNEE                NUMBER(4)     ,
   TRIMESTRE            NUMBER(1)     ,
   MOIS                 NUMBER(2))
ORGANIZATION EXTERNAL 
	( TYPE ORACLE_DATAPUMP DEFAULT 
	DIRECTORY my_dir LOCATION ( 'COMMANDES.DAT'));

SELECT * FROM IMP_COMMANDES;



CREATE TABLE IMP_DETAILS_COMMANDES  (
   NO_COMMANDE          NUMBER(6)     ,
   REF_PRODUIT          NUMBER(6)     ,
   PRIX_UNITAIRE        NUMBER(8,2)   ,
   QUANTITE             NUMBER(5)     ,
   REMISE               NUMBER(8,2)   ,
   RETOURNE             NUMBER(1)     ,
   ECHANGE              NUMBER(1)     )
ORGANIZATION EXTERNAL 
	( TYPE ORACLE_DATAPUMP DEFAULT 
	DIRECTORY my_dir LOCATION ( 'DETAILS_COMMANDES_2009.DAT'));

DROP TABLE IMP_DETAILS_COMMANDES;
SELECT * FROM IMP_DETAILS_COMMANDES;



CREATE TABLE IMP_EMPLOYES  (
   NO_EMPLOYE           NUMBER(6)     ,
   REND_COMPTE          NUMBER(6)     ,
   NOM                  NVARCHAR2(40) ,
   PRENOM               NVARCHAR2(30) ,
   FONCTION             VARCHAR2(30)  ,
   TITRE                VARCHAR2(5)   ,
   DATE_NAISSANCE       DATE          ,
   DATE_EMBAUCHE        DATE          ,
   SALAIRE              NUMBER(8,2)   ,
   COMMISSION           NUMBER(8,2)   ,
   PAYS                 VARCHAR(20)   ,
   REGION               VARCHAR(50))
ORGANIZATION EXTERNAL 
	( TYPE ORACLE_DATAPUMP DEFAULT 
	DIRECTORY my_dir LOCATION ( 'EMPLOYES.DAT'));

SELECT * FROM IMP_EMPLOYES;





CREATE TABLE IMP_FOURNISSEURS  (
   NO_FOURNISSEUR       NUMBER(6)     ,
   SOCIETE              NVARCHAR2(40) ,
   ADRESSE              NVARCHAR2(60) ,
   VILLE                VARCHAR2(30)  ,
   CODE_POSTAL          VARCHAR2(10)  ,
   PAYS                 VARCHAR2(15)  ,
   TELEPHONE            VARCHAR2(24)  ,
   FAX                  VARCHAR2(24))
ORGANIZATION EXTERNAL 
	( TYPE ORACLE_DATAPUMP DEFAULT 
	DIRECTORY my_dir LOCATION ( 'FOURNISSEURS.DAT'));

SELECT * FROM IMP_FOURNISSEURS;


CREATE TABLE IMP_PRODUITS  (
   REF_PRODUIT          NUMBER(6)     ,
   NOM_PRODUIT          NVARCHAR2(50) ,
   NO_FOURNISSEUR       NUMBER(6)     ,
   CODE_CATEGORIE       NUMBER(6)     ,
   QUANTITE             VARCHAR2(30)  ,
   PRIX_UNITAIRE        NUMBER(8,2)   ,
   UNITES_STOCK         NUMBER(5)     ,
   UNITES_COMMANDEES    NUMBER(5)     ,
   INDISPONIBLE         NUMBER(1)     )
ORGANIZATION EXTERNAL 
	( TYPE ORACLE_DATAPUMP DEFAULT 
	DIRECTORY my_dir LOCATION ( 'PRODUITS.DAT'));

SELECT * FROM IMP_PRODUITS;



CREATE TABLE IMP_DIM_TEMPS  (
   JOUR                 DATE          ,
   SEMAINE              NUMBER(2)     ,
   MOIS                 VARCHAR2(18)  ,
   MOIS_N               NUMBER(2)     ,
   TRIMESTRE            NUMBER(1)     ,
   ANNEE                NUMBER(4)     )
ORGANIZATION EXTERNAL
	( TYPE ORACLE_DATAPUMP DEFAULT 
	DIRECTORY my_dir LOCATION ( 'DIM_TEMPS.DAT'));

SELECT * FROM IMP_DIM_TEMPS;








