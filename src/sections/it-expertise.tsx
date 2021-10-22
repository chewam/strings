import Image from "next/image";

function ITExpertise() {
  return (
    <section id="it-expertise" className="it-expertise">
      <div className="container mx-auto">
        <div className="title">IT Expertise</div>
        <p>
          The meetings with our candidates occur in the presence of at least one
          relevant IT expert who has at least 4 years of experience with the
          required technologies. Our IT experts will:
        </p>
        <div>
          <div>
            <Image
              width="150"
              height="150"
              src="/images/expertise_1.svg"
              alt="expertise section first illustration"
            />
            <p>
              Give you the complete picture of all technical aspects regarding
              the positions.
            </p>
          </div>
          <div>
            <Image
              width="150"
              height="150"
              src="/images/expertise_2.svg"
              alt="expertise section second illustration"
            />
            <p>
              Understand your level of expertise and your technological
              preferences.
            </p>
          </div>
          <div>
            <Image
              width="150"
              height="150"
              src="/images/expertise_3.svg"
              alt="expertise section third illustration"
            />
            <p>
              Offer you advice for future improvement (if necessary, of course).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ITExpertise;
