const { Pool } = require("pg");
const pool = new Pool({
  user: "naveenbabu",
  host: "localhost",
  database: "klarrio_testdb",
  password: "myaccount",
  port: 5432,
});
module.exports = pool;
