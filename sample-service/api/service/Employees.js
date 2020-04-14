import EmployeesRepository from '../repositories/Employees';

const employeesRepository = new EmployeesRepository();

class EmployeesService {
  addEmployeeById(name, positions, phone, location, email) {
    return employeesRepository.addEmployeeById(
      name,
      positions,
      phone,
      location,
      email,
    );
  }

  findAll() {
    return employeesRepository.findAll();
  }

  deleteEmployeeById(id) {
    return employeesRepository.deleteEmployeeById(id);
  }
}

export default EmployeesService;
