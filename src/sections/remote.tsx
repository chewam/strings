import Link from "next/link";
import Image from "next/image";

function Remote() {
  return (
    <section id="remote" className="bg-green-500">
      <div className="container mx-auto">
        <div className="title">Remote</div>
        <p>
          Looking for a remote job and/or freelance projects? Let us help you
          out:
        </p>
        <form>
          <input />
          <input />
          <input />
          <textarea></textarea>
          <div>
            <input type="checkbox" />
            <div>
              I agree with your{" "}
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </div>
          </div>
          <div>
            <input type="checkbox" />
            <div>
              I want to receive regular updates, regarding similar and
              higher-paid job opportunities in the future.
            </div>
          </div>
          <button>Submit</button>
        </form>
        <Image
          width="400"
          height="600"
          src="/images/remote.svg"
          alt="remote section illustration"
        />
      </div>
    </section>
  );
}

export default Remote;
