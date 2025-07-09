const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "daca1999",
  host: "localhost",
  port: 5432,
  database: "pernblog",
});

module.exports = pool;
