const express = require("express");
const employeeRoutes = require("./src/routes");
const app = express();
const bodyParser = require("body-parser");
const pool = require("./database");
const queries = require("./src/queries");
const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// app.post("/", urlencodedParser, (req, res) => {
//   req.body;
// });

app.post("/", function (req, res) {
  const { name, age } = req.body;
  pool.query(queries.addEmployee, [name, age], (error, results) => {
    // if (error) {
    //   // throw error;
    //   // res.status(500).send("error");
    // }
    res.status(201).send("Student created successfully");
  });
});

app.use("/api/employees", employeeRoutes);
// app.use("/api/employees/add", employeeRoutes);

app.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}`);
});
