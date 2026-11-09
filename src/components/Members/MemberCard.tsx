import type { BandMember } from "../../data/members";
import { ArrowIcon, InstagramIcon } from "../shared/Icons";

type MemberCardProps = {
  member: BandMember;
};

function MemberCard({ member }: MemberCardProps) {
  return (
    <article className="member-card">
      <div className="member-art">
        <img className="member-photo" src={member.photo} alt={`Foto de ${member.name}, ${member.nickname}`} />
        <span className="member-number">{member.number}</span>
        <span className="member-role">{member.role}</span>
      </div>
      <div className="member-info">
        <p className="member-nickname">{member.nickname}</p>
        <h3>{member.name}</h3>
        <p className="member-bio">{member.bio}</p>
        <a
          className="instagram-link"
          href={`https://instagram.com/${member.instagram}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`Instagram de ${member.name}: @${member.instagram}`}
        >
          <InstagramIcon /> @{member.instagram} <ArrowIcon diagonal />
        </a>
      </div>
    </article>
  );
}

export default MemberCard;
