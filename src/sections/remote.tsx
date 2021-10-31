import Image from "next/image";
import ContactForm from "../components/contact-form";

import remote from "../../public/images/remote.svg";

function Remote() {
  return (
    <section id="remote">
      <div className="container mx-auto p-10 flex">
        <div className="flex-1 pr-10">
          <h2 className="mb-5">Remote</h2>
          <p className="mb-10">
            Looking for a remote job and/or freelance projects?
            <br />
            Let us help you out:
          </p>
          <ContactForm />
        </div>
        <div className="flex-1 flex items-start">
          <Image
            width="800"
            height="800"
            src={remote}
            alt="remote section illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Remote;
