const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "daca1111",
  host: "localhost",
  port: 5432,
  database: "pernblog",
});

module.exports = pool;
