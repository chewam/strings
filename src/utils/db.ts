import { Pool } from "pg";

const {
  POSTGRES_PORT,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  POSTGRES_HOST,
} = process.env;

const pool = new Pool({
  max: 4,
  idleTimeoutMillis: 30000,
  connectionString: `postgres://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}`,
});

const query = async (sql: string, values: string[] = []) => {
  console.log("QUERY:", sql, values);
  const client = await pool.connect();
  const { rows } = await client.query(sql, values);
  client.release();
  return rows;
};

const db = { query };

export default db;
