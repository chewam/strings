import { withSentry } from "@sentry/nextjs";
import type { NextApiRequest, NextApiResponse } from "next";

import db from "../../../utils/db";

const getJobs = () => {
  const sql = "SELECT * FROM jobs";
  return db.query(sql);
};

const getJobById = async (id: string) => {
  const sql = "SELECT * FROM jobs WHERE id = $1";
  const jobs = await db.query(sql, [id]);
  return jobs[0];
};

const createJob = async (data: Job) => {
  const keys = Object.keys(data);
  const columns = keys.join(",");
  const values = Object.values(data) as string[];
  const bindings = keys.map((column, i) => `$${++i}`).join(",");
  const sql = `INSERT INTO jobs(${columns}) VALUES(${bindings}) RETURNING *`;

  const rows = await db.query(sql, values);
  return rows[0];
};

const updateJob = async (id: string, data: Job) => {
  const keys = Object.keys(data);
  const values = Object.values(data) as string[];
  const columns = keys.map((key, i) => `${key}=$${i + 2}`).join(",");
  const sql = `UPDATE jobs SET ${columns} WHERE id = $1 RETURNING *`;

  const rows = await db.query(sql, [id, ...values]);
  return rows[0];
};

const Job = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { id } = req.query;

    if (id) {
      const job = await getJobById(id[0]);
      res.json(job);
    } else {
      const jobs = await getJobs();
      res.json(jobs);
    }
  } else if (req.method === "POST") {
    const job = createJob(req.body);
    res.json(job);
  } else if (req.method === "PUT") {
    const { id, ...data } = req.body;
    const job = updateJob(id, data);
    res.json(job);
  } else {
    res.status(405).send("");
  }
};

export default withSentry(Job);
