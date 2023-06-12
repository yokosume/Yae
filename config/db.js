import * as pg from "pg";
const { Client } = pg;

export const pool = new Client({
  host: "postgres",
  port: 5432,
  user: "user",
  password: "pass",
  database: "db",
});
