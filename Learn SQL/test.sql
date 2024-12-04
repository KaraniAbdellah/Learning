-- Insert rows into Developpeur
INSERT INTO Developpeur (NumDev, NomDev, AdrDev, EmailDev, TelDev) VALUES
('DEV001', 'Alice', '123 Main St', 'alice@example.com', '1234567890'),
('DEV002', 'Bob', '456 Oak Ave', 'bob@example.com', '0987654321'),
('DEV003', 'Charlie', '789 Pine Rd', 'charlie@example.com', '1122334455'),
('DEV004', 'Diana', '321 Elm St', 'diana@example.com', '6677889900'),
('DEV005', 'Eve', '654 Maple Ln', 'eve@example.com', '5566778899');

-- Insert rows into Projet
INSERT INTO Projet (NumProj, TitreProj, DateDeb, DateFin) VALUES
('PROJ001', 'Project A', '2024-01-01', '2024-06-01'),
('PROJ002', 'Project B', '2024-02-15', '2024-07-15'),
('PROJ003', 'Project C', '2024-03-01', '2024-08-01'),
('PROJ004', 'Project D', '2024-04-01', '2024-09-01'),
('PROJ005', 'Project E', '2024-05-01', '2024-10-01');

-- Insert rows into Logiciel
INSERT INTO Logiciel (CodeLog, NomLog, PrixLog, NumProj) VALUES
(101, 'Software X', 199.99, 'PROJ001'),
(102, 'Software Y', 299.99, 'PROJ002'),
(103, 'Software Z', 399.99, 'PROJ003'),
(104, 'Software W', 499.99, 'PROJ004'),
(105, 'Software V', 599.99, 'PROJ005');

-- Insert rows into Realisation
INSERT INTO Realisation (NumProj, NumDev) VALUES
('PROJ001', 'DEV001'),
('PROJ002', 'DEV002'),
('PROJ003', 'DEV003'),
('PROJ004', 'DEV004'),
('PROJ005', 'DEV005');
