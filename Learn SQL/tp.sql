-- TP 1
/*
	must data "csv" format
*/


/*
create database tp_test;
use tp_test;
create table data_tp(
	date_naissance varchar(20),
    SPV double, 
    GLD double, 
    AMAZON double,
    GOOGLE double,
    KPTI double,
    GILD double,
    MPC double
);
*/


--  create ETUDIANT table
/*
use tp_test;
create table ETUDIANT(
	CodeEtudiant int primary key,
    Sexe ENUM('F','M'),
    NomEtudiant varchar(20),
    PrenomEtudian varchar(20),
    DatNEtudiant date,
    Email text,
    Ville text
);
insert into ETUDIANT values (1, "M", "Mourtada", "Hassan", "2000/05/15", "hassan@gmail.com", "Béni Mellal"),
(2, "M", "Mourtada", "Hassan", "2000/05/15", "hassan@gmail.com", "Béni Mellal"),
(3, "M", "Mourtada", "Hassan", "2000/05/15", "hassan@gmail.com", "Béni Mellal"),
(4, "M", "Mourtada", "Hassan", "2000/05/15", "hassan@gmail.com", "Béni Mellal"),
(5, "M", "Mourtada", "Hassan", "2000/05/15", "hassan@gmail.com", "Béni Mellal");
select * from ETUDIANT;
*/


--  create MATIERE table
/*
create table MATIERE(
	CodeMat int primary key,
    LibelleMat int,
    CoeffMat int
);
insert into MATIERE values (1, 223, 12.90),
(2, 223, 12.90),
(3, 223, 12.90);
select * from MATIERE;
*/


--  create Evaluation table
/*
create table Evaluation(
	CodeEtudiant int,
    CodeMat int,
    DateEvaluation date,
    Note float
);
insert into Evaluation values 
	(1, 223, "2021/12/20", 1029.90),
	(2, 223, "2021/12/20", 1029.90),
	(3, 223, "2021/12/20", 1029.90)
;
select * from Evaluation;
*/


