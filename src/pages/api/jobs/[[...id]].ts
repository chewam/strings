import { withSentry } from "@sentry/nextjs";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  getJobs,
  createJob,
  updateJob,
  getJobById,
} from "../../../services/jobs";

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
    const job = await createJob(req.body);
    res.json(job);
  } else if (req.method === "PUT") {
    const { id, ...data } = req.body;
    const job = await updateJob(id, data);
    res.json(job);
  } else {
    res.status(405).end();
  }
};

export default withSentry(Job);
