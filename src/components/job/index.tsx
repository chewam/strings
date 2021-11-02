import { useState } from "react";

import Logo from "./logo";
import View from "./view";
import Form from "./form";
import Actions from "./actions";
import { useRouter } from "next/router";

const Job = ({ job, editing = false }: { job: Job; editing?: boolean }) => {
  const router = useRouter();
  const [edit, setEdit] = useState(editing);

  const handleDuplicate = async () => {
    const { id: originId, created_at, ...data } = job;

    data.title = `[COPY] ${data.title}`;

    const result = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const { id } = await result.json();
    router.push(`/jobs/${id}`);
  };

  return (
    <div className="job-view">
      <Logo />
      <div className="center">
        {edit ? <Form job={job} /> : <View job={job} />}
      </div>
      <Actions onEdit={() => setEdit(!edit)} onDuplicate={handleDuplicate} />
    </div>
  );
};

export default Job;
