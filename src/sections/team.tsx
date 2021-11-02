import Image from "next/image";

import team1 from "../../public/images/team_1.png";
import team2 from "../../public/images/team_2.png";

function Team() {
  return (
    <section id="team">
      <div className="container mx-auto bg-white shadow-xl p-20 flex flex-col items-center mb-10">
        <h2 className="mb-12">The Team</h2>
        <div className="grid grid-cols-2 gap-28 my-10">
          <div className="tile">
            <div className="picture">
              <Image
                width={150}
                height={150}
                src={team1}
                alt="first team member picture"
              />
            </div>
            <div className="bracket">{"{"}</div>
            <div className="name">Dobromir Tsolyos</div>
            <div>CEO</div>
            <div className="networks">
              <div
                className=""
                style={{ backgroundImage: "url(/images/linkedin.svg)" }}
              ></div>
              <div
                className=""
                style={{ backgroundImage: "url(/images/facebook.svg)" }}
              ></div>
            </div>
          </div>
          <div className="tile">
            <div className="picture">
              <Image
                width={150}
                height={150}
                src={team2}
                alt="second team member picture"
              />
            </div>
            <div className="bracket">{"{"}</div>
            <div className="name">Gary van Woerkens</div>
            <div>Chief Technical Officer</div>
            <div className="networks">
              <div
                className=""
                style={{ backgroundImage: "url(/images/linkedin.svg)" }}
              ></div>
              <div
                className=""
                style={{ backgroundImage: "url(/images/facebook.svg)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
