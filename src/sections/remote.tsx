import Link from "next/link";
import Image from "next/image";

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
          <form>
            <div className="fields">
              <input placeholder="NAME" />
              <input placeholder="EMAIL" />
              <input placeholder="CV" />
              <input placeholder="PORTFOLIO" />
            </div>
            <div className="checkboxes">
              <div className="checkbox">
                <label>
                  <span>
                    I agree with your{" "}
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </span>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="checkbox">
                <label>
                  I want to receive regular updates, regarding similar and
                  higher-paid job opportunities in the future.
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <button className="big secondary flex-initial">Submit</button>
          </form>
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
