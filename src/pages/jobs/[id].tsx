import useSWR, { SWRConfig } from "swr";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import Page from "../../components/page";
import fetcher from "../../utils/fetcher";
import Header from "../../components/header";
import JobView from "../../components/job-view";
import Footer from "../../components/footer";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const data = await fetch(`http://localhost:3000/api/jobs/${id}`);
  const job = await data.json();

  return {
    props: {
      fallback: {
        [`/api/jobs/${id}`]: job,
      },
    },
  };
};

const JobViewLoader = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: job, error } = useSWR(id ? `/api/jobs/${id}` : null, fetcher);

  if (error) return <div>failed to load job data</div>;
  if (!job) return <div>loading...</div>;

  return <JobView job={job} />;
};

const Job = ({ fallback = {} }: { fallback: Record<string, Job> }) => {
  return (
    <>
      <Header />
      <Page>
        <SWRConfig value={{ fallback }}>
          <JobViewLoader />
        </SWRConfig>
      </Page>
      <Footer />
    </>
  );
};

export default Job;
