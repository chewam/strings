import useSWR from "swr";
import { useRouter } from "next/router";
import Page from "../../../components/page";
import fetcher from "../../../utils/fetcher";
import Header from "../../../components/header";
import JobForm from "../../../components/job-form";
import Footer from "../../../components/footer";

const Job = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: job, error } = useSWR(
    id ? `/api/jobs/${id[0]}` : null,
    fetcher
  );

  if (error) return <div>failed to load job data</div>;

  return (
    <>
      <Header />
      <Page>
        <JobForm job={job} />
      </Page>
      <Footer />
    </>
  );
};

export default Job;
