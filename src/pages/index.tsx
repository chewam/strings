import Header from "../components/header";
import Home from "../sections/home";
import Team from "../sections/team";
import Remote from "../sections/remote";
import Contact from "../sections/contact";
import Process from "../sections/process";
import Employers from "../sections/employers";
import Candidates from "../sections/candidates";
import ITExpertise from "../sections/it-expertise";
import Privacy from "../sections/privacy";

function Page() {
  return (
    <>
      <Header noBackground={true} />
      <Home />
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
