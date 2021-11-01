import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useSession } from "next-auth/client";
import { Clock, MapPin, DollarSign } from "react-feather";

import JobForm from "./job-form";
import phpLogo from "../../public/images/php.svg";

const JobTemplate = ({ job }: { job: Job }) => (
  <>
    <h1>{job.title}</h1>
    <div className="text-green-500 font-semibold flex items-center">
      <DollarSign size="16" />
      {job.salary}
    </div>
    <div className="flex text-sm text-gray-400">
      <div className="flex items-center mr-2">
        <MapPin size="16" className="mr-1" />
        {job.location}
      </div>
      <div className="flex items-center">
        <Clock size="16" className="mr-1" />
        {job.worktime}
      </div>
    </div>
    <div className="flex text-sm mt-2">
      {job.technologies?.map((technology, i) => (
        <div key={i} className="bg-white shadow px-2 mr-2">
          {technology}
        </div>
      ))}
    </div>
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

const JobLogo = () => (
  <div>
    <Image width="64" height="64" src={phpLogo} alt="php logo" />
  </div>
);

const JobActions = ({ handleEditChange }: { handleEditChange: () => void }) => {
  const [session] = useSession();

  return (
    <div className="flex flex-col">
      <Link href={`#apply-now`}>
        <a className="btn">Apply now</a>
      </Link>
      {session && (
        <>
          <button className="mt-5 admin" onClick={handleEditChange}>
            Edit job
          </button>
          <button className="mt-5 admin">Duplicate</button>
        </>
      )}
    </div>
  );
};

const JobView = ({ job }: { job: Job }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div className="job-view">
      <JobLogo />
      <div className="center">
        {edit ? <JobForm job={job} /> : <JobTemplate job={job} />}
      </div>
      <JobActions handleEditChange={() => setEdit(!edit)} />
    </div>
  );
};

export default JobView;
