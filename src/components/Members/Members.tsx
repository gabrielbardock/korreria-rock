import { members } from "../../data/members";
import MemberCard from "./MemberCard";
import "./Members.scss";

function Members() {
  return (
    <section className="members-section" id="integrantes">
      <div className="section-wrap">
        <div className="section-label" data-reveal="left"><span>02</span> QUEM FAZ A KORRERIA</div>
        <div className="section-heading" data-reveal="up">
          <div>
            <h2>Conheça a <span>banda.</span></h2>
          </div>
          <p>Histórias diferentes, a mesma paixão pelo palco e pela música.</p>
        </div>
        <div className="members-grid">
          {members.map((member) => <MemberCard key={member.instagram} member={member} />)}
        </div>
      </div>
    </section>
  );
}

export default Members;
