import db from "../utils/db";

const columns = [
  "id",
  "title",
  "salary",
  "location",
  "office",
  "description",
  "worktime",
  "profile",
];

export const getJobs = () => {
  const sql = `SELECT ${columns.join(",")} FROM jobs`;
  return db.query(sql);
};

export const getJobById = async (id: string) => {
  const sql = `SELECT ${columns.join(",")} FROM jobs WHERE id = $1`;
  const jobs = await db.query(sql, [id]);
  return jobs[0];
};

export const createJob = async (data: Job) => {
  const keys = Object.keys(data);
  const columns = keys.join(",");
  const values = Object.values(data) as string[];
  const bindings = keys.map((column, i) => `$${++i}`).join(",");
  const sql = `INSERT INTO jobs(${columns}) VALUES(${bindings}) RETURNING *`;

  const rows = await db.query(sql, values);
  console.log("CREATE JOB rows", rows);

  return rows[0];
};

export const updateJob = async (id: string, data: Job) => {
  const keys = Object.keys(data);
  const values = Object.values(data) as string[];
  const columns = keys.map((key, i) => `${key}=$${i + 2}`).join(",");
  const sql = `UPDATE jobs SET ${columns} WHERE id = $1 RETURNING *`;

  const rows = await db.query(sql, [id, ...values]);
  return rows[0];
};
