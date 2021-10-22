import Image from "next/image";

function Team() {
  return (
    <section id="team" className="team">
      <div className="container mx-auto">
        <div className="title">The Team</div>
        <div>
          <div>
            <Image
              width="150"
              height="150"
              src="/images/team_1.png"
              alt="first team member picture"
            />
            <div>Dobromir Tsolyos</div>
            <div>CEO</div>
          </div>
          <div>
            <Image
              width="150"
              height="150"
              src="/images/team_2.png"
              alt="second team member picture"
            />
            <div>Gary van Woerkens</div>
            <div>Chief Technical Officer</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
