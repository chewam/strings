import Link from "next/link";
import { GetStaticProps } from "next";
import useSWR, { SWRConfig } from "swr";

import fetcher from "@/utils/fetcher";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getJobs } from "@/services/jobs";
import JobsList from "@/components/jobs-list";
import Container from "@/components/container";

export const getStaticProps: GetStaticProps = async () => {
  const jobs = await getJobs();
  console.log("JOBS", jobs);

  return {
    props: {
      fallback: {
        "/api/jobs": jobs,
      },
    },
  };
};

const JobListLoader = () => {
  const { data: jobs, error } = useSWR("/api/jobs", fetcher);

  if (error) return <div>failed to load job data</div>;
  if (!jobs) return <div>loading...</div>;
  if (!jobs.length) return <div>there is no recorded job yet</div>;

  return <JobsList jobs={jobs} />;
};

const Jobs = ({ fallback = {} }: { fallback: Record<string, Job[]> }) => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-row-reverse mb-5">
          <Link href="/jobs/new">
            <a className="btn admin">Add job</a>
          </Link>
        </div>
        <SWRConfig value={{ fallback }}>
          <JobListLoader />
        </SWRConfig>
      </Container>
      <Footer />
    </>
  );
};

export default Jobs;
