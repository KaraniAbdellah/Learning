CREATE TABLE Developpeur (
    NumDev VARCHAR(20) PRIMARY KEY,
    NomDev VARCHAR(50),
    AdrDev TEXT,
    EmailDev VARCHAR(30),
    TelDev VARCHAR(20)
);

CREATE TABLE Projet (
    NumProj VARCHAR(20) PRIMARY KEY,
    TitreProj VARCHAR(50),
    DateDeb DATE,
    DateFin DATE
);

CREATE TABLE Logiciel (
    CodeLog INT PRIMARY KEY,
    NomLog TEXT,
    PrixLog FLOAT,
    NumProj VARCHAR(20),
    FOREIGN KEY (NumProj) REFERENCES Projet (NumProj)
);

CREATE TABLE Realisation (
    NumProj VARCHAR(20),
    NumDev VARCHAR(20),
    PRIMARY KEY (NumProj, NumDev),
    FOREIGN KEY (NumProj) REFERENCES Projet (NumProj),
    FOREIGN KEY (NumDev) REFERENCES Developpeur (NumDev)
);




