import Header from "../../components/header";
import Page from "../../components/page";
import JobsList from "../../components/jobs-list";

function Admin() {
  return (
    <>
      <Header />
      <Page>
        <JobsList admin />
      </Page>
    </>
  );
}

export default Admin;
