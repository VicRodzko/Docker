const express = require('express');
const Ajv = require('ajv');
const Schemes = require('../schemes/Schemes');
const EmployeesService = require('../service/Employees');

const schemes = new Schemes();
const ajv = new Ajv({ allErrors: true });
const router = express.Router();
const employeesService = new EmployeesService();

router.get('/', (req, res) =>
  employeesService
    .findAll()
    .then((employees) => {
      const valid = ajv.validate(
        schemes.getEmployeeSchemeResponse(),
        employees,
      );

      if (!valid) {
        res.status(406).send({
          message: ajv.errors[0].message,
        });
      }

      res.status(200).send(employees);
    })
    .catch((err) =>
      res.status(500).send({
        message: err.message || 'Something wrong while retrieving employees.',
      }),
    ),
);

router.post('/', (req, res) => {
  const { name, positions, phone, location, email } = req.body;
  const validRequestData = ajv.validate(
    schemes.addEmployeeSchemeRequest(),
    req.body,
  );

  if (!validRequestData) {
    res.status(400).send({
      message: ajv.errors[0].message,
    });
  }

  employeesService
    .addEmployeeById(name, positions, phone, location, email)
    .then(() =>
      res.status(201).send({ message: 'Employee added successfully!' }),
    )
    .catch((err) => res.status(500));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const valid = ajv.validate(schemes.deleteEmployeeSchemeRequest(), {
    id: Number(id),
  });

  if (!valid) {
    res.status(400).send({
      message: ajv.errors[0].message,
    });
  }

  employeesService
    .deleteEmployeeById(id)
    .then((result) =>
      res.status(200).send({ message: 'Employee deleted successfully!' }),
    )
    .catch((err) => res.status(500));
});

module.exports = router;
