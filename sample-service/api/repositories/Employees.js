const db = require('../settings/database');
const errorHandler = require('../handlers/errorHandler');

class EmployeesRepository {
  /**
   *
   * @param {string} name
   * @param {string} positions
   * @param {string} phone
   * @param {string} location
   * @param {string} email
   * @returns {Promise<any>}
   */
  addEmployeeById(name, positions, phone, location, email) {
    const sql = `
      INSERT INTO employees(name, positions, phone, location, email)
        values(?, ?, ?, ?, ?)
    `;

    return db
      .promise(sql, [name, positions, phone, location, email])
      .catch((err) => errorHandler(err));
  }

  /**
   *
   * @returns {Promise<any>}
   */
  findAll() {
    const sql = 'SELECT * FROM employees';
    return db.promise(sql).catch((err) => errorHandler(err));
  }

  /**
   *
   * @param {number} id
   * @returns {Promise<any>}
   */
  deleteEmployeeById(id) {
    const sql = 'DELETE FROM employees WHERE id = ?';
    return db.promise(sql, [id]).catch((err) => errorHandler(err));
  }
}

module.exports = EmployeesRepository;
