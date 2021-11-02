import Link from "next/link";
import Image from "next/image";

import Preview from "./job/preview";
import phpLogo from "../../public/images/php.svg";

const JobsList = ({ jobs }: { jobs: Job[] }) => (
  <div className="jobs-list">
    {jobs.map((job, i: number) => (
      <div key={i} className="job flex items-center bg-cyan-100 mb-5 p-5">
        <div className="pr-4">
          <Image width={64} height={64} src={phpLogo} alt="php logo" />
        </div>
        <div className="flex-1">
          <Preview job={job} />
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
