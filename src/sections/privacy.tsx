import Link from "next/link";
import Image from "next/image";

function Privacy() {
  return (
    <section id="privacy" className="privacy">
      <div className="container mx-auto">
        <div className="title">Remote</div>
        <p>
          Our activities are GDPR-compliant. In fact, we are also a registered
          Personal Data Administrator. To get the full picture of how we handle
          your data, please read our{" "}
          <Link href="/privacy-policy">
            <a>Privacy Statement</a>
          </Link>
          .
        </p>
        <Image
          width="400"
          height="600"
          src="/images/privacy.svg"
          alt="remote section illustration"
        />
      </div>
    </section>
  );
}

export default Privacy;
