import type { NextApiRequest, NextApiResponse } from "next";

const Job = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({
    id: 1,
    title: "PHP Developer, Bulgaria",
    location: "sofia",
    salary: "800 - 1600 USD",
    worktime: "8 Hours/Day",
    technologies: ["php", "sql", "json", "warable"],
    description: `
### Front-end
Work on the frontend of Big Data-related software solutions
- Build pixel-perfect cross-browser web interfaces
- Develop scalable reusable components for continuous integration and deployment
- Use some cool JS frameworks such as React.js and Vue.js
- Take part in the frontend’s architecture
`,
    profile: `
- 3+ years of professional experience with JavaScript
- HTML5, CSS3
- Sass, Less
- Bootstrap
- You have built responsive interfaces before
- Experience with cross-browser web applications
- JavaScript OOP design patterns
- English – working level
    `,
    office: `
Type: Open space
- Fun: Table football, VR gadgets, Games
- Kitchen
- Electronic check-ins: yes/no
- Dog-friendly
    `,
  });
};

export default Job;
