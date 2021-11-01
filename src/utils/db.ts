import { Pool } from "pg";

const {
  NODE_ENV,
  POSTGRES_PORT,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  POSTGRES_HOST,
} = process.env;

const pool = new Pool({
  max: 4,
  idleTimeoutMillis: 30000,
  ssl: NODE_ENV === "production",
  connectionString: `postgres://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}`,
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
