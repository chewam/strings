import { Clock, MapPin, DollarSign } from "react-feather";

const Preview = ({ job, big = false }: { job: Job; big?: boolean }) => (
  <>
    {big ? <h1>{job.title}</h1> : <h3>{job.title}</h3>}
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

export default Preview;
