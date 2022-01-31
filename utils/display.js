const db = require('../db/connection.js');
const cTable = require('console.table');

// show all departments
const displayDepartments = function() {    
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.warn(err);
            return;
        }
        console.log("");
        console.table(rows);
        console.log("");
    });
}

// add a department
const addDepartment = function(name) {    
    const sql = `INSERT INTO department (name) VALUES (?)`;

    db.query(sql, name, (err, rows) => {
        if (err) {
            console.warn(err);
            return;
        }
    });
}

// show all roles
const displayRoles = function() {
    const sql = `SELECT role.title, role.id AS role_id, department.name AS department, role.salary FROM role JOIN department ON role.department_id=department.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.warn(err);
            return;
        }
        console.log("");
        console.table(rows);
        console.log("");
    });
}

// add a role
const addRole = function(info) {    
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;

    db.query(sql, info, (err, rows) => {
        if (err) {
            console.warn(err);
            return;
        }
    });
}

// show all employees
const displayEmployees = function() {
    const sql = `SELECT employee.id, CONCAT(employee.first_name, ' ', employee.last_name) AS name, role.title, department.name as department, role.salary, CONCAT(e2.first_name, ' ', e2.last_name) AS manager FROM employee JOIN role ON employee.role_id=role.id JOIN department ON role.department_id=department.id JOIN employee e2 ON e2.id=employee.manager_id`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.warn(err);
            return;
        }
        console.log("");
        console.table(rows);
        console.log("");
    });
}

// get a list of all employees for inquirer selection screen
const getEmployeeNames = async function() {
    const sql = `SELECT employee.id AS value, CONCAT(employee.first_name, ' ', employee.last_name) AS name FROM employee`;
    // grabbing employee IDs also as "value" so that user choice returns employee id in answer hash
    return db.promise().query(sql);
}

// add employee
const addEmployee = function(info) {    
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;

    db.query(sql, info, (err, rows) => {
        if (err) {
            console.warn(err);
            return;
        }
    });
}

const updateEmployeeRole = function(info) {    
    const sql = `UPDATE employee SET ? WHERE ?`;
    // info contains objects that are entered into literal ? => "role_id = x" and "id = y" 

    db.query(sql, info, (err, rows) => {
        if (err) {
            console.warn(err);
            return;
        }
    });
}

module.exports = {
    displayDepartments,
    addDepartment,
    displayRoles,
    addRole,
    displayEmployees,
    getEmployeeNames,
    addEmployee,
    updateEmployeeRole
};