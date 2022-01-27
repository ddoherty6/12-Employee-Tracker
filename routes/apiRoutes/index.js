const express = require('express');
const router = express.Router();

router.use('/department', require('./departmentRoutes.js'));
router.use('/role', require('./roleRoutes.js'));
router.use('/employee', require('./employeeRoutes.js'));

module.exports = router;