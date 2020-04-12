const express = require('express');
const employees = require('../controllers/employees');

const router = express.Router();

router.get('/', employees.findAll);
router.post('/', employees.add);
router.delete('/:id', employees.delete);

module.exports = router;
