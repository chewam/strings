import Header from "../components/header";
import Footer from "../components/footer";
import Page from "../components/page";
import OffersList from "../components/jobs-list";

const Offers = () => {
  return (
    <>
      <Header />
      <Page>
        <OffersList />
      </Page>
      <Footer />
    </>
  );
};

export default Offers;
