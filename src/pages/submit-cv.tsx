import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";

function Page() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="bg-white shadow-lg p-20 flex flex-col items-center">
          <h2 className="mb-10">Submit CV</h2>
          <p className="mx-20 mb-20 text-center">
            Submit your CV by clicking on the button bellow and we will make
            sure to follow up with more relevant options.
          </p>
          <div className="mx-40">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
