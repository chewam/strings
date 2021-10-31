import { ChangeEvent, useState } from "react";

const JobForm = ({ job }: { job: Job }) => {
  const [data, setData] = useState(job);

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    console.log("event", event, name, value);
    setData({ ...data, [name]: value });
  };

  return (
    <form className="job-form">
      <label>
        Title:
        <input
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Location:
        <input
          id="location"
          name="location"
          value={data.location}
          onChange={handleChange}
        />
      </label>
      <label>
        Salary:
        <input
          id="salary"
          name="salary"
          value={data.salary}
          onChange={handleChange}
        />
      </label>
      <label>
        Work Tine:
        <input
          id="worktime"
          name="worktime"
          value={data.worktime}
          onChange={handleChange}
        />
      </label>
      {/* {job.technologies.map((technology: string, i: number) => (
        <input key={i} name="technology" value={technology} />
      ))} */}
      <label>
        Description:
        <textarea
          rows={10}
          id="description"
          name="description"
          value={data.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Profile:
        <textarea
          rows={10}
          id="profile"
          name="profile"
          value={data.profile}
          onChange={handleChange}
        />
      </label>
      <label>
        Office:
        <textarea
          rows={10}
          id="office"
          name="office"
          value={data.office}
          onChange={handleChange}
        />
      </label>
      <button className="big">Submit</button>
    </form>
  );
};

export default JobForm;
