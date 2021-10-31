import useSWR from "swr";
import { useRouter } from "next/router";
import Page from "../../../components/page";
import fetcher from "../../../utils/fetcher";
import Header from "../../../components/header";
import JobForm from "../../../components/job-form";

const Job = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: job, error } = useSWR(() => `/api/jobs/${id}`, fetcher);
  console.log("router", router, id, job);

  return (
    <>
      <Header />
      <Page>{job && <JobForm job={job} />}</Page>
    </>
  );
};

export default Job;
