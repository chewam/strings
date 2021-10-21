import Image from "next/image";

function Process() {
  return (
    <section id="process" className="process">
      <div className="content max-w-screen-xl">
        <div className="title">Process</div>
        <div>
          <div>
            <div>1</div>
            <div>Apply</div>
            <p>
              Simply send us your CV or a link to your professional profile.
              Your data is protected and we won’t share it with anyone without
              your approval. You can apply for a specific position (see all
              published positions here –link IT jobs), or you can just submit
              your CV (button) and let us inform you about relevant jobs based
              on your profile.
            </p>
          </div>
          <div>
            <div>2</div>
            <div>Meet our tech expert</div>
            <p>
              Meet our relevant tech expert(s) and have an informal talk about:
              technology, your plans and ambitions, the technical and
              non-technical details about the job(s). It shouldn’t take more
              than 1 hour and it can happen during, before or after the standard
              working time – depending on your preference.
            </p>
          </div>
          <div>
            <div>3</div>
            <div>Meet the employer</div>
            <p>
              If both sides – you and Strings – agree that it makes sense for
              you to meet with our client(s), we will put you in touch with
              them. Please, keep in mind that each company has its own specific
              ways of dealing with the relevant applicants.
            </p>
          </div>
          <div>
            <div>4</div>
            <div>Get hired</div>
            <p>
              Well, this last step doesn’t really need any further explanations.
              Good luck!
            </p>
          </div>
          <Image
            width="400"
            height="400"
            src="/images/process.svg"
            alt="process section illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Process;
