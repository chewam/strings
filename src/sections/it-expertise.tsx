import Image from "next/image";

import expertise1 from "../../public/images/expertise_1.svg";
import expertise2 from "../../public/images/expertise_2.svg";
import expertise3 from "../../public/images/expertise_3.svg";

function ITExpertise() {
  return (
    <section id="it-expertise" className="it-expertise">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="mb-20">IT Expertise</h2>
        <p className="mb-20 text-center">
          The meetings with our candidates occur in the presence of at least one
          relevant IT expert who has at least
          <br />4 years of experience with the required technologies.
          <br />
          Our IT experts will:
        </p>
        <div className="grid grid-cols-3 gap-8 mx-10">
          <div className="tile">
            <div className="bracket">{"{"}</div>
            <div className="picto">
              <Image
                width="150"
                height="150"
                src={expertise1}
                alt="expertise section first illustration"
              />
            </div>
            <p className="text">
              Give you the complete picture of all technical aspects regarding
              the positions.
            </p>
          </div>
          <div className="tile">
            <div className="bracket">{"{"}</div>
            <div className="picto">
              <Image
                width="150"
                height="150"
                src={expertise2}
                alt="expertise section second illustration"
              />
            </div>
            <p className="text">
              Understand your level of expertise and your technological
              preferences.
            </p>
          </div>
          <div className="tile">
            <div className="bracket">{"{"}</div>
            <div className="picto">
              <Image
                width="150"
                height="150"
                src={expertise3}
                alt="expertise section third illustration"
              />
            </div>
            <p className="text">
              Offer you advice for future improvement (if necessary, of course).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ITExpertise;
