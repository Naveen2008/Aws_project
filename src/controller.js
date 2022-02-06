const pool = require("../database");
const queries = require("./queries");

const getEmployees = (req, res) => {
  pool.query(queries.getEmployees, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addEmployee = (req, res) => {
  const { name, age } = req.body;
  pool.query(queries.addEmployee, [name, age], (error, results) => {
    if (error) {
      throw error;
      //   res.status(500).send("error");
    } else {
      res.redirect("/");
    }
    // res.status(201).json("Student created successfully");
  });
};

module.exports = {
  getEmployees,
  addEmployee,
};
