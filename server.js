const express = require("express");
const employeeRoutes = require("./src/routes");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded());
// app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("/api/employees", employeeRoutes);

app.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}`);
});
