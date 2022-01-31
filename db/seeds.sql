INSERT INTO department (name)
VALUES
('Sales'),
('Marketing'),
('Information Technology'),
('Corporate Services'),
('Finance'),
('Consulting');

INSERT INTO role (title, salary, department_id)
VALUES
('CSO', '500000', '1'),
('Account Manager', '125000', '1'),
('CMO', '500000', '2'),
('Content Marketing Specialist', '90000', '2'),
('Lead Salesforce Technician', '150000', '3'),
('Database Engineer', '75000', '3'),
('Building Coordinator', '65000', '4'),
('Lead Security', '90000', '4'),
('CSO', '500000', '5'),
('Lead Accountant', '175000', '5'),
('Senior Consultant', '250000', '6'),
('Junior Consultant', '80000', '6');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Roberto', 'Carlos', '1', '1'),
('Vladimir', 'Gurerro', '2', '1'),
('Upton', 'Sinclair', '3', '1'),
('Thomas', 'Paine', '4', '3'),
('Phillip', 'Dick', '5', '1'),
('Emily', 'Dickinson', '6', '5'),
('Charles', 'Dickens', '7', '1'),
('Zdeno', 'Chara', '8', '7'),
('Zlatan', 'Ibrahimovic', '9', '9'),
('Luca', 'Modric', '10', '9'),
('Milan', 'Lucic', '11', '9'),
('James', 'Milner', '12', '11');














