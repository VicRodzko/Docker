const EmployeesRepository = require('../repositories/Employees');

const employeesRepository = new EmployeesRepository();

class EmployeesService {
  /**
   *
   * @param {string} name
   * @param {string} positions
   * @param {string} phone
   * @param {string} location
   * @param {string} email
   * @returns {Promise<*>}
   */
  addEmployeeById(name, positions, phone, location, email) {
    return employeesRepository.addEmployeeById(
      name,
      positions,
      phone,
      location,
      email,
    );
  }

  /**
   *
   * @returns {Promise<*>}
   */
  findAll() {
    return employeesRepository.findAll();
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<*>}
   */
  deleteEmployeeById(id) {
    return employeesRepository.deleteEmployeeById(id);
  }
}

module.exports = EmployeesService;
