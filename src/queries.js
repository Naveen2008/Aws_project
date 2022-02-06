const getEmployees = "SELECT * FROM employees";
const addEmployee = "INSERT INTO employees (name,age) VALUES($1,$2)";

module.exports = {
  getEmployees,
  addEmployee,
};
