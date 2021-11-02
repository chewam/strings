import Link from "next/link";
import Image from "next/image";

import privacy from "../../public/images/privacy.svg";

function Privacy() {
  return (
    <section id="privacy">
      <div className="container mx-auto px-10 pt-10 flex flex-col items-center">
        <h2 className="my-10">Privacy</h2>
        <p className="text-center mb-20">
          Our activities are GDPR-compliant. In fact, we are also a registered
          Personal Data Administrator. To get the full picture of how we handle
          your data, please read our{" "}
          <Link href="/privacy-policy">
            <a>Privacy Statement</a>
          </Link>
          .
        </p>
        <Image
          width={600}
          height={450}
          src={privacy}
          alt="remote section illustration"
        />
      </div>
    </section>
  );
}

export default Privacy;
