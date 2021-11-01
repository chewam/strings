import useSWR, { SWRConfig } from "swr";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import Page from "../../components/page";
import fetcher from "../../utils/fetcher";
import Header from "../../components/header";
import JobView from "../../components/job-view";
import Footer from "../../components/footer";
import ContactForm from "../../components/contact-form";

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
      <section className="job">
        <Page>
          <SWRConfig value={{ fallback }}>
            <JobViewLoader />
          </SWRConfig>
        </Page>
      </section>
      <section className="bg-indigo-900 text-white py-10">
        <div
          id="apply-now"
          className="container mx-auto flex flex-col items-center px-40"
        >
          <h2 className="text-red-500 mb-5">
            Interested? Apply now for this position.
          </h2>
          <p className="text-center mb-10">
            Submit your CV by clicking on the button below and we will make sure
            to follow up with more relevant options.
          </p>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Job;
