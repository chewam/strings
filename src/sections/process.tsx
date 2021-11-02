import Image from "next/image";

import process from "../../public/images/process.svg";
import processArrow1 from "../../public/images/process_arrow_1.svg";
import processArrow2 from "../../public/images/process_arrow_2.svg";
import processArrow3 from "../../public/images/process_arrow_3.svg";

function Process() {
  return (
    <section id="process" className="process">
      <div className="container mx-auto pt-20 flex flex-col items-center">
        <h2 className="mb-20">Process</h2>
        <div className="grid grid-cols-4 gap-2">
          <div className="tile row-span-2">
            <div className="arrow mb-6 relative left-20 top-2">
              <Image
                width={140}
                height={140}
                src={processArrow1}
                alt="process section first arrow picto"
              />
            </div>
            <div className="number">1</div>
            <h3 className="my-8">Apply</h3>
            <p className="text-center text-sm px-3">
              Simply send us your CV or a link to your professional profile.
              Your data is protected and we won’t share it with anyone without
              your approval. You can apply for a specific position (see all
              published positions here –link IT jobs), or you can just submit
              your CV (button) and let us inform you about relevant jobs based
              on your profile.
            </p>
          </div>
          <div className="tile">
            <div className="arrow absolute z-10 ml-64 -mt-10">
              <Image
                width={120}
                height={120}
                src={processArrow2}
                alt="process section first arrow picto"
              />
            </div>
            <div className="number">2</div>
            <h3 className="my-8">Meet our tech expert</h3>
            <p className="text-center text-sm px-3">
              Meet our relevant tech expert(s) and have an informal talk about:
              technology, your plans and ambitions, the technical and
              non-technical details about the job(s). It shouldn’t take more
              than 1 hour and it can happen during, before or after the standard
              working time – depending on your preference.
            </p>
          </div>
          <div className="tile relative">
            <div className="number">3</div>
            <h3 className="my-8">Meet the employer</h3>
            <p className="text-center text-sm px-3">
              If both sides – you and Strings – agree that it makes sense for
              you to meet with our client(s), we will put you in touch with
              them. Please, keep in mind that each company has its own specific
              ways of dealing with the relevant applicants.
            </p>
          </div>
          <div className="tile relative row-span-2">
            <div className="arrow relative -left-24 top-4 mb-6">
              <Image
                width={140}
                height={140}
                src={processArrow3}
                alt="process section first arrow picto"
              />
            </div>
            <div className="number">4</div>
            <h3 className="my-8">Get hired</h3>
            <p className="text-center text-sm px-3">
              Well, this last step doesn’t really need any further explanations.
              Good luck!
            </p>
          </div>
          <div className="col-span-2 flex justify-center">
            <Image
              width={400}
              height={400}
              src={process}
              alt="process section illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
