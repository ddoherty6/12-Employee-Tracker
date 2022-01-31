const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// GET all employees
router.get('/', (req, res) => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// VIEW all employees by manager
router.get('/', (req, res) => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// ADD an employee
router.post('/add', (req, res) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`; // expecting 3 param
    const params = [req.body.first_name, req.body.last_name, req.body.department_id, req.body.manager_id];

    db.query(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: req.body
        });
    });
});

// UPDATE an employee role
router.post('/update/role', (req, res) => {
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`; // needs new role_id and then employee id
    const params = [req.body.role_id, req.body.id];

    db.query(sql, params, (err, rows) => {
        if (err) {
            res.status(404).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: req.body
        });
    });
});

// UPDATE an employee's manager
router.post('/update/manager', (req, res) => {
    const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`; // needs new role_id and then employee id
    const params = [req.body.role_id, req.body.id];

    db.query(sql, params, (err, rows) => {
        if (err) {
            res.status(404).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: req.body
        });
    });
});

// SELECT * FROM employee LEFT OUTER JOIN role ON employee.manager_id=role.id;
// +----+------------+-------------+---------+------------+------+----------------------------+--------+---------------+
// | id | first_name | last_name   | role_id | manager_id | id   | title                      | salary | department_id |
// +----+------------+-------------+---------+------------+------+----------------------------+--------+---------------+
// |  1 | Roberto    | Carlos      |       3 |          1 |    1 | CSO                        | 500000 |             1 |
// |  2 | Vladimir   | Gurerro     |       2 |          1 |    1 | CSO                        | 500000 |             1 |
// |  3 | Upton      | Sinclair    |       3 |          1 |    1 | CSO                        | 500000 |             1 |
// |  4 | Thomas     | Paine       |       4 |          3 |    3 | CMO                        | 500000 |             2 |
// |  5 | Phillip    | Dick        |       5 |          1 |    1 | CSO                        | 500000 |             1 |
// |  6 | Emily      | Dickinson   |      12 |          5 |    5 | Lead Salesforce Technician | 150000 |             3 |
// |  7 | Charles    | Dickens     |       7 |          1 |    1 | CSO                        | 500000 |             1 |
// |  8 | Zdeno      | Chara       |       8 |          7 |    7 | Building Coordinator       |  65000 |             4 |
// |  9 | Zlatan     | Ibrahimovic |       9 |          9 |    9 | CSO                        | 500000 |             5 |
// | 10 | Luca       | Modric      |      10 |          9 |    9 | CSO                        | 500000 |             5 |
// | 11 | Milan      | Lucic       |      11 |          9 |    9 | CSO                        | 500000 |             5 |
// | 12 | James      | Milner      |      12 |         11 |   11 | Senior Consultant          | 250000 |             6 |
// +----+------------+-------------+---------+------------+------+----------------------------+--------+---------------+

module.exports = router;