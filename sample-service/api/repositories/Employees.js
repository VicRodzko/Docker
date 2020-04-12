const db = require('../config/database');

class Employees {
  addEmployeeById(name, positions, phone, location, email) {
    const sql = `
      INSERT INTO employees(name, positions, phone, location, email)
        values(?, ?, ?, ?, ?)
    `;

    return db.promise(sql, [name, positions, phone, location, email]);
  }

  findAll() {
    const sql = 'SELECT * FROM employees';

    return db.promise(sql);
  }

  deleteEmployeeById(id) {
    const sql = 'DELETE FROM employees WHERE id = ?';

    return db.promise(sql, [id]);
  }
}

module.exports = Employees;
