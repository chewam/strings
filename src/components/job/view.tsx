import ReactMarkdown from "react-markdown";

import Preview from "./preview";

const View = ({ job }: { job: Job }) => (
  <>
    <Preview job={job} big={true} />
    <div className="intro">
      <p>
        Strings IT Recruitment is helping IT/tech professionals discover more
        exciting career opportunities. Free of charge, of course.
      </p>
      <p>
        Our client is a Dutch-based market research company developing
        cutting-edge software products in the field of business analytics and
        Big Data.
      </p>
      <p>
        At the moment, they are looking for an experienced Frontend Developer to
        join their growing Sofia-based development team, which currently
        consists of about 10 people.
      </p>
    </div>
    <h2>Job Description</h2>
    <ReactMarkdown>{job.description}</ReactMarkdown>
    <h2>Profile</h2>
    <ReactMarkdown>{job.profile}</ReactMarkdown>
    <h2>Office Details</h2>
    <ReactMarkdown>{job.office}</ReactMarkdown>
  </>
);

export default View;
