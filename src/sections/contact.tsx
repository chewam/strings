import Image from "next/image";
import Map from "../components/map";

import twitter from "../../public/images/contact_twitter.svg";
import facebook from "../../public/images/contact_facebook.svg";
import linkedin from "../../public/images/contact_linkedin.svg";

function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto flex flex-col flex-1">
        <div className="mt-20 mb-10 mr-10 ml-32">
          <h2 className="my-10 text-red-500 text-3xl">
            Strings IT Recruitment
            <br />4 Iskar Str. 1000 Sofia, Bulgaria
          </h2>
          <p className="mb-4">
            dobromir@pullthestrings.me
            <br />
            +359 883 368 980 (BG)
          </p>
          <div className="networks mb-20">
            <div className="mr-2">
              <Image width="32" height="32" alt="linked logo" src={linkedin} />
            </div>
            <div className="mr-2">
              <Image width="32" height="32" alt="twitter logo" src={twitter} />
            </div>
            <div>
              <Image
                width="32"
                height="32"
                src={facebook}
                alt="facebook logo"
              />
            </div>
          </div>
          <button className="big mb-40">Search jobs</button>
          <div className="text-sm">
            Pull The Strings 2021 © All rights reserved
          </div>
        </div>
      </div>
      <div className="flex-1 bg-cyan-100">
        <Map />
      </div>
    </section>
  );
}

export default Contact;
