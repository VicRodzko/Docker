const express = require('express');
const EmployeesService = require('../service/Employees');

const router = express.Router();
const employeesService = new EmployeesService();

router.get('/', (req, res) =>
  employeesService
    .findAll()
    .then((employees) => res.status(200).send(employees))
    .catch((err) =>
      res.status(500).send({
        message: err.message || 'Something wrong while retrieving employees.',
      }),
    ),
);

router.post('/', (req, res) => {
  const { name, positions, phone, location, email } = req.body;

  employeesService
    .addEmployeeById(name, positions, phone, location, email)
    .then((result) => res.status(201).send(result))
    .catch((err) =>
      res.status(500).send({
        message: err.message || 'Something wrong while creating employees.',
      }),
    );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  employeesService
    .deleteEmployeeById(id)
    .then((result) =>
      res.status(200).send({ message: 'Employee deleted successfully!' }),
    )
    .catch((err) =>
      res
        .status(500)
        .send({ message: `Could not delete employee with id ${id}` }),
    );
});

module.exports = router;
