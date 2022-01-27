const express = require('express');
const router = express.Router();
const db = require('../../db/connection');


// GET all departments
router.get('/', (req, res) => {
    const sql = `SELECT * FROM department`;

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

// ADD a department
router.post('/add', (req, res) => {
    const sql = `INSERT INTO department (name) VALUES (?)`; // expecting one param, name of new dept
    const params = [req.body.name];

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