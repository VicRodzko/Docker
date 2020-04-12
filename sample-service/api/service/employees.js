const Employees = require('../repositories/Employees');

const repositoryEmployees = new Employees();

exports.addEmployeeById = (name, positions, phone, location, email) =>
  repositoryEmployees.addEmployeeById(name, positions, phone, location, email);

exports.findAll = () => repositoryEmployees.findAll();

exports.deleteEmployeeById = (id) => repositoryEmployees.deleteEmployeeById(id);
