import Header from "@/components/header";

import {
  Team,
  Remote,
  Contact,
  Landing,
  Privacy,
  Process,
  Employers,
  Candidates,
  ITExpertise,
} from "@/components/home";

function Page() {
  return (
    <>
      <Header noBackground={true} />
      <Landing />
      <Candidates />
      <Employers />
      <Process />
      <ITExpertise />
      <Team />
      <Remote />
      <Privacy />
      <Contact />
    </>
  );
}

export default Page;
