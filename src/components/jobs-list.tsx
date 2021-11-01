import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, DollarSign } from "react-feather";

import phpLogo from "../../public/images/php.svg";

const JobPreview = ({ job }: { job: Job }) => (
  <>
    <h3>{job.title}</h3>
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
  </>
);

const JobsList = ({ jobs }: { jobs: Job[] }) => (
  <div>
    {jobs.map((job, i: number) => (
      <div key={i} className="job flex items-center bg-cyan-100 mb-5 p-5">
        <div className="pr-4">
          <Image width="64" height="64" src={phpLogo} alt="php logo" />
        </div>
        <div className="flex-1">
          <JobPreview job={job} />
        </div>
        <div>
          <Link href={`/jobs/${job.id}`}>
            <a className="btn">Learn more</a>
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default JobsList;
