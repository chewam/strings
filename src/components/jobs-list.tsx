import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import fetcher from "../utils/fetcher";

import { Clock, MapPin, DollarSign } from "react-feather";

import phpLogo from "../../public/images/php.svg";
import timeIcon from "../../public/images/time-icon.svg";
import salaryIcon from "../../public/images/salary-icon.svg";
import locationIcon from "../../public/images/location-icon.svg";

const JobsList = ({ admin = false }: { admin?: boolean }) => {
  const { data: jobs, error } = useSWR("/api/jobs", fetcher);
  if (error) return <div>failed to load</div>;
  if (!jobs) return <div>loading...</div>;
  return (
    <div>
      {jobs.map((job: Job, i: number) => (
        <div key={i} className="job flex items-center bg-cyan-100 mb-5 p-5">
          <div className="pr-4">
            <Image width="64" height="64" src={phpLogo} alt="php logo" />
          </div>
          <div className="flex-1">
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
              {job.technologies.map((technology, i) => (
                <div key={i} className="bg-white shadow px-2 mr-2">
                  {technology}
                </div>
              ))}
            </div>
          </div>
          <div>
            {admin ? (
              <>
                <Link href={`/admin/jobs/${job.id}`}>
                  <a className="btn">Edit</a>
                </Link>
              </>
            ) : (
              <Link href={`/jobs/${job.id}`}>
                <a className="btn">Learn more</a>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsList;
