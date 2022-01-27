const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// GET all roles
router.get('/', (req, res) => {
    const sql = `SELECT * FROM role`;

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

// ADD a role
router.post('/add', (req, res) => {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`; // expecting 3 param
    const params = [req.body.title, req.body.salary, req.body.department_id];

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


module.exports = router;