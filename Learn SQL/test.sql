create table Developpeur(
	NumDev varchar(20),
    NomDev int,
    AdrDev text, 
    EmailDev varchar(30),
    TelDev varchar(20)
);

create table Projet (
	NumProj varchar(20),
    TitreProj varchar(20),
    DateDeb Date,
    DateFin Date
);

create table Logiciel (
	CodeLog int,
    NomLog text,
    PrixLog float,
    NumProj varchar(20),
    foreign key(NumProj) references Projet (NumProj)
);

create table Realisation (
	NumProj varchar(20),
    NumDev varchar(20),
    foreign key(NumProj) references Projet (NumProj),
    foreign key(NumDev) references Developpeur (NumDev)
);




