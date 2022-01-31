const res = require("express/lib/response");
const connection = require("./connection");
const mysql = require('mysql2');

class DB {
  // Keeping a reference to the connection on the class in case we need it later
  constructor(connection) {
    this.connection = connection;
  }

  findAllDepartments() {
    const sql = `SELECT * FROM department`;

    connection.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ err: err.message });
            return;
        }
        return rows;
    });
  }

  // Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
  findAllEmployees() {
    return this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }

  createNewEmployee(employee) {
    return this.connection.promise().query(
          "INSERT INTO employee SET ?", employee
    );
  }
}

module.exports = DB;