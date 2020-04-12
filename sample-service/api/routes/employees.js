const express = require('express');
const serviceEmployees = require('../service/employees');

const router = express.Router();

router.get('/', (req, res) =>
  serviceEmployees
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

  if (!name || !positions || !phone || !location || !email)
    return res
      .status(404)
      .send({ message: 'Employee not created without right data' });

  serviceEmployees
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

  if (!id)
    return res
      .status(404)
      .send({ message: `Employee not found with id = ${id}` });

  serviceEmployees
    .deleteEmployeeById(id)
    .then((result) =>
      res.status(200).send({ message: 'Employee deleted successfully!' }),
    )
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound')
        return res
          .status(404)
          .send({ message: `Employee not found with id ${id}` });

      return res
        .status(500)
        .send({ message: `Could not delete employee with id ${id}` });
    });
});

module.exports = router;
