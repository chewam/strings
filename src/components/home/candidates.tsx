function Candidates() {
  return (
    <section id="candidates">
      <div className="container mx-auto bg-white shadow-xl p-20 flex flex-col items-center">
        <h2 className="mb-12">Candidates</h2>
        <p className="mb-20">These are the profiles we look for most often:</p>
        <div className="grid grid-rows-2 grid-flow-col gap-4 mb-20">
          <div>
            <div>{"{"}</div>
            Business Intellignece Analyst
          </div>
          <div>
            <div>{"{"}</div>
            Database Developer
          </div>
          <div>
            <div>{"{"}</div>
            Data Scientist
          </div>
          <div>
            <div>{"{"}</div>
            QA Engineer
          </div>
          <div className="row-span-2 border-4 border-red-500">
            <div className="text-2xl text-red-500">{"{"}</div>
            Software Developer
            <ul className="text-black font-sans text-base mt-4">
              <li>JavaScript/TypeScript</li>
              <li>PHP</li>
              <li>Java</li>
              <li>C#/.NET</li>
              <li>Android</li>
              <li>iOS</li>
              <li>C++</li>
              <li>Python</li>
              <li>Scala</li>
              <li>Go</li>
            </ul>
          </div>
          <div>
            <div>{"{"}</div>
            UI/UX Designer
          </div>
          <div className="col-span-2">
            <div>{"{"}</div>
            Digital Marketing Specialist
          </div>
          <div>
            <div>{"{"}</div>
            Project Manager
          </div>
        </div>
        <button className="big">Apply now</button>
      </div>
    </section>
  );
}

export default Candidates;
