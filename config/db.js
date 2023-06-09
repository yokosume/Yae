const { Client } = require("pg");

const pool = new Client({
  host: "postgres",
  port: 5432,
  user: "user",
  password: "pass",
  database: "db",
});

module.exports = pool;
