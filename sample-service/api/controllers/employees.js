const db = require('../config/database');

// Create new Employee.
exports.add = (req, res) => {
  const { name, positions, phone, location, email } = req.body;
  const sql = `
     INSERT INTO employees(name, positions, phone, location, email)
       values('${name}', '${positions}', '${phone}', '${location}', '${email}')
   `;

  if (!name || !positions || !phone || !location || !email)
    return res
      .status(404)
      .send({ message: 'Employee not created without right data' });

  db.promise(sql)
    .then((result) => res.status(201).send(result))
    .catch((err) =>
      res.status(500).send({
        message: err.message || 'Something wrong while creating employees.',
      }),
    );
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
  const sql = 'SELECT * FROM employees';

  db.promise(sql)
    .then((employees) => res.status(200).send(employees))
    .catch((err) =>
      res.status(500).send({
        message: err.message || 'Something wrong while retrieving employees.',
      }),
    );
};

// Delete a employee with the specified employeeId in the request.
exports.delete = (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM employees WHERE id = ${id}`;

  if (!id)
    return res
      .status(404)
      .send({ message: `Employee not found with id = ${id}` });

  db.promise(sql)
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
};
