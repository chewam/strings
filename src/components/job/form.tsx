import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const defaultValues = {
  title: "",
  salary: 0,
  office: "",
  profile: "",
  location: "",
  worktime: "",
  description: "",
};

const Form = ({ job = defaultValues }: { job?: Job }) => {
  const router = useRouter();
  const [data, setData] = useState(job);

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const result = await fetch("/api/jobs", {
      method: data.id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const { id } = await result.json();

    if (id !== job.id) {
      router.push(`/jobs/${id}`);
    } else {
      router.reload();
    }
  };

  useEffect(() => {
    setData(job);
  }, [job]);

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          required
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Location:
        <input
          required
          id="location"
          name="location"
          value={data.location}
          onChange={handleChange}
        />
      </label>
      <label>
        Salary:
        <input
          required
          id="salary"
          name="salary"
          value={data.salary}
          onChange={handleChange}
        />
      </label>
      <label>
        Work Time:
        <input
          required
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
          required
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
          required
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

export default Form;
