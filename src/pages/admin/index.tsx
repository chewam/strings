import Link from "next/link";
import Header from "../../components/header";
import Page from "../../components/page";
import JobsList from "../../components/jobs-list";

function Admin() {
  return (
    <>
      <Header />
      <Page>
        <Link href="/admin/jobs">
          <a className="btn">Add job</a>
        </Link>
        <JobsList admin />
      </Page>
    </>
  );
}

export default Admin;
