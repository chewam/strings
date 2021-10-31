import type { NextApiRequest, NextApiResponse } from "next";

const Jobs = (req: NextApiRequest, res: NextApiResponse) => {
  res.json([
    {
      id: 1,
      title: "PHP Developer, Bulgaria",
      location: "sofia",
      salary: "800 - 1600 USD",
      worktime: "8 Hours/Day",
      technologies: ["php", "sql", "json", "warable"],
    },
    {
      id: 2,
      title: "PHP Developer, Bulgaria",
      location: "sofia",
      salary: "800 - 1600 USD",
      worktime: "8 Hours/Day",
      technologies: ["php", "sql", "json", "warable"],
    },
  ]);
};

export default Jobs;
