import { Pool } from "pg";

const {
  NODE_ENV,
  POSTGRES_PORT,
  POSTGRES_HOST,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
} = process.env;

const database = POSTGRES_DATABASE;
const host = `${POSTGRES_HOST}:${POSTGRES_PORT}`;
const user = `${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}`;

const pool = new Pool({
  max: 4,
  idleTimeoutMillis: 30000,
  ssl: NODE_ENV === "production",
  connectionString: `postgres://${user}@${host}/${database}`,
});

const query = async (sql: string, values: string[] = []) => {
  console.log("QUERY:", sql, values, NODE_ENV);
  const client = await pool.connect();
  const { rows } = await client.query(sql, values);
  client.release();
  return rows;
};

const db = { query };

export default db;
